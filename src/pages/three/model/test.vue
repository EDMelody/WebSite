<route lang="yaml">
  meta:
      type:
      title: 1
</route>

<template>
  <div class="box">
    <div class="btn-box">
      <span>去除闪烁</span>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#cfcfcf">
      </el-switch>
    </div>
    <div class="warn">旋转场景查看物体重合部分会有闪烁的现象</div>
    <div ref="container" class="canvas-box"></div>
  </div>
</template>

<script setup lang="ts">
  import axios from "axios";
  import * as THREE from "three";
  import Stats from 'stats.js';
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
  import { Camera, WebGLRenderer } from "three";

  import threeColorUtil from '@/utils/threeColorUtil'

  const route = useRoute();
  const emit = defineEmits(['changeCodeView']) 
  const password = ref('151C7D83-5018-4DA3-8760-B6644F4E3FEF');
  const centerDialogVisible = ref(false);

  async function viewCodeHandle() {
    const { data } = await axios({
      url: import.meta.env.VITE_encrypt_url + '/views/resource',
      method: 'post',
      data: {
        url: route.meta.path,
        password: password.value
      }
    })
    emit("changeCodeView", data);
    centerDialogVisible.value = false
  }

  const visit = ref(0);
  const value = ref(false);
  const container:any = ref('');

  let camera: Camera, scene: THREE.Scene, stats: Stats, renderer: WebGLRenderer, cube: THREE.Mesh, cube2: THREE.Mesh;
  let animationId: any;

  function init() {
    camera = new THREE.PerspectiveCamera(45, container.value.offsetWidth / container.value.offsetHeight, 0.1, 5000);
    camera.position.set(0, 400, 300);

    scene = new THREE.Scene();

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 200, 100);
    scene.add(dirLight);


    const grid = new THREE.GridHelper(500, 20, 0x888888, 0x444444);
    scene.add(grid);

    const axesHelper = new THREE.AxesHelper(100)
    scene.add(axesHelper)

    // stats
    stats = new Stats()
    // 获取stats的dom元素
    const statsElement = stats.dom
    // 设置stats的dom样式
    statsElement.style.top = 'initial';
    statsElement.style.bottom = '0px';
    statsElement.style.position = 'absolute';
    container.value.appendChild(stats.dom);

    // model
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: "#0094ff",
      // polygonOffset: true,
      // polygonOffsetFactor: 1.0,
      // polygonOffsetUnits: 4.0
    });
    cube = new THREE.Mesh(geometry, material);
    cube.position.x = 80
    cube.position.y = 25
    scene.add(cube);

    const geometry2 = new THREE.BoxGeometry(50, 50, 50);
    const material2 = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: "#0094ff" });
    cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.x = 100
    cube2.position.y = 25
    scene.add(cube2);

    renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.value.offsetWidth, container.value.offsetHeight);
    container.value.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const Tcontrol = new TransformControls(camera, renderer.domElement);

    Tcontrol.addEventListener('change', function () {
      renderer.render(scene, camera);
      if (onIntersect()) {
        threeColorUtil.setMaterialColor(cube.material, 0xff0000)
      } else {
        threeColorUtil.setMaterialColor(cube.material, 0x0094ff)

      }
    });

    Tcontrol.addEventListener('dragging-changed', function (event) {
      controls.enabled = !event.value;
    });

    Tcontrol.attach(cube);
    scene.add(Tcontrol);

    window.addEventListener('resize', onWindowResize);

    watch(value, (val) => {
      if (val) {
        (cube.material as THREE.MeshBasicMaterial).polygonOffset = true;
        (cube.material as THREE.MeshBasicMaterial).polygonOffsetFactor = 1;
        (cube.material as THREE.MeshBasicMaterial).polygonOffsetUnits = 4;
      } else {
        (cube.material as THREE.MeshBasicMaterial).polygonOffset = false
      }
    })

  }

  function onIntersect() {
    // 声明一个变量用来表示是否碰撞
    let bool = false

    // .position 对象局部位置
    // .clone() 复制一个新的三维向量
    // 网格中心 世界坐标
    const centerCoord = cube.position.clone()
    // 获取网格中 几何对象的顶点对象
    const position = cube.geometry.attributes.position
    // 顶点三维向量
    const vertices = []
    // .count 矢量个数
    for (let i = 0; i < position.count; i++) {
      // .getX() 获取给定索引的矢量的第一维元素
      vertices.push(new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i)))
    }

    for (let i = 0; i < vertices.length; i++) {
      // .matrixWorld 物体的世界坐标变换 -- 物体旋转、位移 的四维矩阵
      // .applyMatrix4() 将该向量乘以四阶矩阵
      // 获取世界坐标下 网格变换后的坐标
      let vertexWorldCoord = vertices[i].clone().applyMatrix4(cube.matrixWorld)

      // .sub(x) 从该向量减去x向量
      // 获得由中心指向顶点的向量
      var dir = vertexWorldCoord.clone().sub(centerCoord)

      // .normalize() 将该向量转换为单位向量
      // 发射光线 centerCoord 为投射的原点向量  dir 向射线提供方向的方向向量
      let raycaster = new THREE.Raycaster(centerCoord, dir.clone().normalize())

      // 放入要检测的 物体cube2，返回相交物体
      let intersects = raycaster.intersectObjects([cube2], true)

      if (intersects.length > 0) {
        // intersects[0].distance：射线起点与交叉点之间的距离(交叉点：射线和模型表面交叉点坐标)
        // dir.length()：几何体顶点和几何体中心构成向量的长度
        // intersects[0].distance小于dir.length() 表示物体相交
        if (intersects[0].distance < dir.length()) {
          bool = true
        }
      }
    }
    return bool
  }

  function onWindowResize() {

    (camera as THREE.PerspectiveCamera).aspect = container.value.offsetWidth / container.value.offsetHeight;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
    renderer.setSize(container.value.offsetWidth, container.value.offsetHeight);

  }

  // 动画
  function animate() {
    animationId = requestAnimationFrame(animate);
    stats && stats.update();
    renderer.render(scene, camera);
  }

  // 销毁场景
  function clearScene() {
    window.removeEventListener("resize", onWindowResize);
    cancelAnimationFrame(animationId);
    scene.traverse((child: any) => {
      if (child.material) {
        if (Array.isArray(child.material)) {
          for (let i = 0; i < child.material.length; i++) {
            child.material[i].dispose()
          }
        } else {
          child.material.dispose();
        }
      }
      if (child.geometry) {
        child.geometry.dispose();
      }
      child = null;
    });
    renderer.renderLists.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    (renderer as any).content = null;
    scene.clear();
    (renderer as any).domElement = null;
    THREE.Cache.clear();
  }

  onBeforeUnmount(() => {
    clearScene();
  })

  onMounted(async () => {
    init();
    animate();
    setTimeout(() => {
      onWindowResize()
    }, 300)
    // visit.value = await getVisit();
  })

</script>

<style lang="scss" scoped>
.box {
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 16px;
  position: relative;

  .btn-box {
    right: 10px;
    top: 10px;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #0094ff;

    span {
      margin-right: 10px;
    }
  }

  .warn {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    text-align: center;
  }

  .canvas-box {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>

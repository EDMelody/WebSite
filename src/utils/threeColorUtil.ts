import * as THREE from 'three'

class ColorUtils {
  // 创建该方法是为了处理mesh.material对象中color属性不存在问题
  static setMaterialColor(material: THREE.Material | THREE.Material[], color: number | THREE.Color): void {
    if (Array.isArray(material)) {
      // 材质数组，遍历并设置每个材质的颜色
      material.forEach((mat: THREE.Material) => {
        if (
          mat instanceof THREE.MeshBasicMaterial ||
          mat instanceof THREE.MeshLambertMaterial ||
          mat instanceof THREE.MeshPhongMaterial ||
          mat instanceof THREE.MeshStandardMaterial ||
          mat instanceof THREE.MeshPhysicalMaterial ||
          mat instanceof THREE.MeshMatcapMaterial ||
          mat instanceof THREE.PointsMaterial ||
          mat instanceof THREE.LineBasicMaterial ||
          mat instanceof THREE.LineDashedMaterial ||
          mat instanceof THREE.SpriteMaterial
        ) {
          mat.color.set(color)
        }
      })
    } else {
      // 单个材质，直接设置颜色
      if (
        material instanceof THREE.MeshBasicMaterial ||
        material instanceof THREE.MeshLambertMaterial ||
        material instanceof THREE.MeshPhongMaterial ||
        material instanceof THREE.MeshStandardMaterial ||
        material instanceof THREE.MeshPhysicalMaterial ||
        material instanceof THREE.MeshMatcapMaterial ||
        material instanceof THREE.PointsMaterial ||
        material instanceof THREE.LineBasicMaterial ||
        material instanceof THREE.LineDashedMaterial ||
        material instanceof THREE.SpriteMaterial
      ) {
        material.color.set(color)
      }
    }
  }
}

export default ColorUtils
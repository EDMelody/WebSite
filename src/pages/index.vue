<!--
 * @Author: 
 * @Date: 2025-04-09 09:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-09 10:43:43
 * @FilePath: \vite-app\src\pages\index.vue
 * @Description: 
 * 
-->

<template>
  <div id="modelpage" class="dcc">
    <!-- herePage -->
    <div class="section">
      <div class="menu-item" v-for="(i, idx) in menu" @click="clickMenuEvent(i)">
        {{ i.title }}
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup lang='ts'>
const route = useRouter()
// console.log(route.getRoutes())
const menu = ref([
  { title: 'main模块', routePath: '/main/homepage' },
  { title: 'three模块', routePath: '/three/homepage' },
])
onMounted(() => {
})
const clickMenuEvent = (i) => {
  console.log(route)
  route.push(i.routePath)
}
</script>

<style lang="scss">
#modelpage {
  width: 100%;
  height: 100vh;
  background-color: #f2f3f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // 自动排版
  gap: 20px;
  width: 80%;
  max-width: 800px;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

/* 菜单项样式 */
.menu-item {
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #e6f0ff;
    border-color: #91caff;
    transform: translateY(-2px);
  }
}
</style>
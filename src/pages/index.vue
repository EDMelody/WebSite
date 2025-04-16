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
  { title: '渡一Demo', routePath: '/main/duyi/1' },
  { title: 'three', routePath: '/three/homepage' },
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
}
.section{
  width: 50%;
  max-width: 300px;
  // height: 350px;
  height: 300px;
  border: 1px solid;
  background: #fff;
  display: flex;
  padding: 10px;
}
.menu-item{
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  margin-right: 10px;
  @extend .dcc;
  // background-color: rgba(aqua, 0.5);
}
</style>

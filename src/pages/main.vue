<!--
 * @Author: 
 * @Date: 2025-04-09 09:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-09 10:45:16
 * @FilePath: \vite-app\src\pages\main\dashboard.vue
 * @Description: 
 * 
-->
<route lang="yaml">
  meta:
      type:
      index:
      title: SubMenuRouterView
</route>

<template>
  <div>
    <SubMenu :collapse="false">
      <template v-slot:content>
        <transition name="slide-page" mode="out-in">
          <RouterView></RouterView>
        </transition>
      </template>
    </SubMenu>
  </div>
</template>

<script setup lang='ts'>
import SubMenu from '@/components/SubMenu/index.vue'

const route = useRouter()
// console.log(route.currentRoute.value.fullPath)
</script>

<style scope lang='scss'>
.slide-page-enter-active,
.slide-page-leave-active {
  transition: all 0.4s ease;
  position: absolute;
  width: 100%;
}

.slide-page-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
.slide-page-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-page-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.slide-page-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
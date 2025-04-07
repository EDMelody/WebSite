<!--
 * @Author: zhangjiayun
 * @Date: 2022-09-14 11:10:01
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-04-25 15:40:18
 * @FilePath: \vite-app\src\pages\three\index.vue
 * @Description: three.js 首页
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
-->
<template>
  <div class="three-page">
    <el-menu
      :default-active="activeName"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @select="handleChangeRoute"
      @open="handleOpen"
      @close="handleClose"
    >
      <template  v-for="route in menuList" :key="route.path">
        <el-menu-item  :index="route.name" v-if="route.children.length === 0">
          <span v-bind:class="{ 'active-link': activeName === route.name }" >{{ route.meta.title }}</span>
        </el-menu-item>
        <el-sub-menu :index="route.name" v-else>
          <template #title>
            <span>{{ route.meta.title }}</span>
          </template>
          <el-menu-item :index="routeChild.name" v-for="routeChild in route.children" :key="routeChild.path">
            <span v-bind:class="{ 'active-link': activeName === routeChild.name }" >{{ routeChild.meta?.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
    <div class="page-main-body" :style="`width: calc(100% - ${isCollapse ? '56' : '200'}px);`">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { RouteRecordRaw } from 'vue-router';

const route = useRouter()
let isCollapse = ref<boolean>(false)
const menuList = route.getRoutes().filter((item: RouteRecordRaw) => item.meta?.type === 'three' && item.meta?.index === 3)
let activeName = ref(route.currentRoute.value.name)

onMounted(() => {
  console.log(route.getRoutes());
  console.log(menuList);
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 路由切换页面跳转
const handleChangeRoute = (key:string, keyPath: string[]) => {
  activeName.value = key
  route.push({name: key})
}
</script>

<style scope lang='scss'>
.active-link{
  color: red;
}
.three-page{
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0, 0.1);
  display: flex;
}
.el-menu-vertical-demo{
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.page-main-body{
  height: 100vh;
  background: #fff;
}
</style>
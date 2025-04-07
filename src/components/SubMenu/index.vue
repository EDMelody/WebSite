<!--
 * @Author: 
 * @Date: 2025-04-03 17:26:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-03 18:03:56
 * @FilePath: \vite-app\src\components\SubMenu\index.vue
 * @Description: 侧边栏组件
 * 
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
// let isCollapse = ref<boolean>(false)
let activeName = ref(route.currentRoute.value.name)
const props = defineProps({
  collapse: Boolean,
  metaInfo: Object,
})
const defaultMetaInfo = {
  type: 'main',
  index: 3
}
const isCollapse = computed(() => props.collapse || false)

const menuList = route.getRoutes().filter((item: RouteRecordRaw) => item.meta?.type === (props.metaInfo?.type || defaultMetaInfo.type) && item.meta?.index === (props.metaInfo?.index || defaultMetaInfo.index))

onMounted(() => {
  // console.log(route.getRoutes());
  // console.log(menuList);
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
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
  <div>
    <SubMenu :metaInfo="metaInfo" :collapse="collapse"></SubMenu>
  </div>
</template>

<script setup lang='ts'>

import SubMenu from '@/components/SubMenu/index.vue'
// import { RouteRecordRaw } from 'vue-router';

// const route = useRouter()
const collapse = ref<boolean>(false)
const metaInfo = {
  type: 'three',
  index: 3
}

</script>

<style scope lang='scss'>

</style>
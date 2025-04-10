<!--
 * @Author: 
 * @Date: 2023-04-24 15:31:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-03 16:57:27
 * @FilePath: \vite-app\src\pages\three\index\index.vue
 * @Description: 
 * 
-->
<route lang="yaml">
meta:
  type: three
  index: 3
  title: dashboard
</route>
<template>
  <div>
    <el-button @click="onSubmit">按钮</el-button>
    首页</div>
</template>

<script setup lang='ts'>
let x = ref(1)
const onSubmit = () => {
  debugger
  x.value += 1
  console.log(x)  

  console.log('submit!')
}
</script>

<style scope lang='scss'>

</style>
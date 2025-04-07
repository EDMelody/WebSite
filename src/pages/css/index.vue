<!--
 * @Author: 
 * @Date: 2022-09-14 14:21:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-07 15:44:22
 * @FilePath: \vite-app\src\pages\css\index.vue
 * @Description: 
 * 
-->
<template>
  <div class="w-100">
    <div class="title">css</div>
    <div class="container w-100">
      <div class="list"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scope lang='scss'>
.title{
  width: 200px;
  @extend .dcc;
  margin: 100px auto;
  font-size: 40px;
}
.list{
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  border: 1px solid;
  margin: 0 auto;
}
</style>
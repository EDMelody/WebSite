<!--
 * @Author: 
 * @Date: 2025-07-11 11:23:41
 * @LastEditors: 
 * @LastEditTime: 2025-07-11 11:35:12
 * @FilePath: \vite-app\src\components\TempComponents\HelloWorld.vue
 * @Description: 
 * 
-->
<template>
  <div>HelloWorld {{ props.placeholder }}</div>
</template>

<script setup lang='ts'>
const props = defineProps(['placeholder'])
console.log(props.placeholder);
</script>

<style scoped lang='scss'>

</style>
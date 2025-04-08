
<template>
  <div id="modelpage">
    测试页面
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
const route = useRouter()
console.log(route.getRoutes())
onMounted(() => {
})
</script>
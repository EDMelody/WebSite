<!--
 * @Author: 
 * @Date: 2025-04-09 09:12:45
 * @LastEditors: 
 * @LastEditTime: 2025-04-09 10:46:50
 * @FilePath: \vite-app\src\pages\main\dashboard\tools\1.vue
 * @Description: 
 * 
-->
<route lang="yaml">
    meta:
        type:
        title: 二维码生成
</route>

<template>
    1page-tools
</template>

<script setup lang='ts'>
import { generateCode } from './generateQrCode.js'

generateCode()
</script>

<style scope lang='scss'>

</style>
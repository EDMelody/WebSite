<!--
 * @Author: 
 * @Date: 2025-04-09 09:12:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-11 17:15:11
 * @FilePath: \vite-app\src\pages\main\tools\generateQrcode.vue
 * @Description: 
 * 
-->
<route lang="yaml">
    meta:
        type:
        title: 二维码生成
</route>

<template>
    <div class="m-padding">
        <div class="main-body">
            <div class="textarea"></div>
            <div class="output-pic"></div>
        </div>
    </div>
</template>

<script setup lang='ts'>
// import { generateCode } from './generateQrCode.js'

// generateCode()
</script>

<style scope lang='scss'>
.main-body{
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 48px;
    width: auto;
    transition: .6s all cubic-bezier(.4,0,.2,1);
    height: 250px;
    // border: 1px solid;
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    .textarea, .output-pic{
        flex: 1;
        border: 1px solid #000;
    }
}
</style>
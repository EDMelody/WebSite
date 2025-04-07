<!--
  pageName: svg-icon组件
  describe:
-->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup lang='ts'>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scope lang='scss'>
.svg-icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
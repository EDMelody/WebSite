<template>
  <el-select v-bind="$attrs" v-model="modelValue">
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script setup lang="ts">
defineProps<{
  options: Array<{ label: string; value: any }>
}>()

const modelValue = defineModel()
</script>
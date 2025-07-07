<template>
  <el-form ref="formRef" :rules="rules" :model="modelValue">
    <el-form-item
      v-for="item in formItems"
      :key="item.key"
      :label="item.label"
      :prop="item.key"
    >
      <component
        :is="componentMap[item.type]"
        v-bind="getProps(item)"
        v-model="modelValue[item.key]"
        v-on="extractListeners(item)"
      ></component>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ElInput, ElInputNumber, FormInstance } from "element-plus";
import { useTemplateRef } from "vue";
import Select from "./Select/select.vue";
// @ts-ignore
import { omit } from "lodash";

defineProps(["formItems", "rules"]);
const formInstance = useTemplateRef<FormInstance>("formRef");
const modelValue = defineModel() as any;


// type FormComponentType = 'input' | 'number';
// const componentMap: Record<FormComponentType, Component>  = {
const componentMap = {
  input: ElInput,
  number: ElInputNumber,
  select: Select
} as any;

const rootProps = ['label', 'key', 'type']

// 获取props,可以处理不穿props的情况
function getProps(item: any) {
  if (item.props) return item.props
  return omit(item, rootProps)
}

// 处理监听
const extractListeners = (item: Record<string, any>) => {
  const listeners: Record<string, Function> = {}

  for (const key in item) {
    if (typeof item[key] === 'function') {
      listeners[key] = item[key]
    }
  }

  return listeners
}

defineExpose({
  validate(...args: any[]) {
    return (formInstance.value as FormInstance).validate(...args);
  }
})
</script>

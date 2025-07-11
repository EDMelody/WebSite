<!--
 * @Author: 
 * @Date: 2025-07-11 10:53:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-07-11 12:03:02
 * @FilePath: \vite-app\src\components\FormBuilder\FormBuilder.vue
 * @Description: 
 * 
-->
<template>
  <el-form ref="formRef" :rules="rules" :model="modelValue">
    <el-row>
      <el-col v-for="item in items" :key="item.key" :span="item.span || 24">
        <el-form-item
          :label="item.label"
          :prop="item.key"
        >
          <slot :name="item.key">
            <component
              :is="getComponent(item)"
              v-bind="getProps(item)"
              v-model="modelValue[item.key]"
              v-on="extractListeners(item)"
            ></component>
          </slot>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { ElInput, ElInputNumber, type FormInstance } from "element-plus";
import { useTemplateRef } from "vue";
import Select from "./Select/select.vue";
// @ts-ignore
import { omit } from "lodash";

const props = defineProps(["formItems", "rules"]);
const formInstance = useTemplateRef<FormInstance>("formRef");
const modelValue = defineModel() as any;
const items = computed(() => {
  return props.formItems.filter((i: any) => !i.hidden)
})

// type FormComponentType = 'input' | 'number';
// const componentMap: Record<FormComponentType, Component>  = {
const componentMap = {
  input: ElInput,
  number: ElInputNumber,
  select: Select
} as any;

const rootProps = ['label', 'key', 'type']

function getComponent(item: any) {
  const { type } = item
  /**
   * type 是一个函数或者是一个对象
   */
  if (type && typeof type !== 'string') {
    return type
  }
  return componentMap[type || 'input']
}

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

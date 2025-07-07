<route lang="yaml">
    meta:
        type: 
        title: 动态表单
</route>

<template>
    <div class="page">
        <div class="form">
            <FormBuilder ref="formRef" :formItems="formItems" v-model="formData" :rules="rules"></FormBuilder>
            <el-button @click="onSubmit">提交</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import FormBuilder from '@/components/FormBuilder/FormBuilder.vue';
import { useTemplateRef } from 'vue';

const formData = ref({
    name: undefined,
    age: undefined
})

const rules = {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 10, message: '长度在 2 到 10 个字符之间', trigger: 'blur' }
    ],
    age: [
        { required: true, message: '请输入年龄', trigger: 'blur' },
        { type: 'number', min: 1, max: 120, message: '年龄必须在 1 到 120 之间', trigger: 'blur' }
    ]
}

// setTimeout(() => {
//     console.log('formData.value ==>', formData.value)
// }, 4000)
/** 支持props 也可以去除props
 *  {
        label: '年龄',
        key: 'age',
        type: 'number',
        props: {
            placeholder: '请输入年龄'
        },
    },
 */
const formItems = computed(() => [
    {
        label: '姓名',
        key: 'name',
        type: 'input',
        placeholder: '请输入姓名',
        click() {
            console.log('姓名输入框被点击了');
        },
    },
    {
        label: '年龄',
        key: 'age',
        type: 'number',
        controlsPosition: 'right',
        placeholder: '请输入年龄',
        blur() {
            console.log('年龄输入框焦点');
        },
        change(value: number) {
            console.log('年龄输入值改变', value);
        }
    },
    {
        label: '性别',
        key: 'sex',
        type: 'select',
        placeholder: '请选择性别',
        options: [
            { label: '男', value: '1'},
            { label: '女', value: '2'},
            { label: '未知', value: '3'}
        ]
    }
])
const formInstance = useTemplateRef('formRef')
async function onSubmit () {
    await formInstance.value.validate()
    console.log('成功formData.value ==>', formData.value)
}
</script>

<style scope lang='scss'>
.page{
    background-color: #f2f0d3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .form{
        width: 500px;
        height: 300px;
        margin: 0 auto;
    }
}
</style>
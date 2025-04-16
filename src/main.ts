/*
 * @Author: 
 * @Date: 2022-09-08 17:47:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-07 15:16:45
 * @FilePath: \vite-app\src\main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
const app = createApp(App)
app.component('svg-icon', SvgIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')

/*
 * @Author: 
 * @Date: 2022-09-08 17:47:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-14 14:49:23
 * @FilePath: \vite-app\src\router\router.ts
 * @Description: 
 * 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// three.js 路由合集
import threeRouter from "./threeRouter";
// main 路由合集
import mainRouter from "./mainRouter";
// 定义了一个类型用来扩展RouteRecordRaw类型
type RouteRecordRawConfig = RouteRecordRaw & {
  meta: {
    title: string,
    type: string,
    icon: string,
    index: number
  },
  children?: RouteRecordRawConfig[]
}

const routes: RouteRecordRawConfig[] = [
  {
    path: '/',
    redirect: '/index-css',
    meta: { title: '', type: '', icon: '', index: 0 }
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '', type: '', icon: '', index: 1 },
    component: () => import("@/pages/home/index.vue"),
    children: [
      ...threeRouter, // three.js
      ...mainRouter, // css特效样式
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
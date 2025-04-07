/*
 * @Author: 
 * @Date: 2022-09-14 15:31:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-07 09:53:14
 * @FilePath: \vite-app\src\router\mainRouter.ts
 * @Description: 
 * 
 */
const cssRouter = [
  {
    path: '/index-main',
    name: 'index-main',
    component: () => import("@/pages/main/index.vue"),
    meta: { title: 'main', type: '', icon: '', index: 2 }
  }
]
export default cssRouter
/*
 * @Author: 
 * @Date: 2022-09-14 15:31:25
 * @LastEditors: 
 * @LastEditTime: 2023-04-20 17:12:06
 * @FilePath: \vite-app\src\router\cssRouter.ts
 * @Description: 
 * 
 */
const cssRouter = [
  {
    path: '/index-css',
    name: 'index-css',
    component: () => import("@/pages/css/index.vue"),
    meta: { title: 'css', type: '', icon: '', index: 2 }
  }
]
export default cssRouter
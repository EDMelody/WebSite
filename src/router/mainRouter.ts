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
    meta: { title: 'main', type: '', icon: '', index: 2 },
    children: [
      {
        name: 'main-index',
        path: '/main-index',
        // component: () => import("@/pages/main/index.vue"),
        meta: { title: '首页', type: 'main', icon: '', index: 3 },
      },
      {
        name: 'duyi-demo',
        path: '/duyi-demo',
        component: () => import("@/pages/showChild.vue"),
        meta: { title: '渡一demo', type: 'main', icon: '', index: 3 },
        children: [
          {
            name: 'duyi-test',
            path: '/duyi-test',
            component: () => import("@/pages/main/duyi/index.vue"),
            meta: { title: 'DEMO1', type: 'main', icon: '', index: 4 }
          },
          {
            name: 'duyi-test1',
            path: '/duyi-test1',
            component: () => import("@/pages/main/duyi/index1.vue"),
            meta: { title: 'DEMO2', type: 'main', icon: '', index: 4 }
          }
        ]
      }
    ]
  }
]
export default cssRouter
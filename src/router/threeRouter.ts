/*
 * @Author: 
 * @Date: 2023-04-20 13:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-03 13:51:59
 * @FilePath: \vite-app\src\router\threeRouter.ts
 * @Description: 
 * 
 */
const threeRouter = [
  {
    path: '/index-three',
    name: 'index-three',
    component: () => import("@/pages/three/index.vue"),
    meta: { title: 'three', type: '',  icon: '', index: 2 },
    children: [
      {
        name: 'three-index',
        path: '/three-index',
        component: () => import("@/pages/three/index/index.vue"),
        meta: { title: '首页', type: 'three', icon: '', index: 3 },
      },
      {
        name: 'three-model',
        path: '/three-model',
        component: () => import("@/pages/three/model/model.vue"),
        meta: { title: '模型', type: 'three', icon: '', index: 3 },
        children: [
          {
            name: 'three-test',
            path: '/three-test',
            component: () => import("@/pages/three/model/test/test.vue"),
            meta: { title: '测试', type: 'three', icon: '', index: 4 }
          }
          
        ]
      }
    ]
  }
]

export default threeRouter
/*
 * @Author: 
 * @Date: 2022-09-14 15:31:35
 * @LastEditors: 
 * @LastEditTime: 2023-03-24 15:03:03
 * @FilePath: \vite-app\src\router\echartsRouter.ts
 * @Description: 
 * 
 */
const echartsRouter = [
  {
    path: '/index-echarts',
    name: 'index-echarts',
    component: () => import('@/pages/echarts/index.vue'),
    meta: { title: 'echarts', type: '', icon: '', index: 2  }
  }
]
export default echartsRouter
/*
 * @Author: zjy
 * @Date: 2022-09-08 17:47:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-14 14:49:23
 * @FilePath: \vite-app\src\router\router.ts
 * @Description: 
 * router auto import website: https://uvr.esm.is/guide/configuration.html
 * vue page can set SFC custom block for Route Data
 * Supported parser: JSON, JSON5, YAML
 * Default: JSON5
 * <route>
      {
        name: "name-override",
        meta: {
          requiresAuth: false
        }
      }
    </route>
 * YAML
 * <route lang="yaml">
      name: name-override
      meta:
        requiresAuth: true
    </route>
 */


import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory('/WebSite/'),
  routes,
})
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
/*
 * @Author: 
 * @Date: 2024-07-12 15:59:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-03 16:25:30
 * @FilePath: \vite-app\vite.config.ts
 * @Description: 
 * 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { viteMockServe  } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import { fileURLToPath } from 'url'
// 准备设置element-plus按需导入 - styleImport 报错
// import styleImport from 'vite-plugin-style-import'
// import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dirs: ['./src/pages'], // 默认扫描的目录，您可以自定义
      dts: './src/typed-router.d.ts', // 自动生成类型声明文件
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    viteMockServe({
      mockPath: './src/mock/source', // 解析indexTs的位置
      localEnabled: true // 是否开启开发环境
    }),
    AutoImport({
      // Auto import function from Vue, e.g ref, reactive, useRoute...
      imports: [
        'vue',
        // 'vue-router',
        VueRouterAutoImports
      ],
      resolvers:[],
      // 声明文件生成位置喝名称
      dts: './auto-import.d.ts'
    }),
    createSvgIconsPlugin({
      // 指定需要缓存得图标文件夹
      iconDirs: [path.resolve(process.cwd(), './src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus',
    //       esModule: true,
    //       resolveStyle: name => {
    //         return  `element-plus/lib/theme-chalk/${name}.css`
    //       }
    //     }
    //   ]
    // }),
    // // 按需导入element-plus组件
    // ViteComponents({
    //   customComponentResolvers: [ ElementPlusResolver() ]
    // }),
    
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    // 配置路劲别名
    alias: {
      '@': path.resolve(__dirname, './src'), // 方法1
      // '@': fileURLToPath(new URL('./src', import.meta.url)), // 方法2
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        additionalData:
          // 使用@use代替原来的@import 
          `@use "@/assets/css/global.scss" as *;`
      }
    }
  },
  server: {
    // 服务器主机名
    host: '0.0.0.0',
    // 端口号
    port: 8080,
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false,
    // 自定义代理规则
    proxy: {
      // 选项写法
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // }
    }
  }
})

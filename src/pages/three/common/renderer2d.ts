/*
 * @Author: zhangjiayun
 * @Date: 2023-02-20 16:42:36
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-02-20 16:51:01
 * @FilePath: \vite-app\src\pages\three\common\renderer2d.ts
 * @Description: 渲染器
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
 */

import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";

export const initRender2D = (width: number, height: number) => {
  const renderer2d = new CSS2DRenderer();
  renderer2d.setSize(width, height);
  renderer2d.domElement.style.position = 'absolute';
  renderer2d.domElement.style.top = '0';
  renderer2d.domElement.tabIndex = 0;
  renderer2d.domElement.className = 'renderer2dbox'
  return renderer2d
}

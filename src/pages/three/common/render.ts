/*
 * @Author: zhangjiayun
 * @Date: 2023-02-20 16:56:28
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-02-20 16:56:31
 * @FilePath: \vite-app\src\pages\three\common\render.ts
 * @Description: 渲染器
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
 */
import { WebGLRenderer } from "three";
// import { PCFShadowMap } from "three";

export const initRender = (width: number, height: number) => {
  let renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });
  // renderer.shadowMap.enabled = false;
  // renderer.shadowMap.type = PCFShadowMap;
  renderer.setSize(width, height)

  return renderer
}

/*
 * @Author: zhangjiayun
 * @Date: 2023-02-20 17:01:10
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-02-20 17:04:02
 * @FilePath: \vite-app\src\pages\three\common\camera.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
 */

import { PerspectiveCamera } from "three";

export const initCamera = (width: number, height: number) => {
  let aspect = width / height;
  let camera = new PerspectiveCamera(45, aspect, 0.1, 1000);
  camera.position.set(30, 26, 10);

  return camera
}
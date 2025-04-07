/*
 * @Author: zhangjiayun
 * @Date: 2022-09-19 10:26:57
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-02-20 17:52:18
 * @FilePath: \vite-app\src\pages\three\model\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
 */
import * as THREE from "three";

import { initRender } from "@/pages/three/common/render";
import { initCamera } from "@/pages/three/common/camera";

class modelPage {
  width: number;
  height: number;
  dom: HTMLElement;
  constructor (
    containerId: string
  ) {
    // 两种写法
    // this.dom = document.getElementById(containerId) as HTMLElement
    this.dom = <HTMLElement>document.getElementById(containerId)
    this.width = this.dom.offsetWidth
    this.height = this.dom.offsetHeight
    this.init()
  }
  // 初始化环境
  init () {

  }
}
/*
 * @Author: zhangjiayun
 * @Date: 2023-02-20 17:11:25
 * @LastEditors: zhangjiayun
 * @LastEditTime: 2023-02-20 17:14:19
 * @FilePath: \vite-app\src\pages\three\common\light.ts
 * @Description: 灯光
 * 
 * Copyright (c) 2023 by 2274333402@qq.com, All Rights Reserved. 
 */
import { DirectionalLight, PointLight, HemisphereLight, AmbientLight, Scene } from "three";

export const initLight = (scene: Scene) => {
    /**
     * 光源设置
     */
    // 平行光 
    var directionalLight = new DirectionalLight(0x80b5ff, 1);
    directionalLight.position.set(-250, 250, 100);
    scene.add(directionalLight);

    // 点光
    var pointLight = new PointLight(0x80d4ff, 1);
    pointLight.position.set(-250, 250, 100);
    scene.add(pointLight);

    // 半球光1
    var hemisphereLight = new HemisphereLight(0xffffff, 0x3d6399, 1);
    hemisphereLight.position.set(-250, 250, 100);
    scene.add(hemisphereLight);

    //环境光
    var ambient = new AmbientLight(0x002bff, 0.8);
    scene.add(ambient);
}



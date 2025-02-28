# 快速上手

## 介绍

通过本章节你可以了解到 IBest-UI 的安装方法和基本使用姿势。
::: tip
• 由于api功能限制, 不支持在预览器调试。   
请在 `模拟器` 或 `真机` 上调试!   
请在 `模拟器` 或 `真机` 上调试!   
请在 `模拟器` 或 `真机` 上调试!
:::   

## 一、安装

```shell
ohpm install @ibestservices/ibest-ui
```

## 二、初始化

```ts
import { IBestInit } from "@ibestservices/ibest-ui"

onWindowStageCreate(windowStage: window.WindowStage): void {
  windowStage.loadContent('pages/Index', (err, data) => {
    // 在此处初始化组件库!!!
    // 在此处初始化组件库!!!
    // 在此处初始化组件库!!!
    IBestInit(windowStage, this.context)
  })
}
```

## 三、使用组件

```ts
import { IBestButton } from "@ibestservices/ibest-ui";

@Component
export struct ButtonPage {

  build(){
    IBestButton({
      // ...
    })
  }

}
```
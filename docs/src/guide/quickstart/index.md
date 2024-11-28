# 快速上手

## 介绍

通过本章节你可以了解到 IBest-UI 的安装方法和基本使用姿势。

## 安装

```shell
ohpm install @ibestservices/ibest-ui

```

::: tip
如若您使用的 `API` 版本为 `API9` 或更低版本，请安装 `1.2.0` 版本。

```shell
ohpm install @ibestservices/ibest-ui@1.2.0

```

:::

## 初始化

:::tip
从 `v1.12.0` 版本开始，请在 `EntryAbility` 入口文件中调用 `IBestInit` 方法，初始化组件库，否则会影响部分组件使用。
:::

```ts
import { IBestInit } from "@ibestservices/ibest-ui"

onWindowStageCreate(windowStage: window.WindowStage): void {
  windowStage.loadContent('pages/Index', (err, data) => {
    // 在此处初始化组件库!!!
    IBestInit(windowStage, this.context)
  })
}
```

## 使用组件

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

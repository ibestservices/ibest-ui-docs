# 快速上手

## 介绍

通过本章节你可以了解到 IBest-UI 的安装方法和基本使用姿势。

## 安装

```shell
ohpm install @ibestservices/ibest-ui

```

## 引入组件

```ts
import { IBestButton } from "@ibestservices/ibest-ui";
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

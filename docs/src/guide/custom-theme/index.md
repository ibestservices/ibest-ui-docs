# 自定义主题

## 介绍

由于 ArkTS 样式不支持统一配置和预处理器，因此需要开发者自行实现自定义主题功能。本 UI 库实现思路是通过[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-appstorage-0000001524417209-V2)进行存储，在需要更改主题时，通过调用 `setIBestUIBaseStyle` 方法，设置主题。

## 更改主题

在项目的启动页面中，通过调用 `setIBestUIBaseStyle` 方法，设置主题。

```ts
import { setIBestUIBaseStyle } from "@ibestservices/ibest-ui";

@Entry
@Component
struct AppPage {

  // 组件渲染前
  aboutToAppear(){
    // 初始化一些变量
    setIBestUIBaseStyle({
      primary: '#3D8AF2'
    })
  }

  build(){
    // ...
  }
}
```

## IbestUIBaseStyleType 类型说明

::: tip
该类型即为`setIBestUIBaseStyle`的参数类型，均为非必填类型，传入值会覆盖默认值，暂时支持这么多预设样式，随着组件丰富逐步完善！
:::

| 参数              | 说明                                              | 类型   | 默认值                                                                                                       |
| ----------------- | ------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| primary           | primary 反馈色                                    | string | <div style="padding: 2px 4px; background: #3D8AF2; color: #fff; border-radius: 4px">#3D8AF2</div>            |
| success           | success 反馈色                                    | string | <div style="padding: 2px 4px; background: #58DB6B; color: #fff; border-radius: 4px">#58DB6B</div>            |
| warning           | warning 反馈色                                    | string | <div style="padding: 2px 4px; background: #F29C73; color: #fff; border-radius: 4px">#F29C73</div>            |
| danger            | danger 反馈色                                     | string | <div style="padding: 2px 4px; background: #DB3131; color: #fff; border-radius: 4px">#DB3131</div>            |
| default           | default 默认色                                    | string | <div style="padding: 2px 4px; background: #FFF; border-radius: 4px;border: 1px solid #dcdee0;">#FFFFFF</div> |
| spaceMini         | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 4lpx                                                                                                         |
| spaceBase         | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 8lpx                                                                                                         |
| spaceXs           | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 16lpx                                                                                                        |
| spaceSm           | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 24lpx                                                                                                        |
| spaceMd           | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 32lpx                                                                                                        |
| spaceLg           | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 48lpx                                                                                                        |
| spaceXl           | 间距，一般用于 `padding` 与 `margin`，单位 `lpx`  | string | 64lpx                                                                                                        |
| fontSizeXs        | 文字大小，单位 `lpx`                              | string | 20lpx                                                                                                        |
| fontSizeSm        | 文字大小，单位 `lpx`                              | string | 24lpx                                                                                                        |
| fontSizeMd        | 文字大小，单位 `lpx`                              | string | 28lpx                                                                                                        |
| fontSizeLg        | 文字大小，单位 `lpx`                              | string | 32lpx                                                                                                        |
| fontSizeXl        | 文字大小，单位 `lpx`                              | string | 40lpx                                                                                                        |
| borderRadiusSm    | 圆角大小，单位 `lpx`                              | string | 4lpx                                                                                                         |
| borderRadiusMd    | 圆角大小，单位 `lpx`                              | string | 8lpx                                                                                                         |
| borderRadiusLg    | 圆角大小，单位 `lpx`                              | string | 16lpx                                                                                                        |
| borderRadiusMax   | 圆角大小，单位 `lpx`                              | string | 1998lpx                                                                                                      |
| animationDuration | 动画时长，单位 `ms`，如`Switch`组件的切换动画时长 | number | 200                                                                                                          |

# Radio 单选框

## 介绍

在一组备选项中进行单选。

## 引入

```ts
import { IBestRadio, IBestRadioGroup } from "@ibestservices/ibest-ui";
```

## 代码演示

### 基础用法

![基础用法](./images/basic-radio.png)
::: tip
• 通过 `group` 属性绑定 `IBestRadioGroup` 与 `IBestRadio` 的关系, `group` 值需具有**全局唯一性**。   
• `IBestRadio` 组件的 `name` 值在同一 `group` 中需具备**唯一性**。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框1',
        name: '1'
      })
      IBestRadio({
        group:this.group,
        label: '单选框2',
        name: '2'
      })
    }
  }
}
```
:::

### 水平排列

![水平排列](./images/horizon-radio.png)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active, placeDirection: Axis.Horizontal }){
      IBestRadio({
        group: this.group,
        label: '单选框1',
        name: '1'
      })
      IBestRadio({
        group:this.group,
        label: '单选框2',
        name: '2'
      })
    }
  }
}
```
:::

### 禁用状态

![禁用状态](./images/disabled-radio.png)
::: tip
在 `Radio` 上设置 `disabled` 可以禁用单个选项。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框1',
        disabled: true,
        name: '1'
      })
      IBestRadio({
        group:this.group,
        label: '单选框2',
        name: '2'
      })
    }
  }
}
```
:::

### 自定义形状

![自定义形状](./images/shape-radio.png)
::: tip
`shape` 属性可选值为 `square` 和 `dot`，单选框形状分别对应方形和圆点形。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框1',
        shape: 'square',
        name: '1'
      })
      IBestRadio({
        group:this.group,
        label: '单选框2',
        shape: 'dot',
        name: '2'
      })
    }
  }
}
```
:::

### 自定义颜色

![自定义颜色](./images/color-radio.png)
::: tip
通过 `checkedColor` 属性设置选中状态的图标颜色。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框',
        shape: 'square',
        checkedColor: '#ee0a24',
        name: '1'
      })
      IBestRadio({
        group: this.group,
        label: '单选框',
        checkedColor: '#ee0a24',
        name: '2'
      })
      IBestRadio({
        group: this.group,
        label: '单选框',
        shape: 'dot',
        checkedColor: '#ee0a24',
        name: '3'
      })
    }
  }
}
```
:::

### 自定义大小

![自定义大小](./images/size-radio.png)
::: tip
通过 `iconSize` 属性可以自定义图标和文字的大小。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '自定义大小',
        iconSize: 30,
        name: '1'
      })
      IBestRadio({
        group: this.group,
        label: '自定义大小',
        iconSize: 30,
        name: '2'
      })
    }
  }
}
```
:::

### 左侧文本

![左侧文本](./images/left-label-radio.png)
::: tip
将 `labelPosition` 属性设置为 `'left'`，可以将文本位置调整到单选框左侧。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框',
        labelPosition: 'left',
        name: '1'
      })
      IBestRadio({
        group: this.group,
        label: '单选框',
        labelPosition: 'left',
        name: '2'
      })
    }
  }
}
```
:::

### 禁用文本点击

![禁用文本点击](./images/label-disable-radio.png)
::: tip
设置 `labelDisabled` 属性后，点击图标以外的内容不会触发单选框切换。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestRadio({
        group: this.group,
        label: '单选框',
        labelDisabled: true,
        name: '1'
      })
      IBestRadio({
        group: this.group,
        label: '单选框',
        labelDisabled: true,
        name: '2'
      })
    }
  }
}
```
:::

### 搭配单元格组件使用

![搭配单元格组件使用](./images/cell-radio.png)
::: tip
搭配单元格组件使用时，需要再引入 `IBestCell` 和 `IBestCellGroup` 组件。
:::

::: details 点我查看代码
```ts
import { IBestCell } from '@ibestservices/ibset-ui'
@Entry
@Component
struct DemoPage {
  @State group: string = "group"
  @State active: string = "1"
  @Builder CellRadio(name: string, group: string) {
    IBestRadio({ name, group })
  }
  build() {
    IBestRadioGroup({ group: this.group, active: $active }){
      IBestCell({
        title: '单选框1',
        rightIconBuilder: () => this.CellRadio('1', this.group),
        clickable: true,
        onClickCell: () => {
          this.active = '1'
        }
      })
      IBestCell({
        title: '单选框2',
        rightIconBuilder: () => this.CellRadio('2', this.group),
        hasBorder: false,
        clickable: true,
        onClickCell: () => {
          this.active = '2'
        }
      })
    }
  }
}
```

:::

## API

### Radio @Props

| 参数           | 说明                                                                  | 类型   | 默认值  |
| ------------- | ----------------------------------------------------------------------| -------------------- | ------- |
| name          | 标识符，通常为一个唯一的字符串或数字，同一 `group` 的 `name` 不可重复          | _string_ \| _number_ |         |
| group         | 标识符，通常为一个唯一的字符串，需具备`全局唯一性`或已入栈的页面`唯一性`          | _string_             |         |
| label         | 显示的文本                                                              | _ResourceStr_             |         |
| value         | 默认是否选中 非双向绑定，`从 2.0.1 开始废弃, 请使用 RadioGroup 的 active 属性`| _boolean_            |         |
| iconSize      | 图标大小                                                                | _number_ \| _string_ |  `18`  |
| shape         | 形状，可选值为 `square` `dot`                                            | _string_             | `round` |
| disabled      | 是否为禁用状态                                                           | _boolean_            | `false` |
| labelDisabled | 是否禁用文本内容点击                                                      | _boolean_            | `false` |
| labelPosition | 文本位置，可选值为 `left`                                                 | _string_             | `right` |
| checkedColor  | 选中状态颜色                                                             | _ResourceColor_      |  `#1989fa` |
| labelFontSize | 文本字体大小                                                             | _number_ \| _string_ |  `16`  |

### Radio Events

| 事件名    | 说明                | 参数类型                       |
| -------- | -------------------| -----------------------------|
| onChange <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">已废弃</span> | 选中状态改变的回调事件, `从 2.0.1 开始废弃` | `checked: boolean` |

### Radio 插槽

| 插槽名          | 说明                          | 类型                           |
| -------------- | ---------------------------- | ------------------------------ |
| defaultBuilder | `label` 的插槽，优先级大于 `label` 属性       | `data: { checked: boolean, disabled: boolean }` |
| iconBuilder    | 自定义图标插槽，需要自己调整选中与未选中展示的 `UI` 内容 | `data: { checked: boolean, disabled: boolean }` |

### RadioGroup @Props

| 参数  | 说明                                                           | 类型      | 默认值 |
| ----- | --------------------------------------------------------------| -------- | ------ |
| group | 标识符，通常为一个唯一的字符串，需具备`全局唯一性`或已入栈的页面`唯一性` | _string_  |  `''`   |
| active <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">2.0.1</span>| 激活的标识, 支持双向绑定              | _string_  |  `''`  |
| placeDirection <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">2.0.1</span>| 排列方向                    | _<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/ts-appendix-enums-V13#axis" target="__blank">Axis</a>_   | `Axis.Vertical` |
| space <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">2.0.1</span>| 间距                                       | _string_ \| _number_ | `12` |

### RadioGroup Events

| 事件名    | 说明                              | 事件类型               |
| -------- | ---------------------------------| ---------------------- |
| onChange | 选中状态改变的回调事件               | `name: string` |

### RadioGroup 插槽

| 插槽名         | 说明                        | 参数类型    |
| --------------| ---------------------------| --------- |
| defaultBuilder | 默认内容插槽                | `-` |
# CountTo 数字滚动

## 介绍

用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。
 
## 引入

```ts
import { IBestCountTo } from "@ibestservices/ibest-ui";
```

## 代码演示

### 基础用法

![基础用法](./images/base.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  build() {
    Column(){
      IBestCountTo({
        start: 0,
        end: 666
      })
    }
  }
}
```
:::

### 自定义滚动时长

![自定时长](./images/duration.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  build() {
    Column(){
      IBestCountTo({
        start: 0,
        end: 1000,
        duration: 3000
      })
    }
  }
}
```
:::

### 显示小数位

![显示小数位](./images/decimals.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  build() {
    Column(){
      IBestCountTo({
        start: 0,
        end: 666.66,
        decimals: 2
      })
    }
  }
}
```
:::

### 千分位分隔符

![千分位分隔符](./images/separator.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  build() {
    Column({space: 16}){
      IBestCountTo({
        start: 0,
        end: 12138,
        separator: ','
      })
    }
  }
}
```
:::

### 手动控制

![手动控制](./images/hand-movement.gif)

::: details 点我查看代码
```ts
import { IBestCountToController } from "@ibestservices/ibest-ui";
@Entry
@Component
struct DemoPage {
  controller: IBestCountToController = new IBestCountToController()
  build() {
    Column({space: 16}){
      IBestCountTo({
        start: 0,
        end: 6666,
        duration: 3000,
        fontSize: 40,
        color: "#1989fa",
        fontWeight: FontWeight.Bold,
        autoPlay: false,
        controller: this.controller
      })
      Row(){
        IBestButton({
          type: 'primary',
          text: "开始",
          onBtnClick: () => {
            this.controller.start()
          }
        })
        IBestButton({
          type: 'primary',
          text: "暂停",
          onBtnClick: () => {
            this.controller.pause()
          }
        })
        IBestButton({
          type: 'primary',
          text: "继续",
          onBtnClick: () => {
            this.controller.reStart()
          }
        })
        IBestButton({
          type: 'primary',
          text: "重置",
          onBtnClick: () => {
            this.controller.reset()
          }
        })
      }.width("100%").justifyContent(FlexAlign.SpaceBetween)
    }
  }
}
```
:::


## API

### @Props

| 参数         | 说明                    | 类型      | 默认值     |
| ------------ | -----------------------| --------- | ---------- |
| start        | 开始值                  | _number_  | `0` |
| end          | 结束值                  | _number_  | `0` |
| duration     | 滚动时长, 单位 ms        | _number_  | `2000` |
| autoPlay     | 是否自动开始滚动          | _boolean_ |  `true`  |
| decimals     | 小数位数                 | _number_ | `0` |
| useEasing    | 结尾使用缓动              | _boolean_ |  `true`  |
| separator    | 千分位分隔符              | _string_ |  `''`  |
| fontSize     | 文字大小                 | _number_ \| _string_ | `30` |
| color        | 字体色                   | _string_ |  `#323233`  |
| fontWeight   | 字重                     | _FontWeight_ |  `Normal`  |
| controller   | 组件控制器                | _IBestCountToController_ |  `-`  |

### Events

| 事件名      | 说明         | 回调参数                         |
| ---------- | ------------| -------------------------------- |
| onFinish <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">2.1.3</span>| 结束事件     | `-` |

### IBestCountToController 

| 方法名             | 说明          | 参数类型             |
| ------------------| -------------| ----------------|
| start             | 开始          | `-` |
| pause             | 暂停          | `-` |
| reStart           | 继续          | `-` |
| reset             | 重置          | `-` |
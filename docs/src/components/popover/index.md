# Popover 气泡弹出框

## 介绍

弹出式的气泡菜单。
 
## 引入

```ts
import { IBestPopover, IBestPopoverAction } from "@ibestservices/ibest-ui";
```
::: details 事例通用代码
```ts
  @State textValue: string = ""
  @Builder triggerBuilder(type: string, text?: string){
    if(type == "button"){
      IBestButton({
        type: "primary",
        text
      })
    }else if(type == "text"){
      Text(text)
    }else if(type == "img"){
      Image($r("app.media.app_icon")).width(30)
    }else if(type == "input"){
      TextInput({text: this.textValue, placeholder: text})
        .width("100%")
        .focusable(false)
    }
  }
```
:::

## 代码演示

### 基础用法

![基础用法](./images/base.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State actions: IBestPopoverAction[] = [
    {
      text: '选项一'
    },
    {
      text: '选项二'
    },
    {
      text: '选项三'
    },
    {
      text: '选项四'
    }
  ]
  build() {
    Column({space: 16}){
      Row({space: 16}){
        IBestPopover({
          actions: this.actions,
          triggerBuilder: (): void => this.triggerBuilder("button", "基础用法"),
          onSelect: (action: IBestPopoverAction, index: number) => {
            IBestToast.show(action.text)
          }
        })
        IBestPopover({
          actions: this.actions,
          triggerBuilder: (): void => this.triggerBuilder("text", "文字触发")
        })
        IBestPopover({
          actions: this.actions,
          triggerBuilder: (): void => this.triggerBuilder("img")
        })
      }
      IBestPopover({
        actions: this.actions,
        popoverWidth: "100%",
        triggerBuilder: (): void => this.triggerBuilder("input", "输入框触发"),
        onSelect: (action: IBestPopoverAction, index: number) => {
          this.textValue = action.text
        }
      })
    }.width("100%").alignItems(HorizontalAlign.Start)
  }
}
```
:::

### 弹出位置

![弹出位置](./images/placement.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State actions: IBestPopoverAction[] = [
    {
      text: '选项一'
    },
    {
      text: '选项二'
    }
  ]
  build() {
    Row({space: 16}){
      IBestPopover({
        actions: this.actions,
        placement: Placement.Right,
        triggerBuilder: (): void => this.triggerBuilder("button", "右侧")
      })
      IBestPopover({
        actions: this.actions,
        placement: Placement.TopLeft,
        triggerBuilder: (): void => this.triggerBuilder("button", "上左侧")
      })
      IBestPopover({
        actions: this.actions,
        placement: Placement.TopRight,
        triggerBuilder: (): void => this.triggerBuilder("button", "上右侧")
      })
      IBestPopover({
        actions: this.actions,
        placement: Placement.Left,
        triggerBuilder: (): void => this.triggerBuilder("button", "左侧")
      })
    }
  }
}
```
:::

### 选项配置

![选项配置](./images/option-config.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State actions: IBestPopoverAction[] = [
    {
      text: '选项一',
      iconName: 'add-o'
    },
    {
      text: '选项二',
      iconName: 'music-o'
    },
    {
      text: '选项三',
      icon: $r("app.media.app_icon")
    }
  ]
  @State actions1: IBestPopoverAction[] = [
    {
      text: '选项一',
      disabled: true
    },
    {
      text: '选项二',
      disabled: true
    },
    {
      text: '选项三'
    }
  ]
  build() {
    Row({space: 16}){
      IBestPopover({
        actions: this.actions,
        triggerBuilder: (): void => this.triggerBuilder("button", "展示图标")
      })
      IBestPopover({
        actions: this.actions1,
        triggerBuilder: (): void => this.triggerBuilder("button", "选项禁用")
      })
    }
  }
}
```
:::

### 自定义样式

![自定义样式](./images/custom-style.gif)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State actions: IBestPopoverAction[] = [
    {
      text: '选项一'
    },
    {
      text: '选项二'
    },
    {
      text: '选项三'
    },
    {
      text: '选项四'
    }
  ]
  build() {
    Flex({wrap: FlexWrap.Wrap, space: { main: LengthMetrics.vp(20), cross: LengthMetrics.vp(20)}}){
      IBestPopover({
        actions: this.actions,
        showArrow: false,
        triggerBuilder: (): void => this.triggerBuilder("button", "隐藏箭头")
      })
      IBestPopover({
        actions: this.actions,
        space: 12,
        triggerBuilder: (): void => this.triggerBuilder("button", "间距")
      })
      IBestPopover({
        actions: this.actions,
        radius: 16,
        triggerBuilder: (): void => this.triggerBuilder("button", "圆角")
      })
      IBestPopover({
        actions: this.actions,
        bgColor: '#4a4a4a',
        textColor: '#fff',
        dividerColor: "#646566",
        triggerBuilder: (): void => this.triggerBuilder("button", "背景色")
      })
      IBestPopover({
        actions: this.actions,
        popoverWidth: 200,
        triggerBuilder: (): void => this.triggerBuilder("button", "宽度")
      })
    }
  }
}
```
:::

### 自定义内容

![自定义内容](./images/custom-content.gif)

::: details 点我查看代码
```ts
import { IBestPopoverController } from "@ibestservices/ibest-ui";
@Entry
@Component
struct DemoPage {
  private controller: IBestPopoverController = new IBestPopoverController()
  @Builder popoverContent(){
    Column({space: 14}){
      Row({space: 14}){
        Image($r("app.media.app_icon")).width(18)
        Text("自定义提示内容")
      }
      IBestButton({
        type: "primary",
        buttonSize: "small",
        text: "确定",
        onClickBtn: () => {
          this.controller.close()
        }
      })
    }
    .alignItems(HorizontalAlign.End)
    .padding(16)
  }
  build() {
    Row({space: 16}){
      IBestButton({
        type: "primary",
        text: "打开popover",
        onClickBtn: () => {
          this.controller.open()
        }
      })
      IBestPopover({
        controller: this.controller,
        actions: this.actions,
        triggerBuilder: (): void => this.triggerBuilder("button", "自定义内容"),
        popoverContentBuilder: (): void => this.popoverContent()
      })
    }
  }
}
```
:::


## API

### @Props

| 参数         | 说明                                 | 类型      | 默认值     |
| ------------ | ----------------------------------- | --------- | ---------- |
| actions      | 通知栏文本内容                         | _IBestPopoverAction[]_ | `[]` |  
| textFontSize | 选项文字大小                          | _string_ \| _number_ | `16` |
| textColor    | 文字颜色                              | _ResourceColor_ | `#323232` |
| itemHeight   | 选项高度                              | _string_ \| _number_ | `44` |
| itemPadding  | 左右内边距                            | _string_ \| _number_ | `16` |
| textAlign    | 文字对齐方式                           | _TextAlign_ |  `-`  |
| iconSize     | 自定义左侧图标                         | _string_ \| _number_ |  `20`  |
| iconColor    | 左侧图标大小                           | _ResourceColor_ | `#323232` |
| dividerColor | 左侧图标颜色                           | _ResourceColor_ | `#ebedf0` |
| placement    | 弹出位置                              | _<a href="https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/ts-appendix-enums-V13#placement8" target="__blank">Placement</a>_ | `Bottom` |
| popoverWidth | 文本字体大小                           | _string_ \| _number_ | `''` |
| bgColor      | 右侧图标名称                           | _ResourceColor_ |  `#fff`  |
| showArrow    | 是否显示箭头                           | _boolean_ |  `true`  |
| arrowWidth   | 箭头宽度                               | _string_ \| _number_ | `12` |
| arrowHeight  | 箭头高度                               | _string_ \| _number_ | `6` |
| popoverMask  | 是否显示遮罩                            | _boolean_ | _PopoverMask_ | `true` |
| space        | 气泡与目标的间隙                         | _string_ \| _number_ | `4` |
| radius       | 气泡圆角                               | _string_ \| _number_ | `8` |
| popoverShadow| 气泡阴影                               | _ShadowOptions_ \| _ShadowStyle_ | `ShadowStyle.OUTER_DEFAULT_MD` |

### Events

| 事件名     | 说明                           | 回调参数                         |
| ---------- | -----------------------------| --------------------------------|
| onSelect   | 点击通知栏回调                 | `action: IBestPopoverAction, index: number` |

### 插槽

| 插槽名         | 说明                                                   | 类型             |
| --------------| ------------------------------------------------------| ----------------|
| triggerBuilder| 触发气泡的对象              | _CustomBuilder_ |
| popoverContentBuilder | 自定义popover内容  | _CustomBuilder_ |

### IBestPopoverAction 数据结构
| 属性名         | 说明                                 | 类型      | 默认值     |
| ------------  | ----------------------------------- | --------- | ---------- |
| text          | 选项文字                              | _string_ | `''` |
| iconName      | 文字左侧图标名称                       | _string_ | `''` |
| icon          | 自定义文字左侧图标                      | _ResourceStr_ | `''` |
| color         | 左侧图标颜色                           | _ResourceColor_ | `''` |
| disabled      | 是否禁用                               | _boolean_ | `''` |

### IBestPopoverController 实例
| 方法名         | 说明                                 | 参数类型   |
| ------------  | ----------------------------------- | --------- |
| open          | 打开气泡                              | `-` |
| close         | 关闭气泡                              | `-` |
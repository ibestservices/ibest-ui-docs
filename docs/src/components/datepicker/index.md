# DatePicker 日期选择

## 介绍

日期选择器，用于选择年、月、日，通常与弹出层组件配合使用。
 
## 引入

```ts
import { IBestDatePicker, IBestDatePickerResultType, IBestPickerOption } from "@ibestservices/ibest-ui";
```

## 代码演示

### 基础用法

![基础用法](./images/base.png)
:::tip
通过 `minDate` `maxDate` 属性可控制日期范围。   
• 默认最小日期为十年前；   
• 默认最大日期为十年后。
:::

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State selectValue: string[] = ["2024", "08", "10"]
  
  build() {
    Column(){
      IBestDatePicker({
        title: "选择日期",
        minDate: new Date("2020-05-01"),
        maxDate: new Date("2028-05-01"),
        value: $selectValue,
        onConfirm: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        },
        onChange: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        }
      })
    }
  }
}
```
:::

### 选项类型

![选项类型](./images/list-type.png)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State selectValue: string[] = ["2024", "08"]
  
  build() {
    Column(){
      IBestDatePicker({
        title: "选择日期",
        minDate: new Date("2020-05"),
        maxDate: new Date("2028-05"),
        isShowDay: false,
        value: $selectValue,
        onConfirm: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        },
        onChange: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        }
      })
    }
  }
}
```
:::

### 显示单位

![显示单位](./images/unit.png)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State selectValue: string[] = ["2024", "08", "18"]
  
  build() {
    Column(){
      IBestDatePicker({
        title: "选择日期",
        minDate: new Date("2020-05-01"),
        maxDate: new Date("2028-05-01"),
        showUnit: true,
        value: $selectValue,
        onConfirm: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        },
        onChange: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        }
      })
    }
  }
}
```
:::

### 过滤选项

![过滤选项](./images/filter.png)

::: details 点我查看代码
```ts
@Entry
@Component
struct DemoPage {
  @State selectValue: string[] = ["2024", "08"]
  filter(type: string, options: IBestPickerOption[]): IBestPickerOption[]{
    if (type === 'month') {
      return options.filter((option) => Number(option.value) % 6 === 0)
    }
    return options
  }
  build() {
    Column(){
      IBestDatePicker({
        title: "选择日期",
        minDate: new Date("2020-05"),
        maxDate: new Date("2028-05"),
        isShowDay: false,
        filter: this.filter,
        value: $selectValue,
        onConfirm: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        },
        onChange: (value: IBestDatePickerResultType) => {
          IBestToast.show(this.selectValue.join("-") , value.dateStr)
        }
      })
    }
  }
}
```
:::



## API

### @Props

| 参数         | 说明                                          | 类型      | 默认值     |
| ------------ | ---------------------------------------------| --------- | ---------- |
| value        | 当前选中的日期, 支持双向绑定                      | _Array[string]_  | `[]` | 
| minDate      | 最小可选日期                                   | _Date_  |    `十年前`     |
| maxDate      | 最大可选日期                                   | _Date_ | `十年后`  |
| isShowDay    | 是否显示日列                                   | _boolean_ | `true`|
| showUnit     | 是否显示单位                                   | _boolean_ | `false` |
| title        |  标题                                         | _string_ |  `''`  |
| itemHeight   | 单项高度,单位lpx                                | _number_ | `88`   |
| visibleItemCount | 可见选项数量                                | _number_ | `6`   |
| showToolBar   | 是否显示顶部栏                                 | _boolean_ | `true` |
| confirmText   | 确认按钮文字                                   | _string_ |  `确定`  |
| cancelText    | 取消按钮文字                                   | _string_ |  `取消`  |
| filter        | 过滤器    | _(type: string, options: IBestPickerOption[]) => IBestPickerOption[]_ | `null` |
| groupId       | 分组id, 通常在配合PickerGroup组件使用时传入, 可实现多个DatePicker联动| _string_ | `''` |
 
### Events

| 事件名     | 说明         | 回调参数             |
| ----------| ------------------------------ | -------------------------------- |
| onChange | 某一列选项变更后触发 | `value: IBestDatePickerResultType` |
| onConfirm | 点击确定按钮时触发 | `value: IBestDatePickerResultType` |
| onCancel |  点击取消按钮时触发 | `-` |

### IBestDatePickerResultType 数据结构
| 参数         | 说明                                          | 类型      |
| ------------ | ---------------------------------------------| --------- |
| dateStr      | 选中的日期字符串                               | _string_  |
| date         | 选中的日期                                     | _Date_  |
| year         | 选中的年份                                     | _string_  |
| month        | 选中的月份                                     | _string_  |
| day          | 选中的日期                                     | _string_  |
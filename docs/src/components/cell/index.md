# Cell 单元格

## 介绍

单元格为列表中的单个展示项。

## 引入

```ts
import { IBestCell, IBestCellGroup } from "@ibestservices/ibest-ui";
```

## 代码演示

### 基础用法

![基础用法](./images/basic-cell.png)
::: tip
`Cell` 可以单独使用，也可以与 `CellGroup`， `CellGroup` 可以为 `Cell` 提供上下外边框。
:::

::: details 点我查看代码

```ts
IBestCellGroup() {
  IBestCell({
    title: '标题',
    value: '内容'
  })

  IBestCell({
    title: '标题',
    value: '内容',
    label: '描述信息',
    hasBorder: false
  })
}
```

:::

### 卡片风格

![卡片风格](./images/card-cell.png)
::: tip
通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格
:::

::: details 点我查看代码

```ts
IBestCellGroup({ inset: true }) {
  IBestCell({
    title: '标题',
    value: '内容'
  })

  IBestCell({
    title: '标题',
    value: '内容',
    label: '描述信息',
    hasBorder: false
  })
}
```

:::

### 分组标题

![分组标题](./images/cell-group.png)
::: tip
通过 `CellGroup` 的 `title` 属性可以指定分组标题。
:::

::: details 点我查看代码

```ts
IBestCellGroup({ title: '分组1' }) {
  IBestCell({
    title: '标题',
    value: '内容',
    label: '描述信息',
    hasBorder: false
  })
}

IBestCellGroup({ title: '分组2' }) {
  IBestCell({
    title: '标题',
    value: '内容',
    label: '描述信息',
    hasBorder: false
  })
}
```

:::

### 单元格大小

![单元格大小](./images/cell-size.png)
::: tip
通过 `cellSize` 属性可以控制单元格的大小。
:::

::: details 点我查看代码

```ts
IBestCell({
  title: "标题",
  value: "内容",
  cellSize: "large",
});

IBestCell({
  title: "标题",
  value: "内容",
  label: "描述信息",
  hasBorder: false,
  cellSize: "large",
});
```

:::

### 展示图标

![基础用法](./images/icon-cell.png)
::: tip
通过 `iconBuilder` 插槽在标题左侧展示图标。

:::

::: details 点我查看代码

```ts
import { IBestCell } from "@ibestservices/ibest-ui";

@Entry
@Component
struct CellPage {
  @Builder
  StarIcon(height = '48lpx') {
    Image($r('app.media.startIcon')).height(height).margin({ right: '20lpx' })
  }

  build(){
    IBestCell({
      title: '标题',
      value: '内容',
      iconBuilder: this.StarIcon(),
      hasBorder: false
    })
  }
}

```

:::

### 展示箭头

![展示箭头](./images/arrow-cell.png)
::: tip
设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向。
:::

::: details 点我查看代码

```ts
IBestCell({
  title: "标题",
  value: "箭头朝右",
  isLink: true,
});

IBestCell({
  title: "标题",
  value: "箭头朝下",
  isLink: true,
  arrowDirection: "bottom",
});

IBestCell({
  title: "标题",
  value: "箭头朝左",
  isLink: true,
  arrowDirection: "left",
});

IBestCell({
  title: "标题",
  value: "箭头朝上",
  isLink: true,
  arrowDirection: "top",
  hasBorder: false,
});
```

:::

### 必填项

![必填项](./images/require-cell.png)
::: tip
设置 `required` 属性后会在单元格左侧显示必填`*`号。
:::

::: details 点我查看代码

```ts
import { IBestCell } from "@ibestservices/ibest-ui";

@Entry
@Component
struct CellPage {
  @Builder
  InputContain() {
    TextInput({ placeholder: '请输入内容' })
  }

  build(){
    IBestCell({
      title: '标题',
      value: '内容',
      required: true,
      hasBorder: false,
      valueBuilder: this.InputContain.bind(this)
    })
  }
}
```

:::

### 垂直居中

![垂直居中](./images/center-cell.png)
::: tip
通过 `center` 属性可以让 `Cell`的左右内容都垂直居中。
:::

::: details 点我查看代码

```ts
import { IBestCell } from "@ibestservices/ibest-ui";

@Entry
@Component
struct CellPage {
  @Builder
  StarIcon(height = '48lpx') {
    Image($r('app.media.startIcon')).height(height).margin({ right: '20lpx' })
  }

  build(){
    // ...

    IBestCell({
      title: '居中',
      label: '描述内容',
      value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      center: true,
      iconBuilder: this.StarIcon('32lpx'),
      isLink: true
    })
    IBestCell({
      title: '居上',
      label: '描述内容',
      value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      hasBorder: false,
      iconBuilder: this.StarIcon('32lpx'),
      isLink: true
    })

    // ...
  }
}
```

:::

### 使用插槽

![使用插槽](./images/slot-cell.png)
::: tip
如以上用法不能满足你的需求，可以使用`@BuilderParams`插槽来自定义内容。
:::

::: details 点我查看代码

```ts
import { IBestCell, IBestTag } from "@ibestservices/ibest-ui";

@Entry
@Component
struct CellPage {
  @Builder
  StarIcon(height = '48lpx') {
    Image($r('app.media.startIcon')).height(height).margin({ right: '20lpx' })
  }

  @Builder
  Arrow() {
    Image($r('app.media.title_back'))
    .height('24lpx')
  }

  @Builder
  Title() {
    Row() {
      Text('单元格')
        .fontSize('28lpx')
      IBestTag({ text: '标签' })
        .margin({
          left: '10lpx'
        })
    }
  }

  build(){
    // ...

    IBestCell({
      title: '标题',
      value: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
      iconBuilder: this.StarIcon('32lpx'),
      rightIconBuilder: this.Arrow,
      clickable: true
    })

    IBestCell({
      titleBuilder: this.Title,
      value: '内容',
      rightIconBuilder: this.Arrow,
      clickable: true
    })

    IBestCell({
      title: '标题',
      iconBuilder: this.StarIcon(),
      hasBorder: false,
      rightIconBuilder: this.Arrow,
      clickable: true
    })

    // ...
  }
}
```

:::

## API

### CellGroup @Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| title  | 分组标题               | _string_  |         |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| border | 是否显示外边框         | _boolean_ | `true`  |

### Cell @Props

| 参数           | 说明                                  | 类型                 | 默认值                                                                                            |
| -------------- | ------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| title          | 左侧标题                              | _number_ \| _string_ |                                                                                                   |
| titleColor     | 左侧标题文字颜色                      | _ResourceColor_ | <div style="padding: 2px 4px; background: #323233; color: #fff; border-radius: 4px">#323233</div> |
| value          | 右侧内容                              | _number_ \| _string_ |                                                                                                   |
| valueColor     | 右侧内容文字颜色                      | _ResourceColor_ | <div style="padding: 2px 4px; background: #969799; color: #fff; border-radius: 4px">#969799</div> |
| label          | 标题下方的描述信息                    | _number_ \| _string_ |                                                                                                   |
| labelColor     | 标题下方的描述信息文字颜色            | _ResourceColor_ | <div style="padding: 2px 4px; background: #969799; color: #fff; border-radius: 4px">#969799</div> |
| cellSize       | 单元格大小，可选值为 `large` `normal` | _string_             |                                                                                                   |
| hasBorder      | 是否显示内边框                        | _boolean_            | `true`                                                                                            |
| clickable      | 是否开启点击反馈                      | _boolean_            | `false`                                                                                           |
| isLink         | 是否展示右侧箭头并开启点击反馈        | _boolean_            | `false`                                                                                           |
| required       | 是否显示表单必填星号                  | _boolean_            | `false`                                                                                           |
| center         | 是否使内容垂直居中                    | _boolean_            | `false`                                                                                           |
| arrowDirection | 箭头方向，可选值为 left up down       | _string_             | `right`                                                                                           |

### Events

| 事件名      | 说明                 | 事件类型                         |
| ----------- | -------------------- | -------------------------------- |
| onClickCell | 点击单元格的回调事件 | (event?: _ClickEvent_) => _void_ |

### 插槽

| 插槽名           | 说明                                                              | 类型                      |
| ---------------- | ----------------------------------------------------------------- | ------------------------- |
| titleBuilder     | `title` 的插槽 优先级大于 `@Prop title`                           | _CustomBuilder_ \| _null_ |
| valueBuilder     | `value` 的插槽 优先级大于 `@Prop value`                           | _CustomBuilder_ \| _null_ |
| labelBuilder     | `label` 的插槽 优先级大于 `@Prop label`                           | _CustomBuilder_ \| _null_ |
| iconBuilder      | 自定义`title`左侧`icon`的插槽, 使用`titleBuilder`时，该插槽不生效 | _CustomBuilder_ \| _null_ |
| rightIconBuilder | 自定义`value`右侧`icon`的插槽, 使用`valueBuilder`时，该插槽不生效 | _CustomBuilder_ \| _null_ |

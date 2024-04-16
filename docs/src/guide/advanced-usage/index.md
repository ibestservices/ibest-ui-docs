# 进阶用法

通过本章节你可以了解到 IBest-UI 的一些进阶用法，比如组件插槽用法、组件实例方法。

## 组件插槽用法

```ts
import { IBestButton } from "@ibestservices/ibest-ui";

@Builder function Arrow(color = '#fff'){
  Image($r('app.media.title_back'))
    .width('40lpx')
    .fillColor(color)
}

@Component
export struct ButtonPage {
  build(){
    IBestButton({
      text: '按钮',
      iconBuilder: Arrow
    })
  }
}
```

## 组件实例用法

```ts
import { IBestButton, IBestCheckboxGroup } from "@ibestservices/ibest-ui";

@Builder function Arrow(color = '#fff'){
  Image($r('app.media.title_back'))
    .width('40lpx')
    .fillColor(color)
}

@Component
export struct ButtonPage {
  /**
   * 全选反选的chekboxGroup的this指向
   */
  componentContext: CheckboxGroupContext | null = null;

  build(){
    // ...

    IBestCheckboxGroup({
      group: 'group5',
      onReady: (checkboxGroupContext)=>{
        this.componentContext = checkboxGroupContext
      }
    })

    IBestButton({
      text: '全选',
      onClickBtn: () => {
        this.componentContext?.toggleAll(true)
      }
    })

    // ...
  }
}
```

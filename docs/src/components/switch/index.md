# Switch 开关

## 介绍

用于在打开和关闭状态之间进行切换。

## 引入

```ts
import { IBestSwitch } from "@ibestservices/ibest-ui";
```

## 代码演示

### 基础用法

![基础用法](./images/basic-switch.png)
::: tip

通过 `IBestSwitch` 组件的 `value` 来设置开关的状态，通过 `onChange` 监听状态变化。

:::

::: details 点我查看代码

```ts
IBestSwitch({
  value: true,
  onChange: value => {
    console.log("switch", value);
  },
});
```

:::

### 禁用状态

![禁用状态](./images/disabled-switch.png)
::: tip

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

:::

::: details 点我查看代码

```ts
IBestSwitch({
  loading: true,
  disabled: true,
});

IBestSwitch({
  disabled: true,
  value: true,
});
```

:::

### 加载状态

![加载状态](./images/loading-switch.png)
::: tip

通过 `loading` 属性来禁用开关，加载状态下开关不可点击。

:::

::: details 点我查看代码

```ts
IBestSwitch({
  loading: true,
  value: true,
});

IBestSwitch({
  loading: true,
  activeColor: "#07c160",
});
```

:::

### 自定义大小

![自定义大小](./images/size-switch.png)
::: tip

通过 `switchSize` 属性自定义开关的大小。

:::

::: details 点我查看代码

```ts
IBestSwitch({
  value: true,
  switchSize: 40,
});
```

:::

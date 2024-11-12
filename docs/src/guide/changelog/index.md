# 更新日志

## 介绍

IBest-UI 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

## 发布节奏

- 修订号：通常每隔 ~~1 ~ 2 周~~发布，包含新特性和问题修复。
- 次版本号：通常每隔 ~~1 ~ 2 月~~发布，包含新组件或较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

### 1.17.0

#### 新功能 🎉

1. 增加 IBestIcon 弹框
2. 增加 IBestPullRefresh

#### 其他变更

1. IBestTab 新增 onTabClick 事件;
2. 增加导出 IBestCascaderContent 级联组件, 可独立在页面中使用或与其他自定义组件组合使用;
3. IBestCell 增加 leftIcon leftIconColor leftIconSize rightIcon rightIconColor rightIconSize 属性;
4. IBestActionSheet 增加 cancelTextColor、beforeClose 属性.

#### 新贡献者

[SunShineGo](https://github.com/sunshinego12138)

### 1.16.0

#### 新功能 🎉

1. 增加 IBestDialogUtil 弹框 API
2. 增加 IBestNotify 消息提示 API

#### 其他变更

1. IBestDialog 增加 visible、theme、buttonSpace、confirmButtonBgColor、cancelButtonBgColor、closeOnBackPress、onOpen、onClose 属性;
2. IBestToast 增加 showLoading 方法
3. 优化 IBestLoading 组件动画效果;
4. 优化 IBestPopup 组件隐藏动画效果

### 1.15.0

#### 新功能 🎉

1. 增加 IBestActionSheet API
2. 增加 IBestSignature 组件

#### 其他变更

1. 增加 slider 滑块组件;
2. 增加 Uploader 文件上传组件;
3. 增加图片预览 api IBestImagePreview;
4. tab 组件新增 fontSize 属性;
5. form 组件新增 getFormValues 方法, 同步获取表单数据。

兼容变更:

1. 所有组件(Watermark、Signature 除外)颜色相关属性类型改为 RescourseColor 。
2. 修复 Checkbox 与 Radio 默认插槽不可用 bug

### 1.14.0

#### 新功能 🎉

1. 增加 IBestActionSheet API
2. 增加 IBestSignature 组件

#### 其他变更

1. 组件库初始化变更
2. Search 组件增加 customRightButton 属性

### 1.13.0

#### 新功能 🎉

1. feat(Search): Search 组件
2. feat(Rate): Rate 组件

#### 其他变更

1. watermark 组件使用 stack 包裹
2. button 组件增加宽高设置

### v1.12.0 & v1.12.1

#### 新功能 🎉

1. feat(NumberKeyboard): NumberKeyboard 组件
2. feat(PasswordInput): PasswordInput 组件

#### 其他变更

1. 新增全局初始化方法 IBestInit ;
2. 一些样式优化和 bug 修复。

### v1.11.0

1. 增加:Picker、DatePicker、TimePicker、PickerGroup 组件
2. Cascader 组件支持双向绑定;
3. Tab 组件支持双向绑定, 优化参数声明。

#### 新功能 🎉

1. feat(Form): Form 组件
2. feat(Field): Field 组件

#### 其他变更

#### 新贡献者

### v1.10.0

#### 新功能 🎉

1. feat(Form): Form 组件
2. feat(Field): Field 组件

#### 其他变更

#### 新贡献者

### v1.9.0

#### 新功能 🎉

1. feat(Popup): Popup 组件
2. feat(Cascader): Cascader 组件

#### 其他变更

#### 新贡献者

### v1.8.0

#### 新功能 🎉

1. feat(Tab): Tab 组件

#### 其他变更

#### 新贡献者

## 更新内容

### v1.7.0

#### 新功能 🎉

1. feat(Loading): loading 组件

#### 其他变更

1. 修复若干 bug

#### 新贡献者

### v1.6.0

#### 新功能 🎉

1. feat(Toast): 轻提示组件

#### 其他变更

暂无

#### 新贡献者

[damengbuxing](https://github.com/damengbuxing)

### v1.5.0

#### 新功能 🎉

1. feat(Calendar): 日历组件

#### 其他变更

暂无

#### 新贡献者

[damengbuxing](https://github.com/damengbuxing)

### v1.4.0

#### 新功能 🎉

1. feat(Stepper): 步进器组件

#### 其他变更

暂无

#### 新贡献者

[damengbuxing](https://github.com/damengbuxing)

### v1.3.0

#### 新功能 🎉

暂无

#### 其他变更

适配鸿蒙 `API11`

#### 新贡献者

暂无

### v1.2.0

#### 新功能 🎉

1. feat(Dialog): 弹窗组件

#### 其他变更

暂无

#### 新贡献者

暂无

### v1.1.0

#### 新功能 🎉

1. feat(Empty): 空状态组件

#### 其他变更

暂无

#### 新贡献者

暂无

### v1.0.3

#### 新功能 🎉

无

#### 其他变更

1. checkbox 组件 UI 展示 bug 修复

#### 新贡献者

暂无

### v1.0.2

#### 新功能 🎉

无

#### 其他变更

1. package 增加`keywords`、`tags`、`homepage`、`repository`
2. 代码格式以及注释调整

#### 新贡献者

暂无

### v1.0.1

#### 新功能 🎉

无

#### 其他变更

1. Readme 内容调整

#### 新贡献者

暂无

### v1.0.0

#### 新功能 🎉

- feat(Button): 按钮组件
- feat(Checkbox): 复选框组件
- feat(Radio): 单选框组件
- feat(Tag): 标签组件
- feat(Switch): 开关组件
- feat(Cell): 单元格组件
- feat(Watermark): 水印组件

#### 其他变更

暂无

#### 新贡献者

暂无

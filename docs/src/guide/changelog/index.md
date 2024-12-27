# 更新日志

## 重要提示

#### 从 2.0.0 版本开始，IBestUI 的更新日志将统一发布在<a href="https://ohpm.openharmony.cn/#/cn/detail/@ibestservices%2Fibest-ui" target="__blank">OpenHarmony 三方库中心仓的更新日志</a>, 当前页面不再发布.

### 2.0.0

1. 增加 IBestNoticeBar 通知栏组件;
2. 增加 IBestProgress 进度条组件;
3. 增加 IBestPopover 气泡弹出框组件;
4. 增加 IBestTextEllipsis 文本省略组件;
5. 增加 IBestCountDown 倒计时组件;
6. 增加 IBestSideBar 侧边导航组件;
7. IBestPicker、IBestDatePicker、IBestTimePicker 增加 horizontal、itemWidth、contentHeight、optionFontSize 属性;
8. IBestField 增加 showLabel 属性.

### 1.19.0

#### 新功能 🎉

1. 增加 IBestNavBar 导航栏组件;
2. 增加 IBestCircleProgress 环形进度条组件;
3. 增加 IBestCollapse 折叠面板组件;
4. 增加 IBestDivider 分割线组件;
5. IBestIcon 增加 iconRadius 属性;
6. IBestField 增加 leftIconSize rightIconSize labelFontSize labelColor 属性;
7. IBestPasswordInput 增加 isShowBorder bdColor cellBgColor cellTextColor dotFontSize textFontSize tipFontSize 属性.

#### bug 修复

1. 修复 IBestCalendar 在设定的跨月时间范围时, 如果翻到下月, 上月日期会被禁用.

### 1.18.0

#### 新功能 🎉

1. 新增 IBestBadge 徽标组件;
2. Search 增加 textColor 属性;
3. IBestCell 增加 leftContentWidth、leftIconMarginRight、rightIconMarginLeft、leftRightPadding、borderSizeType、borderLeft、bdColor 属性;
4. IBestToast 增加 iconWidth 属性;
5. IBestCheckBox IBestRadio 增加 labelFontSize 属性;
6. IBestEmpty 增加 emptyImgUrl 属性;
7. IBestPopup 增加 headerBuilder 插槽;
8. IBestSearch 增加 textColor 属性;

#### 重要变更:

组件库全局尺寸单位默认为 vp, 可自定义配置, 升级后可能会出现部分组件尺寸偏大情况, 只需将原先传递的尺寸改为原来一半即可.

#### 修复:

1. IBestToast 同时打开无法关闭问题;
2. IBestCascader 异步加载时崩溃问题;

### 1.17.0

#### 新功能 🎉

1. 新增 IBestIcon 组件;
2. 新增 IBestPullRefresh 下拉刷新组件;
3. IBestTab 新增 onTabClick 事件;
4. 增加导出 IBestCascaderContent 级联组件, 可独立在页面中使用或与其他自定义组件组合使用;
5. IBestCell 增加 leftIcon leftIconColor leftIconSize rightIcon rightIconColor rightIconSize 属性;
6. IBestActionSheet 增加 cancelTextColor、beforeClose 属性.

#### 另: 新发布 @ibestservices/area-data 库, 可用于 Cascader 相关组件.

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

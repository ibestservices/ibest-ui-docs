import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBest-UI@HarmonyOS",
  description:
    "IBest-UI是一个简单易用的鸿蒙开源UI库，基于鸿蒙API12，参照vant进行组件封装设计，方便，快捷，高效",
  srcDir: "./src",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      process.env.NODE_ENV === "development"
        ? ""
        : `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c4e91fc52653a1baa04e20de1c288145";
        hm.async = true;
        document.head.appendChild(hm);
      })();`,
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "IBest-UI,鸿蒙,鸿蒙UI,鸿蒙UI库,鸿蒙UI框架,鸿蒙UI框架,鸿蒙UI组件,鸿蒙UI组件库,鸿蒙UI组件框架,百得思维,安徽百得思维,合肥百德思维,Harmony,OpenHarmony,HarmonyOS,HarmonyOS UI,HarmonyOS Ui,HarmonyOS Ui库,HarmonyOS Ui框架,HarmonyOS Ui组件,HarmonyOS Ui组件库,HarmonyOS Ui组件框架",
      },
    ],
  ],
  themeConfig: {
    logo: "/favicon.ico",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/home/", activeMatch: "/guide/" },
      {
        text: "组件",
        link: "/components/button/",
        activeMatch: "/components/",
      },
    ],
    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "介绍", link: "/guide/home/" },
          { text: "快速上手", link: "/guide/quickstart/" },
          { text: "自定义主题", link: "/guide/custom-theme/" },
          { text: "进阶用法", link: "/guide/advanced-usage/" },
          { text: "常见问题", link: "/guide/faq/" },
          { text: "更新日志", link: "/guide/changelog/" },
          { text: "贡献指南", link: "/guide/contribution/" },
          { text: "迭代计划", link: "/guide/interation-plan/" },
        ],
      },
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "/components/button/" },
          { text: "Cell 单元格", link: "/components/cell/" },
          { text: `Icon 图标 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.17.0</span>`, link: "/components/icon/" },
          {
            text: `Popup 弹出层 `,
            link: "/components/popup/",
          },
          {
            text: `Toast 轻提示 `,
            link: "/components/toast/",
          },
        ],
      },
      {
        text: "表单组件",
        items: [
          {
            text: `Calendar 日历 `,
            link: "/components/calendar/",
          },
          {
            text: `Cascader 级联选择器 `,
            link: "/components/cascader/",
          },
          { text: "Checkbox 复选框", link: "/components/checkbox/" },
          { text: `DatePicker 日期选择 `, link: "/components/datepicker/" },
          {
            text: `Field 输入框 `,
            link: "/components/field/",
          },
          {
            text: `Form 表单`,
            link: "/components/form/",
          },
          {
            text: `NumberKeyboard 数字键盘 `,
            link: "/components/numberkeyboard/",
          },
          {
            text: `PasswordInput 密码输入框 `,
            link: "/components/passwordInput/",
          },
          { text: `Picker 选择器 `, link: "/components/picker/" },
          { text: `PickerGroup 选择器组`, link: "/components/pickergroup/" },
          { text: "Radio 单选框", link: "/components/radio/" },
          {
            text: `Rate 评分`,
            link: "/components/rate/",
          },
          {
            text: `Search 搜索`,
            link: "/components/search/",
          },
          {
            text: `Slider 滑块 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.15.0</span>`,
            link: "/components/slider/",
          },
          {
            text: `Signature 签名 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.14.0</span>`,
            link: "/components/signature/",
          },
          {
            text: `Stepper 步进器 `,
            link: "/components/stepper/",
          },
          { text: "Switch 开关", link: "/components/switch/" },
          { text: `TimePicker 时间选择 `, link: "/components/timepicker/" },
          {
            text: `Uploader 文件上传 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.15.0</span>`,
            link: "/components/uploader/",
          },
        ],
      },
      {
        text: "反馈组件",
        items: [
          {
            text: `ActionSheet 动作面板 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.14.0</span>`,
            link: "/components/actionsheet/",
          },
          {
            text: `Dialog 弹出框`,
            link: "/components/dialog/",
          },
          {
            text: `Loading 加载`,
            link: "/components/loading/",
          },
          {
            text: `Notify 消息通知 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.16.0</span>`,
            link: "/components/notify/",
          },
          {
            text: `PullRefresh 下拉刷新 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.17.0</span>`,
            link: "/components/pullrefresh/",
          }
        ],
      },
      {
        text: "展示组件",
        items: [
          {
            text: `Empty 空状态 `,
            link: "/components/empty/",
          },
          {
            text: `ImagePreview 图片预览 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.15.0</span>`,
            link: "/components/imagepreview/",
          },
          { text: "Tag 标签", link: "/components/tag/" },
          { text: "Watermark 水印", link: "/components/watermark/" },
        ],
      },
      {
        text: "导航组件",
        items: [
          {
            text: `Tab 标签页`,
            link: "/components/tab/",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ibestservices/ibest-ui",
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
      level: [2, 4],
    },
    search: {
      provider: "local",
    },
  },
});

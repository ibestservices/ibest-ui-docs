import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iBest-UI@HarmonyOS",
  description:
    "iBest-UI是一个简单易用的鸿蒙开源UI库，基于鸿蒙API9，参照vant进行组件封装设计，方便，快捷，高效",
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
          "iBest-UI,鸿蒙,鸿蒙UI,鸿蒙UI库,鸿蒙UI框架,鸿蒙UI框架,鸿蒙UI组件,鸿蒙UI组件库,鸿蒙UI组件框架,百得思维,安徽百得思维,合肥百德思维",
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
          {
            text: `Toast 轻提示 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.6.0</span>`,
            link: "/components/toast/",
          },
        ],
      },
      {
        text: "表单组件",
        items: [
          {
            text: `Calendar 日历 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.5.0</span>`,
            link: "/components/calendar/",
          },
          { text: "Checkbox 复选框", link: "/components/checkbox/" },
          { text: "Radio 单选框", link: "/components/radio/" },
          {
            text: `Stepper 步进器 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.4.0</span>`,
            link: "/components/stepper/",
          },
          { text: "Switch 开关", link: "/components/switch/" },
        ],
      },
      {
        text: "展示组件",
        items: [
          {
            text: `Empty 空状态 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.1.0</span>`,
            link: "/components/empty/",
          },
          { text: "Tag 标签", link: "/components/tag/" },
          { text: "Watermark 水印", link: "/components/watermark/" },
        ],
      },
      {
        text: "反馈组件",
        items: [
          {
            text: `Dialog 弹出框 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.2.0</span>`,
            link: "/components/dialog/",
          },
          {
            text: `Loading 加载 <span style="font-size: 12px; padding:2px 4px;color:#3D8AF2;border-radius:4px;border: 1px solid #3D8AF2">1.7.0</span>`,
            link: "/components/loading/",
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

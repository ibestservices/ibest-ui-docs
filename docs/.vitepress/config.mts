import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iBest-UI@HarmonyOS",
  description: "一个简单易用的鸿蒙开源UI库",
  srcDir: "./src",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c4e91fc52653a1baa04e20de1c288145";
        hm.async = true;
        document.head.appendChild(hm);
      })();`,
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
        ],
      },
      {
        text: "表单组件",
        items: [
          { text: "Checkbox 复选框", link: "/components/checkbox/" },
          { text: "Radio 单选框", link: "/components/radio/" },
          { text: "Switch 开关", link: "/components/switch/" },
        ],
      },
      {
        text: "展示组件",
        items: [
          { text: "Tag 标签", link: "/components/tag/" },
          { text: "Watermark 水印", link: "/components/watermark/" },
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

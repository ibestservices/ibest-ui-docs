import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBest-UI",
  description: "一个简单易用的鸿蒙开源UI库",
  srcDir: "./src",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
        ],
      },
      {
        text: "基础组件",
        items: [{ text: "Button 按钮", link: "/components/button/" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
      level: [2, 4],
    },
  },
});

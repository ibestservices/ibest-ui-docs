import { defineConfig } from "vitepress";
const giteSvg = `
<svg t="1713250627644" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="128" height="128"><path d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z" fill="#D81E06" p-id="2475"></path><path d="M721.664 467.968h-235.52a22.272 22.272 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.272 22.272 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.272 22.272 0 0 0 20.736-20.736v-51.84a22.272 22.272 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.272 22.272 0 0 0-20.736-20.736z" fill="#FFFFFF" p-id="2476"></path></svg>
`;
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBest-UI",
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
        hm.src = "https://hm.baidu.com/hm.js?6013715d6ae931dec1cdef49a5790231";
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
        icon: {
          svg: giteSvg,
        },
        link: "https://gitee.com/ibestservices/ibest-ui",
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

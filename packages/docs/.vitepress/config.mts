import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tyche",
  description: "一个普通的Vue组件库",
  appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
  base: "/Tyche/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "快速开始", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },
          { text: "Dropdown 下拉菜单", link: "components/dropdown" },
        ],
      },
      {
        text: "反馈组件",
        collapsed: false,
        items: [
          { text: "Alert 提示", link: "components/alert" },
        ],
      },
      {
        text: "数据展示",
        collapsed: false,
        items: [
          { text: "Tooltip 提示", link: "components/tooltip" },
          { text: "Message 消息提示", link: "components/message" },
          { text: "MessageBox 弹框", link: "components/messagebox" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Breezli/Tyche" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});

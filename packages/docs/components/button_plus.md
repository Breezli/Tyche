---
title: ButtonPlus
description: ButtonPlus 组件文档

next:
  link: /components/collapse
  text: Collapse 折叠面板

prev:
  link: /get-started
  text: 快速开始
---

# ButtonPlus 按钮进化

定制特效按钮

## Interactive Button

按钮进入动画

::: preview
demo-preview=../demo/buttonplus/Interactive.vue
:::

## Rainbow Button

按钮环绕光效

::: preview
demo-preview=../demo/buttonplus/Rainbow.vue
:::

## Ripple Button

点击涟漪效果

::: preview
demo-preview=../demo/buttonplus/Ripple.vue
:::

## 配置参数

| 参数        | 说明                  | 类型                                   | 默认值          |
| ----------- | --------------------- | -------------------------------------- | --------------- |
| type        | 特效类型              | `'interactive'`/`'rainbow'`/`'ripple'` | `'interactive'` |
| speed       | 流光速度(Rainbow独有) | `number`                               | 2               |
| rippleColor | 涟漪色彩(Ripple独有)  | `string`                               | #ADD8E6         |

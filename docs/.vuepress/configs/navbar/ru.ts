import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarRu: NavbarOptions = [
  {
    text: '指南',
    children: [
      '/ru/guide/introduction.md',
      '/ru/guide/getting-started.md',
      '/ru/guide/configuration.md',
      '/ru/guide/page.md',
      '/ru/guide/markdown.md',
      '/ru/guide/assets.md',
      '/ru/guide/i18n.md',
      '/ru/guide/deployment.md',
      '/ru/guide/theme.md',
      '/ru/guide/plugin.md',
      '/ru/guide/bundler.md',
      '/ru/guide/migration.md',
      '/ru/guide/troubleshooting.md',
    ],
  },
  {
    text: '参考',
    children: [
      {
        text: '核心',
        children: [
          '/ru/reference/cli.md',
          '/ru/reference/config.md',
          '/ru/reference/frontmatter.md',
          '/ru/reference/components.md',
          '/ru/reference/plugin-api.md',
          '/ru/reference/theme-api.md',
          '/ru/reference/client-api.md',
          '/ru/reference/node-api.md',
        ],
      },
      {
        text: '打包工具',
        children: [
          '/ru/reference/bundler/vite.md',
          '/ru/reference/bundler/webpack.md',
        ],
      },
      {
        text: '生态系统',
        children: [
          {
            text: '默认主题',
            link: 'https://ecosystem.vuejs.press/ru/themes/default/',
          },
          {
            text: '插件',
            link: 'https://ecosystem.vuejs.press/ru/plugins/',
          },
        ],
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/ru/advanced/architecture.md',
          '/ru/advanced/plugin.md',
          '/ru/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/ru/advanced/cookbook/',
          },
        ],
      },
      {
        text: '其他资源',
        children: [
          {
            text: '生态系统',
            link: 'https://ecosystem.vuejs.press/ru/',
          },
          {
            text: '市场',
            link: 'https://marketplace.vuejs.press/ru/',
          },
          {
            text: '贡献指南',
            link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING_ru.md',
          },
        ],
      },
    ],
  },
] as NavbarOptions

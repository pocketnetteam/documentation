import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarRu: SidebarOptions = {
  '/ru/guide/': [
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
  ],
  '/ru/advanced/': [
    {
      text: '深入',
      children: [
        '/ru/advanced/architecture.md',
        '/ru/advanced/plugin.md',
        '/ru/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/ru/advanced/cookbook/README.md',
        '/ru/advanced/cookbook/usage-of-client-config.md',
        '/ru/advanced/cookbook/adding-extra-pages.md',
        '/ru/advanced/cookbook/making-a-theme-extendable.md',
        '/ru/advanced/cookbook/passing-data-to-client-code.md',
        '/ru/advanced/cookbook/markdown-and-vue-sfc.md',
        '/ru/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/ru/reference/': [
    {
      text: '核心',
      collapsible: true,
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
}

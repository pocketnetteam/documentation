import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/introduction.md',
        '/guide/getting-started.md',
        '/guide/monetization/',
        '/guide/full-node-setup/',
        '/guide/easy-node-setup/',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
        '/guide/troubleshooting.md',
      ],
    },
  ],
  '/dev/': [
    {
      text: 'Development',
      children: [
        '/dev/introduction.md',
        '/dev/get-started.md',
        '/dev/infrastructure.md',
        '/dev/contribution.md',
      ],
    },
    {
      text: 'Proxy & API',
      children: [
        '/dev/api/get-started.md',
      ],
    },
    {
      text: 'Client Applications',
      children: [
        '/dev/apps/get-started.md',
      ],
    },
    {
      text: 'Blockchain Node',
      children: [
        '/dev/node/get-started.md',
        '/dev/node/requirements.md',
        '/dev/node/environment.md',
        '/dev/node/building.md',
        '/dev/node/contribution.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
        '/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
}

import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/en': [
    {
      text: 'Get Started',
      collapsible: true,
      link: 'get-started.md',
    },
    {
      text: 'Ways to Monetize',
      children: [
        'monetization/get-started-monetization.md',
      ],
    },
    {
      text: 'User Documentation',
      children: [
        'user-docs/easy-node-setup.md',
      ],
    },
    {
      text: 'Developer Documentation',
      collapsible: true,
      children: [
        'dev-docs/get-started-dev.md',
        'dev-docs/mini-apps.md',
        'dev-docs/barteron-app.md',
        'dev-docs/full-node-setup.md',
      ],
    },
    {
      text: 'Contributing to Bastyon',
      collapsible: true,
      children: [
        'CONTRIBUTING.md',
      ],
    },
  ]
  // '/en/monetization': [
  //   {
  //     text: 'Ways to Monetize',
  //     children: [
  //       'get-started-monetization.md',
  //     ],
  //   },
  //   {
  //     text: 'Developer Documentation',
  //     collapsible: true,
  //     children: [
  //       '/dev-docs/get-started-dev',
  //     ],
  //   },
  // ],
  // 'en': [
  //   {
  //     text: 'Developer Documentation',
  //     collapsible: true,
  //     children: [
  //       '/dev-docs/get-started-dev',
  //     ],
  //   },
  //   {
  //     text: 'Bundlers',
  //     children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
  //   },
  //   {
  //     text: 'Ecosystem',
  //     children: [
  //       {
  //         text: 'Default Theme',
  //         link: 'https://ecosystem.vuejs.press/themes/default/',
  //       },
  //       {
  //         text: 'Plugins',
  //         link: 'https://ecosystem.vuejs.press/plugins/',
  //       },
  //     ],
  //   },
  // ],
  // '/advanced/': [
  //   {
  //     text: 'Advanced',
  //     children: [
  //       '/advanced/architecture.md',
  //       '/advanced/plugin.md',
  //       '/advanced/theme.md',
  //     ],
  //   },
  //   {
  //     text: 'Cookbook',
  //     children: [
  //       '/advanced/cookbook/README.md',
  //       '/advanced/cookbook/usage-of-client-config.md',
  //       '/advanced/cookbook/adding-extra-pages.md',
  //       '/advanced/cookbook/making-a-theme-extendable.md',
  //       '/advanced/cookbook/passing-data-to-client-code.md',
  //       '/advanced/cookbook/markdown-and-vue-sfc.md',
  //       '/advanced/cookbook/resolving-routes.md',
  //     ],
  //   },
  // ],
}

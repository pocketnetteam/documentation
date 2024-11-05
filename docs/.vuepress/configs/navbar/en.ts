import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'Get Started',
    link: '/en/get-started.md',
  },
  {
    text: 'Monetization',
    link: '/en/monetization/get-started-monetization.md',
  },
  {
    text: 'Developer Docs',
    children: [
      {
        text: 'Platform Overview',
        children: [
            '/en/dev-docs/get-started-dev.md',
            '/en/CONTRIBUTING.md',    
        ],
      },
      {
        text: 'MiniApps',
        children: [
          '/en/dev-docs/mini-apps.md',
        ],
      },
      {
        text: 'Barteron',
        children: [
          '/en/dev-docs/barteron-app.md',
        ],
      },
      {
        text: 'Node Maintenance',
        children: [
          {
            text: 'Full Node Setup',
            link: '/en/dev-docs/full-node-setup.md',
          },
        ],
      },
    ],
  },
  {
    text: 'User Docs',
    children: [
      '/en/get-started.md',
      'en/user-docs/easy-node-setup.md',      
    ],
  },

  // {
  //   text: 'User Docs',
  //   children: [
  //     {
  //       text: 'Advanced',
  //       children: [
  //         '/advanced/architecture.md',
  //         '/advanced/plugin.md',
  //         '/advanced/theme.md',
  //         {
  //           text: 'Cookbook',
  //           link: '/advanced/cookbook/',
  //         },
  //       ],
  //     },
  //     {
  //       text: 'Resources',
  //       children: [
  //         {
  //           text: 'Ecosystem',
  //           link: 'https://ecosystem.vuejs.press/',
  //         },
  //         {
  //           text: 'MarketPlace',
  //           link: 'https://marketplace.vuejs.press',
  //         },
  //         {
  //           text: 'Contributing Guide',
  //           link: 'https://github.com/vuepress/core/blob/main/CONTRIBUTING.md',
  //         },
  //       ],
  //     },
  //   ],
  // },
] as NavbarOptions

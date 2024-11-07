import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'User Center',
    children: [
      {
        text: 'Get Started',
        children: [
          '/guide/getting-started.md',
          '/guide/easy-node/index.md',
        ],
      },
      {
        text: 'Monetization',
        children: [
          '/guide/monetization/index.md',
        ],
      },
    ],
  },
  {
    text: 'Developer Docs',
    children: [
      {
        text: 'Platform Overview',
        children: [
          'dev/introduction.md',
          'dev/CONTRIBUTING.md',
        ],
      },
      {
        text: 'Blockchain',
        children: [
          '/dev/node/get-started.md',
          '/dev/node/requirements.md',
          '/dev/node/environment.md',
          '/dev/node/building.md',
        ],
      },
      {
        text: 'Proxy & API',
        children: [
          '/dev/api/introduction.md',
          '/dev/api/get-started.md',
        ],
      },
      {
        text: 'Applications',
        children: [
          '/dev/apps/introduction.md',
          '/dev/apps/get-started.md',
          '/dev/apps/mini-apps.md',
          '/dev/apps/barteron-app.md',
        ],
      },
    ],
  },
] as NavbarOptions

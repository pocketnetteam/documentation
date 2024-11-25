import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarRu: NavbarOptions = [
  {
    text: 'User Center',
    children: [
      {
        text: 'Get Started',
        children: [
          'guide/getting-started.md',
          'guide/easy-node/',
          'guide/full-node/',
        ],
      },
      {
        text: 'Monetization',
        children: [
          'guide/monetization/',
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
        text: 'Blockchain Node',
        children: [
          'dev/node/get-started.md',
          'dev/node/source.md',
          'dev/node/building.md',
          'dev/node/usage.md',
          'dev/node/rpc.md',
        ],
      },
      {
        text: 'Proxy & API',
        children: [
          'dev/api/introduction.md',
          'dev/api/get-started.md',
          'dev/api/rpc.md',
          'dev/api/miniapps.md',
        ],
      },
      {
        text: 'Applications',
        children: [
          'dev/apps/introduction.md',
          'dev/apps/get-started.md',
          'dev/apps/mini-apps.md',
          'dev/apps/barteron-app.md',
        ],
      },
    ],
  },
] as NavbarOptions

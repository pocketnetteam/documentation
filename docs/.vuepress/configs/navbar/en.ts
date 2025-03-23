import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'User Center',
    children: [
      {
        text: 'Get Started',
        children: [
          {
            text: 'Getting Started',
            link: '/guide/getting-started.md',
          },
          {
            text: 'Easy Node Setup Guide',
            link: '/guide/easy-node/',
          },
          {
            text: 'Full Node Setup Guide',
            link: '/guide/full-node/',
          }
        ]
      },
      {
        text: 'Monetization',
        children: [
          {
            text: 'Bastyon Monetization Guide',
            link: '/guide/monetization/',
          }
        ]
      }
    ]
  },
  {
    text: 'Developer Docs',
    children: [
      {
        text: 'Platform Overview',
        children: [
          {
            text: 'Platform Overview',
            link: '/dev/introduction.md',
          },
          {
            text: 'Contributing to Bastyon',
            link: '/dev/CONTRIBUTING.md',
          }
        ]
      },
      {
        text: 'Blockchain Node',
        children: [
          {
            text: 'Getting Started',
            link: '/dev/node/get-started.md',
          },
          {
            text: 'Source Code',
            link: '/dev/node/source.md',
          },
          {
            text: 'Building',
            link: '/dev/node/building.md',
          },
          {
            text: 'Usage',
            link: '/dev/node/usage.md',
          },
          {
            text: 'RPC',
            link: '/dev/node/rpc.md',
          }
        ]
      },
      {
        text: 'API',
        children: [
          {
            text: 'Introduction',
            link: '/dev/api/introduction.md',
          },
          {
            text: 'Get Started',
            link: '/dev/api/get-started.md',
          },
          {
            text: 'RPC',
            link: '/dev/api/rpc.md',
          },
          {
            text: 'MiniApps',
            link: '/dev/api/miniapps.md',
          }
        ]
      },
      {
        text: 'Mini Apps',
        children: [
          {
            text: 'Getting Started',
            link: '/dev/apps/miniapps/get-started.md',
          },
          {
            text: 'Permissions',
            link: '/dev/apps/miniapps/permissions.md',
          },
          {
            text: 'SDK',
            link: '/dev/apps/miniapps/sdk.md',
          },
        ]
      },
      {
        text: 'Barteron',
        children: [
          {
            text: 'Barteron APIs',
            link: '/dev/apps/barteron-app.md',
          }
        ]
      }
    ]
  }
] as NavbarOptions

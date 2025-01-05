import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'User Center',
    children: [
      {
        text: 'Get Started',
        link: '/guide/getting-started.md',
      },
      {
        text: 'Easy Node',
        link: '/guide/easy-node/',
      },
      {
        text: 'Full Node',
        link: '/guide/full-node/',
      },
      {
        text: 'Monetization',
        link: '/guide/monetization/',
      }
    ]
  },
  {
    text: 'Developer Docs',
    children: [
      {
        text: 'Introduction',
        link: '/dev/introduction.md',
      },
      {
        text: 'Contributing',
        link: '/dev/CONTRIBUTING.md',
      },
      {
        text: 'Mini Apps',
        children: [
          {
            text: 'Getting Started',
            link: '/dev/apps/miniapps/get-started.md'
          },
          {
            text: 'Permissions',
            link: '/dev/apps/miniapps/permissions.md'
          },
          {
            text: 'SDK Reference',
            link: '/dev/apps/miniapps/sdk.md'
          }
        ]
      }
    ]
  },
] as NavbarOptions

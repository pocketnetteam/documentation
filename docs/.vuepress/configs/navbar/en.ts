import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'Guide',
    children: [
      '/guide/introduction.md',
      '/guide/getting-started.md',
      '/guide/monetization/index.md',
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
  {
    text: 'Development',
    children: [
      '/dev/introduction.md',
      '/dev/get-started.md',
      '/dev/infrastructure.md',
      '/dev/contribution.md',
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
  },

] as NavbarOptions

import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/guide/': [
    {
      text: 'Users',
      children: [
        '/guide/getting-started.md',
        '/guide/monetization/',
        '/guide/easy-node/',
        '/guide/full-node/',
      ],
    },
  ],

  '/dev/': [
    {
      text: 'Developers',
      children: [
        '/dev/introduction.md',
        '/dev/CONTRIBUTING.md',
      ],
    },
  ],
  '/dev/node/': [
    {
      text: 'Blockchain Node',
      children: [
        '/dev/node/get-started.md',
        '/dev/node/source.md',
        '/dev/node/building.md',
        '/dev/node/usage.md',
        '/dev/node/rpc.md',
      ],
    },
  ],
  '/dev/api/': [
    {
      text: 'Proxy & API',
      children: [
        '/dev/api/todo.md',
        '/dev/api/introduction.md',
        '/dev/api/get-started.md',
        '/dev/api/rpc.md',
        '/dev/api/miniapps.md',
      ],
    },
  ],
  '/dev/apps/miniapps/': [
    {
      text: 'Mini Apps',
      children: [
        '/dev/apps/miniapps/get-started.md',
        '/dev/apps/miniapps/permissions.md',
        '/dev/apps/miniapps/sdk.md',
      ],
    },
  ],
  '/dev/apps/': [
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
}

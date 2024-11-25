import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarRu: SidebarOptions = {
  '/ru/guide/': [
    {
      text: 'Users',
      children: [
        'guide/getting-started.md',
        'guide/monetization/',
        'guide/easy-node/',
        'guide/full-node/',
      ],
    },
  ],

  '/ru/dev/': [
    {
      text: 'Developers',
      children: [
        'introduction.md',
        'CONTRIBUTING.md',
      ],
    },
  ],
  '/ru/dev/node': [
    {
      text: 'Blockchain Node',
      children: [
        'get-started.md',
        'source.md',
        'building.md',
        'usage.md',
        'rpc.md',
      ],
    },
  ],
  '/ru/dev/api': [
    {
      text: 'Proxy & API',
      children: [
        'todo.md',
        'introduction.md',
        'get-started.md',
        'rpc.md',
        'miniapps.md',
      ],
    },
  ],
  '/ru/dev/apps': [
    {
      text: 'Applications',
      children: [
        'introduction.md',
        'get-started.md',
        'mini-apps.md',
        'barteron-app.md',
      ],
    },
  ],
  
}

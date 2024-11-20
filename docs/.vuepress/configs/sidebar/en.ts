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
        'introduction.md',
        'CONTRIBUTING.md',
      ],
    },
  ],
  '/dev/node': [
    {
      text: 'Blockchain Node',
      children: [
        'get-started.md',
        'requirements.md',
        'environment.md',
        'building.md',
        'rpc.md',
      ],
    },
  ],
  '/dev/api': [
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
  '/dev/apps': [
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

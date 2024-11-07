import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/guide/': [
    {
      text: 'Users',
      children: [
        '/guide/getting-started.md',
        '/guide/monetization/index.md',
        '/guide/easy-node/index.md',
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
      text: 'Blockchain',
      children: [
        'get-started.md',
        'requirements.md',
        'environment.md',
        'building.md',
      ],
    },
  ],
  '/dev/api': [
    {
      text: 'Proxy & API',
      children: [
        'introduction.md',
        'get-started.md',
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

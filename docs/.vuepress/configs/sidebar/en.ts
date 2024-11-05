import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/dev/': [
    {
      text: 'Guide',
      children: [
        '/dev/introduction.md',
        '/dev/get-started.md',
        '/dev/infrastructure.md',
        '/dev/contribution.md',
      ],
    },
  ],
  '/dev/node': [
    {
      text: 'Blockchain',
      children: [
        '/dev/node/get-started.md',
        '/dev/node/requirements.md',
        '/dev/node/environment.md',
        '/dev/node/building.md',
        '/dev/node/contribution.md',
      ],
    },
  ],
  '/dev/api': [
    {
      text: 'Proxy & API',
      children: [
        '/dev/api/introduction.md',
        '/dev/api/get-started.md',
      ],
    },
  ],
  '/dev/apps': [
    {
      text: 'Applications',
      children: [
        '/dev/apps/introduction.md',
        '/dev/apps/get-started.md',
      ],
    },
  ],
  
}

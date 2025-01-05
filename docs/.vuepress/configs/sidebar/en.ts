import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
  '/guide/': [
    // ... existing guide config stays the same
  ],
  '/dev/': [
    // ... existing dev config stays the same
  ],
  '/dev/node': [
    // ... existing node config stays the same
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
  '/dev/apps/miniapps/': [
    {
      text: 'Mini Apps',
      children: [
        'get-started.md',
        'permissions.md',
        'sdk.md',
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

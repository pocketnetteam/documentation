import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarRu: SidebarOptions = {
  '/ru/dev/node/': [
    {
      text: 'Блокчейн-узел',
      children: [
        'get-started_ru.md',
        'building_ru.md',
      ],
    },
  ],
  '/ru/dev/api/apps/miniapps/': [
    {
      text: 'Мини-приложения',
      children: [
        'get-started.md',
        'permissions.md',
        'sdk.md',
      ],
    },
  ],
}

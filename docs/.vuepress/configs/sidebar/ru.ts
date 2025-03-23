import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarRu: SidebarOptions = {
  '/ru/guide/': [
    {
      text: 'Пользователи',
      children: [
        '/ru/guide/getting-started_ru.md',
        '/ru/guide/monetization/index_ru.md',
        '/ru/guide/easy-node/index_ru.md',
        '/ru/guide/full-node/index_ru.md',
      ],
    },
  ],

  '/ru/dev/': [
    {
      text: 'Разработчики',
      children: [
        '/ru/dev/introduction_ru.md',
        '/ru/dev/CONTRIBUTING_ru.md',
      ],
    },
  ],
  '/ru/dev/node/': [
    {
      text: 'Блокчейн-узел',
      children: [
        '/ru/dev/node/get-started_ru.md',
        '/ru/dev/node/source_ru.md',
        '/ru/dev/node/building_ru.md',
        '/ru/dev/node/usage_ru.md',
        '/ru/dev/node/rpc_ru.md',
      ],
    },
  ],
  '/ru/dev/api/': [
    {
      text: 'Прокси и API',
      children: [
        '/ru/dev/api/introduction_ru.md',
        '/ru/dev/api/get-started_ru.md',
        '/ru/dev/api/rpc_ru.md',
        '/ru/dev/api/miniapps_ru.md',
        '/ru/dev/api/todo_ru.md',
      ],
    },
  ],
  '/ru/dev/apps/miniapps/': [
    {
      text: 'Мини-приложения',
      children: [
        '/ru/dev/apps/miniapps/get-started_ru.md',
        '/ru/dev/apps/miniapps/permissions_ru.md',
        '/ru/dev/apps/miniapps/sdk_ru.md',
      ],
    },
  ],
  '/ru/dev/apps/': [
    {
      text: 'Приложения',
      children: [
        '/ru/dev/apps/introduction_ru.md',
        '/ru/dev/apps/get-started_ru.md',
        '/ru/dev/apps/mini-apps_ru.md',
        '/ru/dev/apps/barteron-app_ru.md',
      ],
    },
  ],
}
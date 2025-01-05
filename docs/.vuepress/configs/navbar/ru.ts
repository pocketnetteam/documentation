import type { NavbarOptions } from '@vuepress/theme-default'

export const navbarRu: NavbarOptions = [
  {
    text: 'Документация разработчика',
    children: [
      {
        text: 'Блокчейн-узел',
        children: [
          {
            text: 'Начало работы',
            link: '/ru/dev/node/get-started_ru.md'
          },
          {
            text: 'Сборка',
            link: '/ru/dev/node/building_ru.md'
          }
        ]
      },
      {
        text: 'Мини-приложения',
        children: [
          {
            text: 'Начало работы',
            link: '/ru/dev/api/apps/miniapps/get-started.md'
          },
          {
            text: 'Разрешения',
            link: '/ru/dev/api/apps/miniapps/permissions.md'
          },
          {
            text: 'SDK',
            link: '/ru/dev/api/apps/miniapps/sdk.md'
          }
        ]
      }
    ]
  }
] as NavbarOptions

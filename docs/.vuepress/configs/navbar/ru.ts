import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarRu: NavbarOptions = [
  {
    text: 'Центр пользователя',
    children: [
      {
        text: 'Начало работы',
        children: [
          {
            text: 'Начало работы',
            link: '/ru/guide/getting-started_ru.md',
          },
          {
            text: 'Руководство по настройке Easy Node',
            link: '/ru/guide/easy-node/index_ru.md',
          },
          {
            text: 'Руководство по настройке Full Node',
            link: '/ru/guide/full-node/index_ru.md',
          }
        ]
      },
      {
        text: 'Монетизация',
        children: [
          {
            text: 'Руководство по монетизации Bastyon',
            link: '/ru/guide/monetization/index_ru.md',
          }
        ]
      }
    ]
  },
  {
    text: 'Документация разработчика',
    children: [
      {
        text: 'Обзор платформы',
        children: [
          {
            text: 'Обзор платформы',
            link: '/ru/dev/introduction_ru.md',
          },
          {
            text: 'Участие в разработке Bastyon',
            link: '/ru/dev/CONTRIBUTING_ru.md',
          }
        ]
      },
      {
        text: 'Блокчейн-узел',
        children: [
          {
            text: 'Начало работы',
            link: '/ru/dev/node/get-started_ru.md',
          },
          {
            text: 'Исходный код',
            link: '/ru/dev/node/source_ru.md',
          },
          {
            text: 'Сборка',
            link: '/ru/dev/node/building_ru.md',
          },
          {
            text: 'Использование',
            link: '/ru/dev/node/usage_ru.md',
          },
          {
            text: 'RPC',
            link: '/ru/dev/node/rpc_ru.md',
          }
        ]
      },
      {
        text: 'API',
        children: [
          {
            text: 'Введение',
            link: '/ru/dev/api/introduction_ru.md',
          },
          {
            text: 'Начало работы',
            link: '/ru/dev/api/get-started_ru.md',
          },
          {
            text: 'RPC',
            link: '/ru/dev/api/rpc_ru.md',
          },
          {
            text: 'Мини-приложения',
            link: '/ru/dev/api/miniapps_ru.md',
          }
        ]
      },
      {
        text: 'Мини-приложения',
        children: [
          {
            text: 'Начало работы',
            link: '/ru/dev/apps/miniapps/get-started_ru.md',
          },
          {
            text: 'Разрешения',
            link: '/ru/dev/apps/miniapps/permissions_ru.md',
          },
          {
            text: 'SDK',
            link: '/ru/dev/apps/miniapps/sdk_ru.md',
          },
        ]
      },
      {
        text: 'Barteron',
        children: [
          {
            text: 'API Barteron',
            link: '/ru/dev/apps/barteron-app_ru.md',
          }
        ]
      }
    ]
  }
] as NavbarOptions
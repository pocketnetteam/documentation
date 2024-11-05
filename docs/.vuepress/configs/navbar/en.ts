import type { NavbarOptions } from '@vuepress/theme-default'
import { VERSION } from '../meta.js'

export const navbarEn: NavbarOptions = [
  {
    text: 'Guide',
    children: [
      '/dev/introduction.md',
      '/dev/get-started.md',
      '/dev/infrastructure.md',
      '/dev/contribution.md',
    ],
  },
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
  {
    text: 'Proxy & API',
    children: [
      '/dev/api/introduction.md',
      '/dev/api/get-started.md',
    ],
  },
  {
    text: 'Applications',
    children: [
      '/dev/apps/introduction.md',
      '/dev/apps/get-started.md',
    ],
  },

] as NavbarOptions

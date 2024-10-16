import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: ' ',  
  description: 'This documentation will help you get started with Bastyon.',

  theme: defaultTheme({
    logo: '/bastyon-logo-32x32.png',

    navbar: ['/', '/get-started'],
  }),
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],

  bundler: viteBundler(),
})
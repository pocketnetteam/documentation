import { createRequire } from 'node:module'
import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import {
  head,
  navbarEn,
  navbarRu,
  sidebarEn,
  sidebarRu,
} from './configs/index.js'
import * as fs from 'fs';

const __dirname = getDirname(import.meta.url)
const require = createRequire(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/',


  

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Bastyon',
      description: 'This documentation will help you get started with Bastyon.',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Bastyon',
      description: 'Эта документация поможет вам начать работу с Bastyon.',
    },
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(
      {
        viteOptions : {
          server : {
            https : {
                key: fs.readFileSync('cert/key.pem'),
                cert: fs.readFileSync('cert/cert.pem'),
			          passphrase: 'password'
            }
          }
        }
      }
    ),

  // configure default theme
  theme: defaultTheme({
    hostname: 'https://docs.bastyon.com',
    logo: '/images/bastyon-logo-256x256.png',
    repo: '', // TODO repo
    docsRepo: '', // TODO docsRepo
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Russian locale config
       */
      '/ru/': {
        // navbar
        navbar: navbarRu,
        selectLanguageName: 'Русский',
        selectLanguageText: 'Выбрать язык',
        selectLanguageAriaLabel: 'Выбрать язык',
        // sidebar
        sidebar: sidebarRu,
        // page meta
        editLinkText: 'Редактировать эту страницу на GitHub',
        lastUpdatedText: 'Последнее обновление',
        contributorsText: 'Участники',
        // custom containers
        tip: 'Совет',
        warning: 'Предупреждение',
        danger: 'Опасность',
        // 404 page
        notFound: [
          'Здесь ничего нет',
          'Как мы сюда попали?',
          'Это страница 404',
          'Похоже, мы перешли по неправильной ссылке',
        ],
        backToHome: 'Вернуться на главную',
        // a11y
        openInNewWindow: 'Открыть в новом окне',
        toggleColorMode: 'Переключить цветовой режим',
        toggleSidebar: 'Переключить боковую панель',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        // handle @vuepress packages import path
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
          return importPath
            .replace(
              packageName,
              path.dirname(require.resolve(`${packageName}/package.json`)),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  // use plugins
  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true
    }),
    docsearchPlugin({
      appId: '', // TODO appId
      apiKey: '', // TODO apiKey
      indexName: '',
      // searchParameters: { // TODO error?
      //   facetFilters: ['tags:v2'],
      // },
      locales: {
        
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // only enable shiki plugin in production mode
    isProd
      ? shikiPlugin({
          langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue'],
          theme: 'dark-plus',
        })
      : [],
  ],
})

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import theme from './config/theme'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
  port: 6480,
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['script', { src: 'https://cdn.armoe.cn/static/js/autoGray.js' }]
  ],
  title: "ZMusic",
  locales: {
    '/': {
      title: 'ZMusic 使用文档',
      lang: 'zh-CN'
    },
    '/en/': {
      title: 'ZMusic Docs',
      lang: 'en-US'
    }
  },
  theme,
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-MWKT4QD2W0'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
})

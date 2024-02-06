import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from 'vuepress/utils'
import theme from './config/theme'

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
  locales: {
    '/': {
      title: 'ZMusic 使用文档',
      lang: 'zh-CN'
    },
    '/en-us/': {
      title: 'ZMusic Docs',
      lang: 'en-US'
    }
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ],
  theme
})

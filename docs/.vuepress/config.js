const moment = require('moment')
const themeConfig = require('./config/theme')

module.exports = {
  port: 6480,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['script', { src: 'https://cdn.zhenxin.xyz/static/js/autoGray.js' }]
  ],
  locales: {
    '/': {
      title: 'ZMusic 官方文档',
      lang: 'zh-CN'
    },
    '/en-us/': {
      title: 'ZMusic Official Documentation',
      lang: 'en-US'
    }
  },
  theme: 'reco',
  themeConfig,
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format('YYYY/MM/DD HH:mm:ss')
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: "发现新内容可用",
            buttonText: "刷新"
          },
          '/en-us/': {
            message: "New content is available",
            buttonText: "Refresh"
          }
        }
      }
    ],
    'flexsearch-pro',
  ]
}

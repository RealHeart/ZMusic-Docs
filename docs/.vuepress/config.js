const moment = require('moment')
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
    '/en/': {
      title: 'ZMusic Official Documentation',
      lang: 'en-US'
    }
  },
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    docsRepo: 'RealHeart/ZMusic',
    docsDir: 'docs',
    editLinks: true,
    record: '辽ICP备19016520号',
    catalogUrl: '/contents',
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: '2021',
    subSidebar: 'auto',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/', icon: 'reco-home' },
          { text: 'Github', link: 'https://github.com/Genshin-Wiki/Genshin-Wiki', icon: 'reco-github' },
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/', icon: 'reco-home' },
          { text: 'Github', link: 'https://github.com/Genshin-Wiki/Genshin-Wiki', icon: 'reco-github' },
        ]
      }
    }
  },
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
      '@vuepress/google-analytics',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ]
}

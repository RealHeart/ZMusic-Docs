import { sidebar } from "vuepress-theme-hope";

const sidebarZhCn = sidebar({
  '/zh-cn/': [
    {
      text: '快速上手',
      children: [
        'getting-started',
        'faq',
        'faq-v2',
      ]
    },
    {
      text: '使用指南',
      children: [
        'usage/commands',
        'usage/permissions',
        'usage/config',
      ]
    },
    {
      text: '自建API',
      children: [
        'deploy-api/netease-api',
      ]
    },
    {
      text: '进阶',
      children: [
        'advance/contributing'
      ]
    }
  ]
})

const sidebarEnUs = sidebar([
  {
    text: 'Getting Started',
    children: [
      'en-us/getting-started',
      'en-us/faq',
    ]
  }
])

export { sidebarZhCn, sidebarEnUs }

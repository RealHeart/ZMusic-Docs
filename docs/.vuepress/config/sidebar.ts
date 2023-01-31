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

const sidebarEnUs = sidebar({
  '/en-us/': [
    {
      text: 'Getting Started',
      children: [
        'getting-started'
      ]
    },
    {
      text: 'Usage Guild',
      children: [
        'usage/commands',
        'usage/permissions',
        'usage/config',
      ]
    },
    {
      text: 'Deploy API',
      children: [
        'deploy-api/netease-api',
      ]
    },
    {
      text: 'Advanced',
      children: [
        'advance/contributing'
      ]
    }
  ]
})

export { sidebarZhCn, sidebarEnUs }

import { sidebar } from 'vuepress-theme-hope'

const childrens = {
  guide: ['introduction', 'getting-started', 'commands', 'permissions', 'config']
}

const sidebarZh = sidebar({
  '/': [
    {
      text: '指南',
      prefix: 'guide',
      link: 'guide/README.md',
      icon: 'lightbulb',
      children: childrens.guide
    },
    {
      text: '常见问题',
      link: 'faq.md',
      icon: 'circle-question',
    },
    {
      text: '网易云音乐 API',
      link: 'netease-api.md',
      icon: 'fa-solid fa-music',
    }
  ]
})

const sidebarEn = sidebar({
  '/': [
    {
      text: 'Guide',
      prefix: 'guide',
      link: '/en/guide/README.md',
      icon: 'lightbulb',
      children: childrens.guide
    }
  ]
})

export { sidebarZh, sidebarEn }

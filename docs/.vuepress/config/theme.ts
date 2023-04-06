import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEnUs, navbarZhCn } from './navbar'
import { sidebarEnUs, sidebarZhCn } from './sidebar'

export default hopeTheme({
  iconAssets: 'iconfont',
  repo: 'RealHeart/ZMusic',
  docsRepo: 'RealHeart/ZMusic-Docs',
  docsDir: 'docs',
  breadcrumb: false,
  locales: {
    '/': {
      navbar: navbarZhCn,
      sidebar: sidebarZhCn
    },
    '/zh-cn/': {
      navbar: navbarZhCn,
      sidebar: sidebarZhCn
    },
    '/en-us/': {
      navbar: navbarEnUs,
      sidebar: sidebarEnUs
    }
  }
})

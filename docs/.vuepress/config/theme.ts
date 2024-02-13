import { hopeTheme } from 'vuepress-theme-hope'
import { navbarEn, navbarZh } from './navbar'
import { sidebarEn, sidebarZh } from './sidebar'

export default hopeTheme({
  iconAssets: 'fontawesome-with-brands',
  repo: 'RealHeart/ZMusic',
  docsRepo: 'RealHeart/ZMusic-Docs',
  docsDir: 'docs',
  locales: {
    '/': {
      navbar: navbarZh,
      sidebar: sidebarZh
    },
    '/en/': {
      navbar: navbarEn,
      sidebar: sidebarEn
    }
  }
})

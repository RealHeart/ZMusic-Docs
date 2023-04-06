import { navbar } from 'vuepress-theme-hope'

const navbarZhCn = navbar([
  { text: '首页', link: '/' },
  { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=9Xs1RMt5' },
  { text: 'Discord', link: 'https://discord.gg/twQgJNufYn' },
  { text: 'Github', link: 'https://github.com/RealHeart/ZMusic' },
  { text: 'SpigotMC', link: 'https://www.spigotmc.org/resources/83027/' },
  { text: 'MCBBS', link: 'https://www.mcbbs.net/thread-967007-1-1.html' }
])

const navbarEnUs = navbar([
  { text: 'Home', link: '/en-us/' },
  { text: 'Discord', link: 'https://discord.gg/twQgJNufYn' },
  { text: 'Github', link: 'https://github.com/RealHeart/ZMusic' },
  { text: 'SpigotMC', link: 'https://www.spigotmc.org/resources/83027/' }
])

export { navbarZhCn, navbarEnUs }

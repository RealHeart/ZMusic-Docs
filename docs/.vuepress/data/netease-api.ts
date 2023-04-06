const neteaseApiList: NeteaseApiData[] = [
  {
    link: 'https://zm.armoe.cn', // API地址
    location: '上海', // 位置
    provider: {
      name: '真心', // 提供者名称
      link: 'https://github.com/RealHeart' // 提供者链接
    }
  },
  {
    link: 'https://zmusic.i9mr.com',
    location: '宿迁',
    provider: {
      name: '墨染云',
      link: 'https://i9mr.com'
    }
  },
  {
    link: 'https://music.mcseekeri.top',
    location: '美国',
    provider: {
      name: 'MCSeekeri',
      link: 'https://github.com/MCSeekeri'
    }
  },
  {
    link: 'https://api.163.rtast.cn',
    location: '美国',
    provider: {
      name: 'RTAkland',
      link: 'https://github.com/RTAkland'
    }
  }
]

export interface NeteaseApiData {
  link: string
  location: string
  provider: {
    name: string
    link: string
  }
}

export default neteaseApiList

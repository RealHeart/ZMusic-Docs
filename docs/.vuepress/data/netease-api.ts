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
    link: 'https://music.mcseekeri.com',
    location: '美国',
    provider: {
      name: 'MCSeekeri',
      link: 'https://github.com/MCSeekeri'
    }
  },
  {
    link: 'https://zmusic.dgcsj.top',
    location: '杭州',
    provider: {
      name: '迪哥闯世界',
      link: 'https://www.dgcsj.top'
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

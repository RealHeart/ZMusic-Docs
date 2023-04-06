---
title: Configuration
---

```yaml
# Enable check for updates
check-update: true
# Usage language
language: 'zh_CN'
# Message prefix
prefix: '&bZMusic &e>>> &r'
# Enable debug mode
debug: false

# Proxy settings
proxy:
  # Enable proxy
  enable: false
  # Hostname
  hostname: 127.0.0.1
  # Port
  port: 8080

# API settings
#
# Self-built projects using open source API are recommended
# NeteaseCloudMusic: https://github.com/Binaryify/NeteaseCloudMusicApi
api:
  # NeteaseCloudMusic
  netease:
    # API link
    link: ''
    # Account
    account: ''
    # Password
    password: ''

# ZMusic VIP settings
vip:
  # Authorized QQ
  qq: ''
  # Authorized Key
  key: ''

# Broadcast music settings
music:
  # Execute command
  # Players with zmusic.bypass permission ignore
  commands:
    - 'money take %player_name% 10'
  # Cooldown
  # Players with zmusic.bypass permission ignore
  cooldown: 5

# Lyric settings
lyric:
  # Enable lyric display
  enabled: true
  # Show lyric translation
  show-translation: true
  # Lyric color
  color: '&b'
  # The following are the display mode settings, which can be enabled at the same time
  # Whether to use BossBar to display lyrics (1.8 and below are not supported)
  boss-bar: true
  # Whether to use ActionBar to display lyrics (less than 1.8 is not supported)
  action-bar: false
  # Whether to use chat message to display lyrics
  chat: false

# Hud settings (only support 1.12 and above)
hud:
  # Enable hud
  enabled: true
  # Info settings
  info:
    # Enable
    enabled: true
    # X position
    x: 2
    # Y position
    y: 12
  # Lyric settings
  lyric:
    enabled: true
    x: 2
    y: 72
```

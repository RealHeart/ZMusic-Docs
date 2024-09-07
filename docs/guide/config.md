---
title: 配置文件
icon: fa-solid fa-gear
---

::: warning
**您当前正在查看的文档为 V4 版本文档**<br>
**此版本仍在开发中，可能存在错误或不完善的地方**<br>
**当前长期支持版本为 V2，您可以查看 [V2 文档](/v2/README.md)**
:::

TOML 规范说明请参考 [toml.io](https://toml.io/cn/)

```toml
# 是否开启调试模式
debug = false
# 是否检查更新
check-update = true
# 插件使用的语言
# 支持的语言:
# auto: 自动检测 (默认)
# en-US: English
# zh-CN: 简体中文
language = "auto"
# 消息前缀
prefix = "&bZMusic &e>>> &r"

# API设置
[api]
# 网易云音乐
netease-link = "https://zm.armoe.cn"

# ZMusic VIP设置
[vip]
# 授权QQ
qq = ""
# 授权Key
key = ""

# 代理设置
[proxy]
# 是否启用代理
enable = false
# 代理类型 HTTP/SOCKS
type = "HTTP"
# 主机名
hostname = "127.0.0.1"
# 端口
port = 8080
```

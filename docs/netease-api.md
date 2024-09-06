---
title: 网易云音乐 API
icon: fa-solid fa-music
---

- [项目地址](https://gitlab.com/Binaryify/neteasecloudmusicapi)

## 公共服务器

::: warning
**请谨慎使用公共服务器执行登录操作。**
**因使用公共服务器所导致的盗号等问题，概不负责。**
:::

如果遇到自建 API 无法登录的问题，请确保您遵循了下方的部署指南。并且将登陆方式改为邮箱登录。

<netease-api />

::: warning
如果遇到自建 API 无法登录的问题。
请确保您遵循了下方的部署指南，并且将登陆方式改为邮箱登录。
:::

## 替换位置

### V4
```toml {4}
# API设置
[api]
# 网易云音乐
netease-link = "https://zm.armoe.cn"
```

### V2

```json {8}
/// API设置
  "api": {
    /// 网易云音乐API地址
    ///
    /// 使用开源项目NeteaseCloudMusicApi
    /// 推荐自行部署，需Node.js环境
    /// 地址: https://github.com/Binaryify/NeteaseCloudMusicApi
    "netease": "https://zm.armoe.cn"
  },
```


## 部署

部署前确保已安装如下环境

- [Git](https://git-scm.com/download)
- [Node.js](https://nodejs.org/zh-cn/)

1. 获取代码

```shell
git clone https://gitlab.com/Binaryify/neteasecloudmusicapi.git
cd neteasecloudmusicapi
```

2. 安装依赖

```shell
npm install
```

3. 运行

```shell
node app.js
```

4. 自定义端口

4.1 Linux

```shell
PORT=4000 node app.js
```

4.2 Windows

```bat
set PORT=4000 && node app.js
```

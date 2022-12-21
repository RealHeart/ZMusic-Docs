---
title: 网易云音乐API
---

* [项目地址](https://github.com/Binaryify/NeteaseCloudMusicApi)
* [使用文档](https://neteasecloudmusicapi.vercel.app/#/?id=%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3)

## 公共服务器

::: warning
**请谨慎使用公共服务器执行登录操作。**

**因使用公共服务器所导致的盗号等问题，概不负责。**

**推荐您根据[以下说明](#部署)自行部署使用。**
:::

如果遇到自建 API 无法登录的问题，请确保您遵循了下方的部署指南。并且将登陆方式改为邮箱登录。

|                         地址                          | 位置  |                   提供者                   |                                   捐赠                                   |
| :---------------------------------------------------: | :---: | :----------------------------------------: | :----------------------------------------------------------------------: |
|   [https://wyy.whksoft.cn](https://wyy.whksoft.cn)    | 上海  | [舞晗坤](https://github.com/SleepyAsh0191) | [赞助二维码](https://img.kookapp.cn/assets/2022-07/rjsOa6Tqky0ks0ks.jpg) |
| [https://wyyhk.whksoft.cn](https://wyyhk.whksoft.cn)  | 香港  | [舞晗坤](https://github.com/SleepyAsh0191) | [赞助二维码](https://img.kookapp.cn/assets/2022-07/rjsOa6Tqky0ks0ks.jpg) |
|   [https://music.mcseekeri.top](https://music.mcseekeri.top/) | 美国 | [MCSeekeri](https://github.com/SleepyAsh0191)

## 部署

部署前确保已安装如下环境

* [Git](https://git-scm.com/download)
* [Node.js](https://nodejs.org/zh-cn/)

1. 克隆代码

```shell
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
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

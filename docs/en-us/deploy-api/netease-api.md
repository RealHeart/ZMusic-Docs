---
title: NeteaseCloudMusic API
---

* [Project Github](https://github.com/Binaryify/NeteaseCloudMusicApi)
* [Usage Docment](https://neteasecloudmusicapi.vercel.app/#/?id=%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3)

## Public server

::: warning
**Please use the public server carefully to perform the login operation.**

**We will not be responsible for problems such as number theft caused by the use of public servers.**

**It is recommended that you deploy and use it according to [**the following instructions**](#Deployment).**
:::

If you encounter the problem that the self-built API cannot log in, please ensure that you follow the deployment guide below. And change the login method to email login.

|         API address         | Location |                 Provider                  |                Sponsor                |
| :-------------------------: | :------: | :---------------------------------------: | :-----------------------------------: |
|     https://zm.armoe.cn     |  China   |   [真心](https://github.com/RealHeart)    | [PayPal](https://paypal.me/QGZhenXin) |
|   https://zmusic.i9mr.com   |  China   |        [墨染云](https://i9mr.com)         |                                       |
| https://music.mcseekeri.top | America  | [MCSeekeri](https://github.com/MCSeekeri) |                                       |
|  https://api.163.rtast.cn   | America  |  [RTAkland](https://github.com/RTAkland)  |                                       |


Replace location

```yaml {9}
# API Settings
#
# Self-built projects using open source API are recommended
# NeteaseCloudMusic: https://github.com/Binaryify/NeteaseCloudMusicApi
api:
  # NeteaseCloudMusic
  netease:
    # API link
    link: '<API address>'
    # Account
    account: ''
    # Password
    password: ''
```


## Deployment

Ensure that the following environment is installed before deployment

* [Git](https://git-scm.com/download)
* [Node.js](https://nodejs.org/)

1. Clone

```shell
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
```

2. Install

```shell
npm install
```

3. Run

```shell
node app.js
```

4. Custom port

4.1 Linux

```shell
PORT=4000 node app.js
```

4.2 Windows

```bat
set PORT=4000 && node app.js
```

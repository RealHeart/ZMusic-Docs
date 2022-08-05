---
title: 常见问题
---

注意：此处的常见问题仅适用于 V3 版本，V2 版本请查看[常见问题 (V2留档)](faq-v2.md)

## 播放时没有声音

很抱歉，由于各种网站提供的 API 返回的音频格式不一，模组在解码方面可能不支持，所以无法播放，请谅解，此问题我们将会在后续的模组更新中尽可能修复。  
如果您确认您选择的网站的格式支持解码，那么请参照旧版本的此部分进行检查。


## 无法点击点歌按钮

您使用的 ZMusic 插件版本还在停留在内测版本，并且您的服务端版本过新，因为您选择的 Minecraft 版本中涉及到了 JSON 文本格式的更新。所以部分文本对象无法以旧版本的方式实现，请时刻更新到最新的版本。

## 点歌成功后，后台刷屏报黄色错误

请检查您是否关闭了调试模式，关闭调试模式可在`config.yml`中设置。  
如果您确信您已经关闭了调试模式，那么请复制后台出现的错误信息，发送给我们，我们将会在后续的更新中尽可能修复。

## 安装 AllMusic 之后，客户端无法启动 (Fabric)

* 请检查您安装的模组版本是否对应，如您的客户端使用的是 Fabric 模组加载器，但是您下载的是 `[Forge-1.16.5]-AllMusic-x.x.x.jar`
* 如果您下载的是 Fabric 版本模组，请检查您是否安装了 `Fabric-API` 前置模组
* 本模组与`CardBoard`不兼容

~~(所以我一个ZMusic使用文档为什么要回答AllMusic的问题，AllMusic插件用户请退群)~~

## 支持 Velocity 吗？
在 3.0 版本中，我们已经对其进行适配。

## 插件命令无法被 DeluxeMenu/TrMenu 等菜单插件调用 (BungeeCord/WaterFall)

这是群组服的通病，因为 ZMusic 的指令是注册在群组服核心内，而插件只能调用 Spigot/Paper 侧的指令。  
这边想出了一个折中的方法，就是让用户自己输入，虽然这样做对用户来说不太友好，但是自己动手，丰衣足食！

## [zmusic插件一直提示没有zmusic.use权限，确保权限组已经加入了](https://www.mcbbs.net/forum.php?mod=viewthread&tid=1310665)

如果您使用的是蹦极端(BungeeCord/Waterfall)，请在跨服端的插件目录内添加LuckPerms-Bungee插件，然后通过`/lpb`指令进行赋予权限。



## [[Sponge]服务端ZMusic在线音乐加载不上去](https://www.mcbbs.net/forum.php?mod=viewthread&tid=1048579)

本插件不支持 Sponge，请等待后续更新。

## 我找不到以上描述的任何错误

您可以加入我们的交流群，如果有报错信息的话，请上传后台报错信息至[WhkSoft PasteBin](https://paste.whksoft.cn/)  
然后通过链接的形式反馈给我们。  
帮助手册仍在进一步完善中！
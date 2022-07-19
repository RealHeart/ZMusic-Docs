const sidebar = require('./sidebar')
module.exports = {
    noFoundPageByTencent: false,
    docsRepo: 'RealHeart/ZMusic-Docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    record: '辽ICP备19016520号-2',
    recordLink: 'http://beian.miit.gov.cn/',
    startYear: '2021',
    sidebar: sidebar,
    search: true,
    locales: {
        '/': {
            label: '简体中文',
            selectText: '选择语言',
            ariaLabel: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdated: '上次更新',
            nav: [
                { text: '首页', link: '/' },
                { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=9Xs1RMt5' },
                { text: 'Discord', link: 'https://discord.gg/twQgJNufYn' },
                { text: 'Github', link: 'https://github.com/RealHeart/ZMusic' },
                { text: 'SpigotMC', link: 'https://www.spigotmc.org/resources/83027/' },
                { text: 'MCBBS', link: 'https://www.mcbbs.net/thread-967007-1-1.html' },
            ]
        },
        '/en/': {
            label: 'English',
            selectText: 'Languages',
            ariaLabel: 'Select language',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Discord', link: 'https://discord.gg/twQgJNufYn' },
                { text: 'Github', link: 'https://github.com/RealHeart/ZMusic' },
                { text: 'SpigotMC', link: 'https://www.spigotmc.org/resources/83027/' },
            ]
        }
    }
}
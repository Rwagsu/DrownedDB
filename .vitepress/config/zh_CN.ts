import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { zhCNNav } from '../navbar'

export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Rwagsu 的 Blog & Docs!",
  themeConfig: {
    siteTitle: 'RwagsuOwO',

    nav: zhCNNav,

    editLink: {
      pattern: 'https://github.com/Rwagsu/RwagsuOwO/blob/VitePress/docs/zh_CN/:path',
      text: '在 GitHub 编辑该页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '外观',

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebarMenuLabel: '菜单',

    returnToTopLabel: '返回顶部',

    langMenuLabel: '语言',

    externalLinkIcon: true,

    outlineTitle: '页面导航',

    footer: {
      message: '这里是 <a href="https://space.bilibili.com/2123349162">Rwagsu</a> 和 <a href="https://space.bilibili.com/527675045">DrownedOwO</a>! 看看新作品! ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ',
      copyright: '版权所有 © 2025 - 2025 <a href="https://github.com/Rwagsu">Rwagsu</a> & <a href="https://github.com/DrownedOwO">DrownedOwO</a>,<br/>所有原创作品均根据 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 进行分发, 搬运作品根据原许可进行分发, 除非另有说明.'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    blog: {
          path: "/blog",
          title: 'Rwagsu Blog!',
          description: '等离子代码绘画加速器启动启动! ψ(｀∇´)ψ',
          defaultAuthor: 'Rwagsu',
          categoryIcons: {
            教程: 'i-[mage/book-fill]',
          }, 
          tagIcons: {
              'WinUI 3': 'i-[file-icons/winui]',
          },
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}
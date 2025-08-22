import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { enUSNav } from '../navbar'

export const enUSConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Rwagsu's Docs & Blogs!",
  themeConfig: {
    siteTitle: 'RwagsuOwO',

    nav: enUSNav,

    editLink: {
      pattern: 'https://github.com/Rwagsu/RwagsuOwO/blob/VitePress/docs/:path',
      text: 'Edit this page on GitHub'
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    darkModeSwitchLabel: 'Appearance',

    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',

    returnToTopLabel: 'Return to top',

    sidebarMenuLabel: 'Menu',

    langMenuLabel: 'Language',

    outlineTitle: 'On this page',

    footer: {
      message: 'This is <a href="https://space.bilibili.com/2123349162">Rwagsu</a> and <a href="https://space.bilibili.com/527675045">DrownedOwO</a>! Check out our new work! ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ',
      copyright: 'Copyright © 2025 - 2025 <a href="https://github.com/Rwagsu">Rwagsu</a> & <a href="https://github.com/DrownedOwO">DrownedOwO</a>.<br/>All original works are distributed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">CC BY-NC-SA 4.0</a>. Reproduced works are distributed under the original license unless otherwise specified.'
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
          path: "/en_US/blog",
          title: 'Rwagsu Blog',
          description: 'Plasma Code Painting Accelerator Launch Launch! ψ(｀∇´)ψ',
          defaultAuthor: 'Rwagsu',
          categoryIcons: {
            Tutorial: 'i-[mage/book-fill]',
          }, 
          tagIcons: {
              'WinUI 3': 'i-[file-icons/winui]',
          },
      },

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/Rwagsu',
        ariaLabel: 'GitHub'
      },
      { 
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></svg>'
        },
        link: 'https://space.bilibili.com/2123349162',
        ariaLabel: 'Bilibili'
      }
    ]
  }
}
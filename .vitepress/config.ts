import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share'
import { zhCNConfig } from './config/zh_CN'
import { enUSConfig } from './config/en_US'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: '中文(简体)',
      lang: 'zh-CN',
      ...zhCNConfig
    },
    en_US: {
      label: 'English',
      lang: 'en-US',
      link: '/en_US/',
      ...enUSConfig
    }
  },
})
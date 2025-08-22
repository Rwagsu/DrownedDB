import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
  // Init Language
  rewrites: {
    'zh_CN/:rest*': ':rest*'
  },
  metaChunk: true,
  lang: 'zh-CN', 

  srcDir: "docs",
  
  title: "RwagsuOwO",

  base: '/RwagsuOwO/',
  cleanUrls: true,
  lastUpdated: true,
})
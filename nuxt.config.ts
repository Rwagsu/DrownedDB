// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ['shadcn-docs-nuxt'],
    content: {
        highlight: {
            langs: ['csharp', 'xml', 'kotlin', 'groovy', 'kts', 'java', 'log', 'rust', 'properties', 'toml'],
        },
    },
    app: {
        baseURL: '/RwagsuOwO/',
    },
    fonts: {
        providers: {
            google: false,
            googleicons: false,
            adobe: false,
            bunny: false
        }
    },
    i18n: {
        defaultLocale: 'zh',
        locales: [
            {
                code: 'zh',
                name: '中文 (简体)',
                language: 'zh-CN',
            },
            {
                code: 'en',
                name: 'English',
                language: 'en-US',
            }
        ],
    },
    compatibilityDate: '2025-08-30',
});

import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enUSNav: DefaultTheme.NavItem[] = [
    {
        text: 'Docs',
        items: [
            { text: 'Home', link: '/en_US/docs' },
            { text: 'Blender', link: '/en_US/docs/blender' },
            { text: 'WinUI 3', link: '/en_US/docs/winui3' },
        ]
    },
    { 
        text: 'Blogs',
        items: [
            { text: 'Home', link: '/en_US/blogs' },
            { text: 'Tags', link: '/en_US/blogs/tags' },
            { text: 'Archives', link: '/en_US/blogs/archives' },
        ] 
    },
    { 
        text: "Rwagsu's works",
        items: [
            { text: 'Home', link: '/en_US/works' },
            { text: 'Codes', link: '/en_US/works/codes' },
            { text: 'Videos', link: '/en_US/works/videos' },
            { text: 'Images', link: '/en_US/works/images' },
            { text: 'Audios', link: '/en_US/works/audios' },
            { text: 'Others', link: '/en_US/works/others' },
        ]
    },
    {
        text: 'About', 
        link: '/en_US/about'
    }
]
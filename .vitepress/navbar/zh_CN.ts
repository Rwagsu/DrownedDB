import type { DefaultTheme } from 'vitepress'

export const zhCNNav: DefaultTheme.NavItem[] = [
    {
        text: '文档',
        items: [
            { text: '首页', link: '/docs' },
            { text: 'Blender', link: '/docs/blender' },
            { text: 'WinUI 3', link: '/docs/winui3' },
        ]
    },
    { 
        text: 'Blogs',
        items: [
            { text: '首页', link: '/blogs' },
            { text: '标签', link: '/blogs/tags' },
            { text: '归档', link: '/blogs/archives' },
        ] 
    },
    { 
        text: 'Rwagsu 的作品',
        items: [
            { text: '首页', link: '/works' },
            { text: '编码', link: '/works/codes' },
            { text: '视频', link: '/works/videos' },
            { text: '绘画', link: '/works/images' },
            { text: '音乐', link: '/works/audios' },
            { text: '其它', link: '/works/others' },
        ]
    },
    {
        text: '关于', 
        link: '/about'
    }
]
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Starlight Nova Theme
import starlightThemeNova from 'starlight-theme-nova'
// Scroll to Top
import starlightScrollToTop from 'starlight-scroll-to-top'
// Auto Sidebar
import starlightAutoSidebar from 'starlight-auto-sidebar'
// Videos
import starlightVideos from 'starlight-videos'
// Image Zoom
import starlightImageZoom from 'starlight-image-zoom'
//Bradges
import starlightHeadingBadges from 'starlight-heading-badges'
// Floor Credit
import starlightCoolerCredit from 'starlight-cooler-credit'
// Giscus
import starlightGiscus from 'starlight-giscus'
// Blog
import starlightBlog from 'starlight-blog'
// Sidebar topics
import starlightSidebarTopics from 'starlight-sidebar-topics'

// Links Validator
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DrownedDB',
			description: 'test',

			// Localization
			defaultLocale: 'root',
      		locales: {
				root: {
          			label: '中文 (简体)',
					lang: 'zh-CN',
        		},

        		en: {
        		  label: 'English',
       			 },
        		
      		},

			// Plugins
			plugins: [
				starlightThemeNova({
					nav: [
						{
							label: 'Docs',
							href: '/DrownedDB/docs'
						},
						{
							label: 'Blogs',
							href: '/DrownedDB/blog'
						},
						{
							label: "Rwagsu's portfolio",
							href: '/DrownedDB/collections'
						},
						{
							label: "Resources",
							href: '/DrownedDB/resources'
						}
					]
				}),
				starlightScrollToTop(),
				starlightAutoSidebar(),
				starlightVideos(),
				starlightImageZoom(),
				starlightHeadingBadges(),
				starlightCoolerCredit(),
				starlightGiscus({
					repo: 'Rwagsu/DrownedDB',
					repoId: 'R_kgDOPCVQEQ',
					category: 'Comments',
					categoryId: 'DIC_kwDOPCVQEc4CsmMo',
					inputPosition: 'top',
					lazy: true,
				}),

				// Blog
				starlightBlog({
					authors: {
                        rwagsu: {
                    		name: 'Rwagsu',
                            title: 'OwO',
                            picture: 'https://avatars.githubusercontent.com/u/84891987?v=4',
                            url: 'https://rwagsu.github.io/DrownedDB/',
                        },
                    },
					metrics: {
    					readingTime: true,
   				 		words: 'total',
  					},
				}),

				// Sidebar Topics
				starlightSidebarTopics([
					// Docs
          			{
            			label: 'Blender',
            			link: '/docs/blender/',
            			icon: 'pkl',
            			items: [
							{
     							label: 'Blender',
      							autogenerate: { directory: '/docs/blender/' },
   							},
						],
          			},

					// Other
					{
            			label: {
							'zh-CN': 'Rwagsu 的作品集',
							en: "Rwagsu's portfolio"
						},
						id: 'collections',
            			link: '/collections/',
            			icon: 'seti:plan',
            			items: [
							{
     							label: 'Collections',
      							autogenerate: { directory: '/collections/' },
   							},
						],
						
          			},
					{
            			label: 'Blogs',
            			link: '/blog/',
            			icon: 'comment',
            			items: [
							{
     							label: 'Blogs',
      							autogenerate: { directory: '/blog/' },
   							},
						],
						
          			},
					{
            			label: {
							'zh-CN': '资源',
							en: "Resources"
						},
            			link: '/resources/',
            			icon: 'rocket',
            			items: [
							{
     							label: 'Resources',
      							autogenerate: { directory: '/resources/' },
   							},
						],
          			}
        		], {
					exclude: ['/blog', '/blog/**/*', '/*/blog', '/*/blog/**/*'],
				}),
			], 

			// Override Components
			components: {
				Sidebar: './src/components/Sidebar.astro',
				Pagination: './src/components/Pagination.astro',
			},

			// Css
			customCss: [
        		'./src/styles/main.css',
      		],

			// Links
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Rwagsu' },
				{ icon: 'youtube', label: 'Bilibili', href: 'https://space.bilibili.com/2123349162' }

			],

			// EditLink
			editLink: {
        		baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
      		},

			// Is LastUpdate enabled
			lastUpdated: true,

			// TODO: favicon

			// Title Delimiter
			titleDelimiter: '<',

			// TODO: DIsable Default 404

			// Credits
			credits: true,
		}),
	],
	site: 'https://rwagsu.github.io',
	base: '/DrownedDB'
});

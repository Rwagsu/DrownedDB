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


// Links Validator
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DrownedDB',

			// Localization
			defaultLocale: 'zh',
      		locales: {
        		// 英文文档在 `src/content/docs/en/` 中。
        		en: {
        		  label: 'English',
       			 },
        		zh: {
          		label: '中文 (简体)',
        		},
      		},

			// Plugins
			plugins: [
				starlightThemeNova(),
				starlightScrollToTop(),
				starlightAutoSidebar(),
				starlightVideos(),
				starlightImageZoom(),
				starlightHeadingBadges(),
				starlightCoolerCredit(),
				starlightGiscus({
					repo: 'https://github.com/Rwagsu/DrownedDB',
					repoId: 'R_kgDOPCVQEQ',
					category: 'Comments',
					categoryId: 'DIC_kwDOPCVQEc4CsmMo',
					inputPosition: 'top',
					lazy: true,
				}),
				starlightBlog(),
			], 
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
});

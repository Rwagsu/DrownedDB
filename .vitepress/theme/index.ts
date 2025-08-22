// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/style.css'
import { useRoute } from 'vitepress';

// NProgress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

// Image Viewer
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import {VPBTheme} from "@chunge16/vitepress-blogs-theme";

export default {
  extends: VPBTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    // ...
    ctx.app.component('vImageViewer', vImageViewer);
    vitepressNprogress(ctx)
  },
  setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }
} satisfies Theme

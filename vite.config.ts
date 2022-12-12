import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { prismjsPlugin } from 'vite-plugin-prismjs';

const pathSrc = resolve(__dirname, './src');
const pathRoot = resolve(__dirname, '.');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
      '_': pathRoot
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            // "Android 4.1",
            // "iOS 7.1",
            // "Chrome > 31",
            // "ff > 31",
            // "ie >= 8"
            'last 2 versions', // 所有主流浏览器最近2个版本
          ]
        })
      ]
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        })
      ],
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true,
    }),
    prismjsPlugin({
      "languages": ["javascript", "css", "markup", "json"],
      "plugins": ["line-numbers", "show-language", "copy-to-clipboard"],
      "theme": "okaidia",
      "css": true
    }),
    eslint()
  ]
})

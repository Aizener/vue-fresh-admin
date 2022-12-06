import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

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
    eslint()
  ]
})

import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import ExtApi from './plugins/extapi'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/page',
  base: './',
  build: {
    outDir: resolve(__dirname, 'extension/dist')
  },
  plugins: [
    Vue(),
    UnoCSS({
      presets: [presetUno(), presetAttributify()]
    }),
    Components({
      dirs: '../components',
      dts: true
    }),
    ExtApi()
  ]
})

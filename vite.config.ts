import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

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
    ExtApi()
  ]
})

import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/page',
  base: './',
  build: {
    outDir: resolve(__dirname, 'extension/dist')
  },
  plugins: [Vue()]
})

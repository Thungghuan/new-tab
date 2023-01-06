import { defineConfig } from 'tsup'

export default defineConfig(() => ({
  entry: {
    'background/index': './src/background/index.ts'
  },
  outDir: 'extension/dist',
  format: ['esm'],
  target: 'esnext',
  ignoreWatch: ['**/extension/**'],
  splitting: false,
  sourcemap: false,
  platform: 'browser',
  minifyWhitespace: false,
  minifySyntax: false
}))

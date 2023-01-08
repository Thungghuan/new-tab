import { Plugin } from 'vite'

function transformWallPaper(src: string) {
  if (!/%%EXTAPI-TRANSFORM%%/.test(src)) return

  const preImport = `import browser from 'webextension-polyfill';`
  const transformed = src
    .replace(
      '<script setup lang="ts">',
      `<script setup lang="ts">
${preImport}
`
    )
    .replace(
      '// %%EXTAPI-TRANSFORM%%',
      `
browser.storage.local.get(['daily-wp-url', 'daily-wp-cr']).then((storage) => {
  wallpaperUrl.value = storage['daily-wp-url']
  wallpaperCR.value = storage['daily-wp-cr']
});
browser.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'daily-wp-url') wallpaperUrl.value = newValue
    if (key === 'daily-wp-cr') wallpaperCR.value = newValue
  }
});`
    )
    .replace(/wallpaperUrl.value\s+=\s+['"].*['"]/, '')
    .replace(/wallpaperCR.value\s+=\s+['"].*['"]/, '')

  return transformed
}

export default function ExtApi(): Plugin {
  return {
    name: 'extapi',
    enforce: 'pre',
    transform(src, id) {
      if (/App\.vue/.test(id)) {
        return {
          code:
            process.env['NODE_ENV'] === 'development'
              ? src
              : transformWallPaper(src)
        }
      }
    }
  }
}

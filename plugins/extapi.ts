import { Plugin } from 'vite'

function transformWallPaper(src: string) {
  if (!/wallpaperUrl.value = ".*"/.test(src)) return

  const transformed = `import broswer from 'webextension-polyfill';` + src

  return transformed
    .replace(
      /wallpaperUrl.value = ".*"/,
      `broswer.storage.local.get(['daily-wp-url', 'daily-wp-cr']).then((storage) => {
        console.log(storage)
        wallpaperUrl.value = storage['daily-wp-url']
        wallpaperCR.value = storage['daily-wp-cr']
      });`
    )
    .replace(/wallpaperCR.value = ".*"/, '')
}

export default function ExtApi(): Plugin {
  return {
    name: 'extapi',
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

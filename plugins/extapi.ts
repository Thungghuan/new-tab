import { Plugin } from 'vite'

function transformWallPaper(src: string) {
  if (!/const wallpaper = ".*"/.test(src)) return

  const transformed = `import broswer from 'webextension-polyfill';` + src

  return transformed
    .replace(
      /const wallpaper = ".*"/,
      `broswer.storage.local.get(['daily-wp']).then((storage) => {
       wallpaperUrl.value = storage['daily-wp']
     });
     `
    )
    .replace(`wallpaperUrl.value = wallpaper`, '')
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

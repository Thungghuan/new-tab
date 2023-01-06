import broswer from 'webextension-polyfill'

interface RespImage {
  url: string
}
interface WallPaperResp {
  images: RespImage[]
}

async function getDailyWallPaper() {
  const url =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'

  const resp = await fetch(url)
  const data = (await resp.json()) as WallPaperResp

  console.log('https://bing.com' + data.images[0].url)

  await broswer.storage.local.set({
    'daily-wp': data.images[0].url
  })

  return 'https://bing.com' + data.images[0].url
}

getDailyWallPaper()

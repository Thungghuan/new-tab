import browser from 'webextension-polyfill'

interface RespImage {
  url: string
  copyright?: string
}
interface WallPaperResp {
  images: RespImage[]
}

async function getDailyWallPaper() {
  const url =
    'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'

  const resp = await fetch(url)
  const data = (await resp.json()) as WallPaperResp

  console.log(data)

  await browser.storage.local.set({
    'daily-wp-url': data.images[0].url,
    'daily-wp-cr': data.images[0].copyright ?? ''
  })
}

// getDailyWallPaper()

browser.runtime.onInstalled.addListener(async () => {
  await browser.storage.local.clear()
})

browser.runtime.onMessage.addListener((message) => {
  console.log(message)
  if (message.msg === 'wp@update') {
    getDailyWallPaper()
  }
})

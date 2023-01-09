/**
 * The code in this file will be transformed
 * into the source codes during build process
 * to use browser extension apis in the new
 * tab page.
 */
//@ts-nocheck
import browser from 'webextension-polyfill'

browser.runtime.sendMessage({ msg: 'wp@update' })

browser.storage.local.get(['daily-wp-url', 'daily-wp-cr']).then((storage) => {
  wallpaperUrl.value = storage['daily-wp-url']
  wallpaperCR.value = storage['daily-wp-cr']
})
browser.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'daily-wp-url') wallpaperUrl.value = newValue
    if (key === 'daily-wp-cr') wallpaperCR.value = newValue
  }
})

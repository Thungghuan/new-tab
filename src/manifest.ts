import fs from 'fs-extra'
import type { Manifest } from 'webextension-polyfill'
import type PkgType from '../package.json'

export async function getManifest() {
  const pkg = (await fs.readJSON('package.json')) as typeof PkgType

  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    host_permissions: ['https://www.bing.com/HPImageArchive.aspx'],
    background: {
      service_worker: 'dist/background/index.js'
    },
    action: {
      default_icon: {
        16: 'assets/huan16.png',
        32: 'assets/huan32.png'
      }
    },
    permissions: ['storage'],
    icons: {
      16: 'assets/huan16.png',
      32: 'assets/huan32.png',
      48: 'assets/huan48.png',
      128: 'assets/huan128.png'
    },
    chrome_url_overrides: {
      newtab: 'dist/index.html'
    }
  }

  return manifest
}

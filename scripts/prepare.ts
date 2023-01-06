import fs from 'fs-extra'
import { getManifest } from '../src/manifest'

export async function writeManifest() {
  await fs.writeJSON('extension/manifest.json', await getManifest(), {
    spaces: 4
  })
}

writeManifest()

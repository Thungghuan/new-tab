import { Plugin } from 'vite'
import fs from 'fs-extra'

async function resolveCode() {
  const rawCode = (await fs.readFile('src/extapi/index.ts')).toString()
  const importCode = /^import.*/gm

  return {
    importCode: rawCode.match(importCode)?.join('\n'),
    sourceCode: rawCode.replace(importCode, '')
  }
}

async function transformWallPaper(src: string) {
  if (!/%%EXTAPI-TRANSFORM%%/.test(src)) return

  const { importCode, sourceCode } = await resolveCode()

  const transformed = src
    .replace(
      '<script setup lang="ts">',
      `<script setup lang="ts">
${importCode}
`
    )
    .replace('// %%EXTAPI-TRANSFORM%%', sourceCode)
    .replace(/wallpaperUrl.value\s+=\s+['"].*['"]/, '')
    .replace(/wallpaperCR.value\s+=\s+['"].*['"]/, '')

  return transformed
}

export default function ExtApi(): Plugin {
  return {
    name: 'extapi',
    enforce: 'pre',
    async transform(src, id) {
      if (/App\.vue/.test(id)) {
        return {
          code:
            process.env['NODE_ENV'] === 'development'
              ? src
              : await transformWallPaper(src)
        }
      }
    }
  }
}

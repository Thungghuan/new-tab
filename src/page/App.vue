<script setup lang="ts">
import { ref } from 'vue'

const wallpaperUrl = ref('')

// The next two lines will be transform during building process in plugins/extapi.ts
// The `wallpaperUrl` will be set to the real url storage by Chrome
const wallpaper =
  '/th?id=OHR.BlackFell_EN-CN9766859930_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
wallpaperUrl.value = wallpaper
</script>

<template>
  <div
    wfull
    hfull
    :style="{
      background: `url(https://bing.com${wallpaperUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }"
  ></div>
</template>

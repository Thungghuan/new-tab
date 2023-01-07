<script setup lang="ts">
import { ref } from 'vue'

const wallpaperUrl = ref('')
const wallpaperCR = ref('')

// The under lines will be transform during building process in plugins/extapi.ts
// The `wallpaperUrl` will be set to the real url storage by Chrome
wallpaperUrl.value =
  '/th?id=OHR.BlackFell_EN-CN9766859930_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
wallpaperCR.value = 'CopyRight Text'
</script>

<template>
  <div
    wfull
    hfull
    relative
    flex
    :style="{
      background: `url(https://bing.com${wallpaperUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }"
  >
    <div w="3/5" flex justify-center items-center>
      <Calendar />
    </div>
    <div w="2/5" flex="~ col">
      <div my4 h40 flex justify-center items-center>
        <Clock />
        <Date />
      </div>
    </div>
    <CopyRight :text="wallpaperCR" />
  </div>
</template>

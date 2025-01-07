<script setup lang="ts">
import { ref } from 'vue'

const wallpaperUrl = ref('')
const wallpaperCR = ref('')

// The under lines will be transform during building process in plugins/extapi.ts
// The `wallpaperUrl` will be set to the real url storage by Chrome
// %%EXTAPI-TRANSFORM%%
wallpaperUrl.value = '/th?id=OHR.HermelinSchnee_ZH-CN8839783506_1920x1080.jpg'
wallpaperCR.value =
  '白鼬 (Mustela erminea), 上巴伐利亚，德国 (© Konrad Wothe/Minden Pictures)'
</script>

<template>
  <div
    wfull
    hfull
    relative
    flex
    :style="{
      background: wallpaperUrl
        ? `url(https://bing.com${wallpaperUrl})`
        : 'white',
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
      <!--  <TodoList /> -->
    </div>
    <CopyRight :text="wallpaperCR" />
  </div>
</template>

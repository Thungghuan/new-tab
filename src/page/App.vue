<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

// The next line will be transform during building process
const wallpaper = '%%TOBETRANSFORM%%'

const wallpaperUrl = ref('')
wallpaperUrl.value = wallpaper
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>Background URL: {{ wallpaperUrl }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

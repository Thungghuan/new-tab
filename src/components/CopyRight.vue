<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div
    p3
    rounded-xl
    bg-zinc-800
    color-gray-200
    opacity-70
    absolute
    right-5
    bottom-10
    class="copyright-text"
  >
    {{ text }}
  </div>
</template>

<style scoped>
.copyright-text {
  font-size: 12px;
}
</style>
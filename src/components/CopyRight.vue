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
  >
    {{ text }}
  </div>
</template>

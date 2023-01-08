<script setup lang="ts">
import { computed, ref } from 'vue'

const now = new Date()

const hour = ref(now.getHours())
const minute = ref(now.getMinutes())
const second = ref(now.getSeconds())

const timeoutIdx = ref<ReturnType<typeof setTimeout>>()

function tick() {
  clearTimeout(timeoutIdx.value)

  const now = new Date()

  hour.value = now.getHours()
  minute.value = now.getMinutes()
  second.value = now.getSeconds()

  timeoutIdx.value = setTimeout(tick, 1000 - now.getMilliseconds())
}

const formatHour = computed(() => (hour.value < 10 ? '0' : '') + hour.value)
const formatMinute = computed(
  () => (minute.value < 10 ? '0' : '') + minute.value
)
const formatSecond = computed(
  () => (second.value < 10 ? '0' : '') + second.value
)

timeoutIdx.value = setTimeout(tick, 1000 - now.getMilliseconds())
</script>

<template>
  <div mx2 p3 w70 h25 inline-block rounded-xl bg-gray-50 opacity-80>
    <div
      wfull
      hfull
      font-bold
      flex
      justify-center
      items-center
      color-slate-600
      scale-350
      class="clock-text"
    >
      <div>{{ formatHour }}</div>
      <div>:</div>
      <div>{{ formatMinute }}</div>
      <div>:</div>
      <div>{{ formatSecond }}</div>
    </div>
  </div>
</template>

<style scoped>
.clock-text {
  font-size: 16px;
}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue'

const today = new Date()

const hour = ref(today.getHours())
const minute = ref(today.getMinutes())
const second = ref(today.getSeconds())

function tick() {
  let carryMinute = false,
    carryHour = false

  if (second.value < 59) second.value++
  else {
    second.value = 0
    carryMinute = true
  }

  if (carryMinute) {
    if (minute.value < 59) minute.value++
    else {
      minute.value = 0
      carryMinute = false
      carryHour = true
    }
  }

  if (carryHour) {
    if (hour.value < 23) hour.value++
    else {
      hour.value = 0
      carryHour = false
    }
  }
}

const formatHour = computed(() => (hour.value < 10 ? '0' : '') + hour.value)
const formatMinute = computed(
  () => (minute.value < 10 ? '0' : '') + minute.value
)
const formatSecond = computed(
  () => (second.value < 10 ? '0' : '') + second.value
)

setInterval(tick, 1000)
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

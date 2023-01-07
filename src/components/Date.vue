<script setup lang="ts">
import { computed, ref } from 'vue'

const today = new Date()
const date = ref(today.getDate())
const formatDate = computed(() => (date.value < 10 ? '0' : '') + date.value)

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const monthString = ref(months[today.getMonth()])

const dayInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dayString = ref(dayInWeek[today.getDay()])
</script>

<template>
  <div
    mx2
    p3
    w25
    h25
    inline-block
    rounded-xl
    bg-gray-50
    opacity-80
    flex="~ col"
    class="date-text"
  >
    <div color-sky-800 font-bold scale-120>{{ monthString }}</div>
    <div
      my2
      h="full"
      font-bold
      flex
      justify-center
      items-center
      color-slate-600
      scale-300
    >
      <div>{{ formatDate }}</div>
    </div>
    <div color-rose-600 font-bold scale-120>{{ dayString }}</div>
  </div>
</template>

<style scoped>
.date-text {
  font-size: 16px;
}
</style>

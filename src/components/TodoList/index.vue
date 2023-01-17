<script setup lang="ts">
import { ref } from 'vue'

const modes = ['todo', 'daily']
const modeName = ['代办', '日常']
const activeMode = ref('todo')

const tasks = ref(['Task 1', 'Task 2', 'Task 3', 'Task 4'])
</script>

<template>
  <div
    mxauto
    w="3/5"
    h60
    inline-block
    rounded-xl
    bg-gray-50
    opacity-70
    flex="~ col"
    justify-evenly
  >
    <div wfull h12 flex color-black justify-center items-center>
      <template v-for="(mode, i) in modes" :key="mode">
        <div
          w="2/5"
          cursor-pointer
          color-gray-700
          transition-colors
          @click="activeMode = mode"
          :style="{ color: activeMode === mode ? '#1f2937' : '#9ca3af' }"
        >
          {{ modeName[i] }}
        </div>
        <div mx2 w2px h6 bg-gray-300 v-if="i != modes.length - 1" />
      </template>
    </div>
    <div wfull h45 overflow-auto>
      <div flex="~ col" justify-evenly>
        <TodoItem v-for="(task, i) in tasks" :key="task" :text="task" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div mxauto px2 py4px wfull h14 box-border>
    <div hfull class="list-item-wrapper" flex items-center>
      <div
        px4
        wfull
        hfull
        b="1px solid gray-600"
        rounded-4
        transition-all
        color-black
        flex
        items-center
        select-none
        class="list-item-text"
      >
        {{ text }}
      </div>
      <div mx1 w15 hfull hidden class="list-item-btn">
        <div w12 h12 rounded-6 bg-blue cursor-pointer></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item-wrapper:hover > .list-item-text {
  /* width: 80%; */
  background-color: #9ca3af;
}

.list-item-wrapper:hover > .list-item-btn {
  display: block;
}
</style>

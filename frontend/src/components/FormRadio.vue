<template>
  <div class="inline-flex items-center">
    <label class="relative flex items-center p-3 rounded-full cursor-pointer">
      <input
        type="radio"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-600 dark:border-slate-300 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 hover:before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-red-400 checked:before:bg-red-300 hover:before:opacity-10"
        :value="props.value"
        :checked="props.isChecked"
        @change="emits('change')"
      />
      <span
        class="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </label>
    <label
      class="mt-px font-light text-slate-700 dark:text-slate-100 cursor-pointer select-none"
      @click="emits('change')"
    >
      {{ props.label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string
  label: string
  isChecked: boolean
}>()
const emits = defineEmits<{
  change: []
}>()
</script>

<style scoped></style>

<template>
  <div>
    Filter
    <div
      class="bg-slate-400/20 dark:bg-slate-600/20 pl-4 pr-3 py-2 w-fit flex gap-6 items-center rounded"
    >
      <FormRadio
        :value="selectedGender"
        @change="selectedGender = genders['male']"
        :label="genders['male']"
      />
      <FormRadio
        :value="selectedGender"
        @change="selectedGender = genders['female']"
        :label="genders['female']"
      />

      <button
        class="ml-12 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        GENERATE
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import FormRadio from "./FormRadio.vue"

const selectedGender = ref("female")
const genders = ref({ male: "Male", female: "Female" })
</script>

<style scoped></style>

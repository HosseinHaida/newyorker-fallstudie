<template>
  <div>
    <div
      class="bg-slate-400/20 dark:bg-slate-600/20 pl-2 md:pl-4 pr-3 py-2 w-full md:w-fit flex gap-2 md:gap-6 items-center rounded"
    >
      <FormRadio
        :value="selectedGender"
        @change="selectedGender = genders.MALE"
        :label="genders.MALE"
      />
      <FormRadio
        :value="selectedGender"
        @change="selectedGender = genders.FEMALE"
        :label="genders.FEMALE"
      />

      <button
        class="ml-auto md:ml-12 text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-300 w-32 md:w-56 transition-colors"
        @click="onFetchRandomOutfit"
        :disabled="fetchingOutfit"
      >
        <span v-if="fetchingOutfit">LOADING</span>
        <span v-else>GENERATE OUTFIT</span>
      </button>
    </div>
    <div class="text-red-600">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import FormRadio from "./FormRadio.vue"

import { useOutfitStore } from "@/store/outfit-store"
import { Gender } from "@/types/Gender"
const outfitStore = useOutfitStore()

const genders = ref<Gender>({ MALE: "male", FEMALE: "female" })
const selectedGender = ref("male")

const error = computed(() => outfitStore.fetchError)
const fetchingOutfit = computed(() => outfitStore.fetchingOutfit)

const onFetchRandomOutfit = async () => {
  await outfitStore.fetchRandomOutfit(selectedGender.value)
}
</script>

<style scoped></style>

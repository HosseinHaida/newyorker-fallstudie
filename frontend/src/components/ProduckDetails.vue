<template>
  <div
    class="w-full bg-slate-500 dark:bg-slate-200 rounded shadow-lg flex flex-col p-4"
  >
    <ul class="text-slate-100 dark:text-slate-700 flex flex-col">
      <li>
        <strong class="text-red-200 dark:text-red-400">Description: </strong>
        {{ description }}
      </li>
      <li>
        <strong class="text-red-200 dark:text-red-400">Brand: </strong>
        {{ product.brand }}
      </li>
      <li>
        <strong class="text-red-200 dark:text-red-400">Group: </strong
        >{{ product.maintenance_group }}
      </li>
      <li>
        <strong class="text-red-200 dark:text-red-400">Base color: </strong>
        {{ product.variants[0].basic_color }}
      </li>
      <li>
        <strong class="text-red-200 dark:text-red-400">Variants: </strong>
        {{ product.variants.length }}
      </li>
      <li class="self-end">
        <strong>
          {{ product.variants[0].current_price }}
          {{ product.variants[0].currency }}
        </strong>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/types/Product"
import { computed } from "vue"

const props = defineProps<{ product: Product }>()

const description = computed(() => {
  const englishDesc = props.product.descriptions.find(
    (desc) => desc.language === "EN"
  )
  return englishDesc?.description
})
</script>

<style scoped></style>

<template>
  <div
    class="w-full bg-slate-500 dark:bg-slate-200 rounded shadow-lg flex flex-col p-4"
  >
    <ProductDetailsSkeleton v-if="loading" />
    <ul
      v-else-if="props.product"
      class="text-slate-100 dark:text-slate-700 flex flex-col"
    >
      <li class="w-max-full truncate">
        <strong class="text-red-200 dark:text-red-400">Description: </strong>
        {{ props.description }}
      </li>
      <li class="w-max-full truncate">
        <strong class="text-red-200 dark:text-red-400">Brand: </strong>
        {{ props.product.brand }}
      </li>
      <li class="w-max-full truncate">
        <strong class="text-red-200 dark:text-red-400"> Group: </strong>
        {{ props.product.maintenance_group }}
      </li>
      <li class="w-max-full truncate">
        <strong class="text-red-200 dark:text-red-400">Base color: </strong>
        {{ props.product.variants[0].basic_color }}
      </li>
      <li class="w-max-full truncate">
        <strong class="text-red-200 dark:text-red-400">Variants: </strong>
        {{ props.product.variants.length }}
      </li>
      <li class="self-end">
        <strong>
          <span data-test="product-price">
            {{ props.product.variants[0].current_price }}
          </span>
          {{ props.product.variants[0].currency }}
        </strong>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProductDetailsSkeleton from "./ProductDetailsSkeleton.vue"
import { Product } from "@/types/Product"

const props = defineProps<{
  product: Product | undefined
  description: String
  loading: boolean
}>()
</script>

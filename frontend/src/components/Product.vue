<template>
  <div class="text-white w-full flex items-center justify-center">
    <div v-if="fetchingOutfit" class="text-slate-500 dark:text-slate-400">
      Loading
    </div>
    <div v-else-if="!product" class="text-slate-500 dark:text-slate-400">
      No product to show!
    </div>
    <div v-else-if="props.product && productImg" class="w-full flex flex-col">
      <img
        :src="`https://api.newyorker.de/csp/images/image/public/${productImg.key}?&frame=1_1`"
        alt="Product Image"
        class="p-4 w-full aspect-square"
      />
      <div class="w-full p-10">
        <ProductDetails :product="props.product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductDetails from "./ProduckDetails.vue"
import { useOutfitStore } from "@/store/outfit-store"
import { Product } from "@/types/Product"
import { computed } from "vue"

const outfitStore = useOutfitStore()

const props = defineProps<{ product: Product | undefined }>()

const fetchingOutfit = computed(() => outfitStore.fetchingOutfit)
const productImg = computed(() => {
  let cutoutImg
  if (props.product)
    cutoutImg = props.product.variants[0].images.find(
      (img) => img.type === "CUTOUT"
    )
  return cutoutImg
})
</script>

<style scoped></style>

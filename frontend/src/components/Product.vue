<template>
  <div
    class="text-white w-full flex items-center justify-center bg-slate-400/20 dark:bg-slate-600/20 h-[55svh] xl:h-[65svh] rounded relative"
  >
    <div
      v-if="fetchingOutfit"
      class="text-xl text-slate-500 dark:text-slate-400 motion-safe:animate-pulse pb-32"
    >
      Loading ...
    </div>
    <div
      v-else-if="!product"
      class="text-xl text-slate-500 dark:text-slate-400"
    >
      No product to show!
    </div>
    <div
      v-else-if="props.product && productImg"
      class="mx-auto w-full h-full flex flex-col"
      data-test="product-image-wrapper"
    >
      <UseImage
        :src="`${nYImagesEndpoint}/${productImg.key}?&frame=1_1`"
        alt="Product Image"
        class="pt-6 h-[40svh] max-h-[40svh] mx-auto transition-all aspect-auto duration-700 z-20"
      >
        <template #loading>
          <div
            class="h-full w-full flex items-center justify-center rounded bg-slate-400/20 dark:bg-slate-600/20 motion-safe:animate-pulse pb-32"
          >
            <span class="text-xl text-slate-500 dark:text-slate-400 z-0">
              {{ description }} ...
            </span>
          </div>
        </template>

        <template #error>
          <div class="w-full h-full flex justify-center pb-32">
            <span class="text-xl text-slate-500 dark:text-slate-400 z-0">
              Failed
            </span>
          </div>
        </template>
      </UseImage>
    </div>
    <div
      class="w-full p-10 md:p-2 lg:p-10 min-w-[80%] absolute -bottom-[24%] z-10"
      v-if="fetchingOutfit || props.product"
    >
      <ProductDetails
        :product="props.product"
        :description="description"
        :loading="fetchingOutfit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductDetails from "./ProductDetails.vue"
import { nYImagesEndpoint } from "@/store/constants"
import { useOutfitStore } from "@/store/outfit-store"
import { Product } from "@/types/Product"
import { UseImage } from "@vueuse/components"
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

const description = computed(() => {
  const englishDesc = props.product?.descriptions.find(
    (desc) => desc.language === "EN"
  )
  return englishDesc?.description || ""
})
</script>

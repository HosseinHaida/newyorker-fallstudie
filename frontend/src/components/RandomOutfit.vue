<template>
  <div>
    Random Outfit
    <div class="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-2 rounded">
      <Product :product="outfit.accessory" />
      <Product :product="outfit.innerWear" />
      <Product :product="outfit.outerWear" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Product from "@/components/Product.vue"
import { useOutfitStore } from "@/store/outfit-store"
import { computed } from "vue"

const outfitStore = useOutfitStore()
const outfit = computed(() => outfitStore.randomOutfit)
</script>

<style scoped></style>

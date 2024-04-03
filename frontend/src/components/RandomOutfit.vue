<template>
  <div>
    Random Outfit
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-2 bg-slate-400/20 dark:bg-slate-600/20 p-4 rounded"
    >
      <OutfitPiece :piece="outfit.accessory" />
      <OutfitPiece :piece="outfit.innerWear" />
      <OutfitPiece :piece="outfit.outerWear" />
    </div>
  </div>
</template>

<script setup lang="ts">
import OutfitPiece from "@/components/OutfitPiece.vue"
import { useOutfitStore } from "@/store/outfit-store"
import { computed } from "vue"

const outfitStore = useOutfitStore()
const outfit = computed(() => outfitStore.randomOutfit)
</script>

<style scoped></style>

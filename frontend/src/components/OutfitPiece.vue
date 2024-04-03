<template>
  <div class="text-white w-full bg-red-400/10 flex items-center justify-center">
    {{ piece.category }}
  </div>
</template>

<script setup lang="ts">
import { OutfitPieceI } from "@/types/OutfitPiece"
defineProps<{ piece: OutfitPieceI }>()
</script>

<style scoped></style>

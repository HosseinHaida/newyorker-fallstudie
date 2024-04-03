<template>
  <div class="p-4 flex flex-col gap-8">
    <OutfitOptions />
    <RandomOutfit />
  </div>
</template>

<script setup lang="ts">
import RandomOutfit from "@/components/RandomOutfit.vue"
import OutfitOptions from "@/components/OutfitOptions.vue"
</script>

<style scoped></style>

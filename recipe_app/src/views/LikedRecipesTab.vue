<script lang="ts">
import { store } from '@/data/store'
import { computed } from 'vue'

const likedRecipes = computed(() => store.recipes.filter((r) => r.liked === true))
function unlike(recipe) {
  recipe.liked = undefined // zet terug naar onbeoordeeld
}
</script>

<template>
  <h1></h1>
</template>

<style lang="css" scoped></style>

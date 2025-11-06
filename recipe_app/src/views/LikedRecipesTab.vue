<script lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import { store } from '@/data/store'
import type { Recipe } from '@/recipe'
import PrettyButton from '@/components/PrettyButton.vue'
import { ref } from 'vue'

const likedRecipes = ref(store.getLikedRecipes)
function unlike(recipe: Recipe) {
  recipe.liked = undefined
}
</script>

<template>
  <div class="liked-tab">
    <h2>Liked Recipes</h2>

    <ListDetail :items="[likedRecipes]">
      <template #list_item="{ item }">
        <span>{{ item.name }}</span>
        <span>{{ item.cookingTime }} min | {{ item.steps }} steps | {{ item.mealType }}</span>
        <img :src="item.image" class="recipe-image" />
      </template>

      <template #list_actions>
        <PrettyButton type="delete" @click="unlike">Remove</PrettyButton>
      </template>

      <template #details="{ item }">
        <h3>{{ item.name }}</h3>
        <img :src="item.image" alt="" style="max-width: 200px" />
        <p>{{ item.description }}</p>
      </template>
    </ListDetail>

    <div v-if="likedRecipes.length === 0">
      <p>You haven't liked any recipes yet!</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>

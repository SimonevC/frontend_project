<script setup lang="ts">
import PrettyButton from '@/components/PrettyButton.vue'
import { usePointer } from '@/components/Touch'
import { store } from '@/data/store'
import { ref } from 'vue'

export type Action = 'right' | 'left'

const currentRecipe = ref(store.getUndisplayedRecipes()[0])

function showNextRecipe() {
  const recipes = store.getUndisplayedRecipes()
  const randomIndex = Math.floor(Math.random() * recipes.length)
  currentRecipe.value = recipes[randomIndex]
}

function likeCurrent() {
  store.like(currentRecipe.value)
  store.seen(currentRecipe.value)
  showNextRecipe()
}

function dislikeCurrent() {
  store.dislike(currentRecipe.value)
  store.seen(currentRecipe.value)
  showNextRecipe()
}

usePointer((action) => {
  if (action === 'right') likeCurrent()
  if (action === 'left') dislikeCurrent()
})
</script>

<template>
  <div v-if="!currentRecipe">
    <h2>All recipes seen!</h2>
  </div>
  <div v-else :items="[currentRecipe]">
    <div class="recipe-card">
      <h3 class="recipe-title">{{ currentRecipe.name }}</h3>
      <p class="recipe-meta">
        Cooking time: {{ currentRecipe.cookingTime }} minutes, Steps: {{ currentRecipe.steps }},
        Meal type:
        {{ currentRecipe.mealType }}
      </p>
      <div class="rating">
        <template v-if="currentRecipe.rating >= 1">
          <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ active: star <= currentRecipe.rating }"
            >★</span
          >
        </template>
        <span v-else>Has no rating yet</span>
      </div>
      <p class="recipe-description">{{ currentRecipe.description }}</p>
      <img :src="currentRecipe.image" class="recipe-image" />
    </div>
    <div class="action-buttons">
      <PrettyButton type="dislike" :fab="true" @click="dislikeCurrent">Dislike</PrettyButton>
      <PrettyButton type="like" @click="likeCurrent">Like</PrettyButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
.discover-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
  gap: 1rem;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  width: 90%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  margin-top: 2rem;
}

.recipe-image {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.recipe-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.2rem 0;
  text-align: center;
  color: #111;
}

.recipe-meta {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}

.recipe-description {
  font-size: 1rem;
  line-height: 1.4;
  text-align: center;
  color: #333;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.rating {
  display: flex;
  gap: 2px;
  font-size: 1.2rem;
  color: #ddd;
}

.rating .star.active {
  color: gold;
}

h2 {
  margin: 2rem;
}
</style>

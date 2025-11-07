<script setup lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import PrettyButton from '@/components/PrettyButton.vue'
import { store } from '@/data/store'
import { ref } from 'vue'

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
</script>

<template>
  <ListDetail :items="[currentRecipe]">
    <div v-if="currentRecipe == null">
      <h2>All recipes seen!</h2>
    </div>
    <template #list_item="{ item }">
      <div class="recipe-card">
        <h3 class="recipe-title">{{ item.name }}</h3>
        <p class="recipe-meta">
          Cooking time: {{ item.cookingTime }} minutes, Steps: {{ item.steps }}, Meal type:
          {{ item.mealType }}
        </p>
        <div class="rating">
          <template v-if="item.rating >= 1">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ active: star <= item.rating }"
              >★</span
            >
          </template>
          <span v-else>Has no rating yet</span>
        </div>
        <p class="recipe-description">{{ item.description }}</p>
        <img :src="item.image" class="recipe-image" />
      </div>
    </template>

    <template #list_actions>
      <div class="action-buttons">
        <PrettyButton type="dislike" :fab="true" @click="dislikeCurrent">Dislike</PrettyButton>
        <PrettyButton type="like" @click="likeCurrent">Like</PrettyButton>
      </div>
    </template>

    <!-- <template v-if="currentRecipe" #details="{ items, index }">
      <template v-if="index != undefined">
        <label>Name<input v-model="items[index].name" /></label>
        <label>Cooking time<input v-model="items[index].cookingTime" /></label>
        <label>Steps<input v-model="items[index].steps" /></label>
        <label>Meal Type<input v-model="items[index].mealType" /></label>
        <label>Description<input v-model="items[index].description" /></label>
        <label>Image<img :src="items[index].image" /></label>
      </template>
    </template> -->
  </ListDetail>
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
</style>

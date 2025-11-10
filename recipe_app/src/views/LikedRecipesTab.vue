<script setup lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import PrettyButton from '@/components/PrettyButton.vue'
import RecipeView from './RecipeView.vue'
import { store } from '@/data/store'
import { computed } from 'vue'

const likedRecipes = computed(() => store.getLikedRecipes())
</script>

<template>
  <div class="liked-tab">
    <h2>Liked Recipes</h2>

    <div class="not-liked" v-if="likedRecipes.length == 0">
      <p>You haven't liked any recipes yet!</p>
    </div>
    <ListDetail v-else :items="likedRecipes">
      <template #list_item="{ item }">
        <div class="recipe-card">
          <h3 class="recipe-title">{{ item.name }}</h3>
          <p class="recipe-meta">
            Cooking time: {{ item.cookingTime }} minutes • Steps: {{ item.steps }}
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
            <span class="no-rating" v-else>Has no rating yet</span>
          </div>
          <img :src="item.image" class="recipe-image" />
          <PrettyButton type="recipe">View Recipe</PrettyButton>
        </div>
      </template>

      <template #details="{ items, index }">
        <RecipeView v-if="index != undefined" :item="items[index]"></RecipeView>
      </template>
    </ListDetail>
  </div>
</template>

<style lang="css" scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  background-color: #fff7f9;
  color: #333;
  border: 2px solid #ffb6c1;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  margin: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.liked-tab > h2 {
  margin-left: 3rem;
  margin-top: 1rem;
}

.not-liked > p {
  margin: 2rem;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.recipe-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.2rem 0;
  text-align: center;
  color: #111;
}

.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid #ffd6e0;
}

.rating {
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-left: 4rem;
}

.no-rating {
  font-size: 1rem;
}

.star {
  cursor: pointer;
  color: #ccc;
  transition: color 0.2s;
}

.star.active {
  color: gold;
}

h3 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #c2185b;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  letter-spacing: 0.3px;
  position: relative;
  padding-bottom: 0.25rem;
}

@media (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>

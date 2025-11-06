<script setup lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import PrettyButton from '@/components/PrettyButton.vue'
import { store } from '@/data/store'
import { computed } from 'vue'

const likedRecipes = computed(() => store.getLikedRecipes())
</script>

<template>
  <div class="liked-tab">
    <h2>Liked Recipes</h2>

    <div v-if="likedRecipes.length === 0">
      <p>You haven't liked any recipes yet!</p>
    </div>
    <ListDetail :items="likedRecipes">
      <template #list_item="{ item }">
        <div class="recipe-card">
          <h3 class="recipe-title">{{ item.name }}</h3>
          <p class="recipe-meta">
            Cooking time: {{ item.cookingTime }} minutes • Steps: {{ item.steps }}
          </p>
          <img :src="item.image" class="recipe-image" />
          <PrettyButton type="recipe">View Recipe</PrettyButton>
        </div>
      </template>

      <template #details="{ items, index }">
        <template v-if="index != undefined">
          <label>Name<input v-model="items[index].name" /></label>
          <label>Description<input v-model="items[index].description" /></label>
          <label>Image<img :src="items[index].image" /></label>
        </template>
      </template>
    </ListDetail>
  </div>
</template>

<style lang="css" scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  background-color: #fff7f9; /* lichte achtergrond, anders dan eerste pagina */
  color: #333;
  border: 2px solid #ffb6c1; /* opvallende maar zachte rand */
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); /* subtiele schaduw */
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

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* iets sterker bij hover */
}

.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid #ffd6e0; /* dun randje om de afbeelding */
}

.recipe-meta {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}

/* Titel */
.recipe-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.2rem 0;
  text-align: center;
  color: #111;
}

h3 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  text-align: center;
  color: #c2185b; /* iets anders dan op eerste pagina */
}

.meta {
  font-size: 0.95rem;
  color: #555;
  text-align: center;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  text-align: justify;
  margin-bottom: 1rem;
}

/* Grid layout via ListDetail wrapper */
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

@media (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
</style>

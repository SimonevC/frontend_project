<script setup lang="ts">
import { useShareRecipe } from '@/components/Share'
import { store } from '@/data/store'
import type { Recipe } from '@/recipe'
import { ref } from 'vue'
import PrettyButton from '@/components/PrettyButton.vue'

const { item, index } = defineProps(['item', 'index'])
const people = ref(item.basic_people)

function unlikeRecipe(recipe: Recipe) {
  store.dislike(recipe)
}

const { shareRecipe } = useShareRecipe()

function shareCurrentRecipe(item: Recipe) {
  const url = window.location.origin + '/liked/' + index
  shareRecipe(item.name, 'Look at this cool recipe I found on my recipe app!', url)
}

function setRating(recipe: Recipe, value: number) {
  recipe.rating = value
}

function addCurrentRecipeToShoppingList(recipe: Recipe) {
  const adjustedIngredients = recipe.ingredients.map((ing) => ({
    ...ing,
    quantity: ing.quantity * people.value,
  }))

  store.addToShoppingList(adjustedIngredients)
  alert('Added to shopping list!')
}
</script>

<template v-if="index != undefined">
  <h3>{{ item.name }}</h3>
  <p>Cooking Time: {{ item.cookingTime }} Minutes</p>
  <label><img :src="item.image" class="recipe-image" /></label>
  <h4>Ingredients:</h4>
  <div class="ingredients" v-for="ingredient in item.ingredients" v-bind:key="ingredient.name">
    <p>{{ ingredient.quantity * people }} {{ ingredient.unit }} {{ ingredient.name }}</p>
  </div>
  <h4>Basic recipe is for {{ item.basic_people }} people</h4>
  <h4>For how many people do you want to make your recipe?</h4>
  <input
    id="people"
    type="number"
    v-model.number="people"
    min="1"
    style="display: block; margin-bottom: 0.5rem"
  />
  <PrettyButton type="shopping" :small="true" @click="addCurrentRecipeToShoppingList(item)">
    Add to Shopping List
  </PrettyButton>
  <h4>Instructions:</h4>
  <li v-for="(step, stepIndex) in item.instructions" :key="stepIndex">
    {{ step }}
  </li>
  <h4>Rate Recipe</h4>
  <div class="rating">
    <span
      v-for="star in 5"
      :key="star"
      class="star"
      :class="{ active: star <= item.rating }"
      @click="setRating(item, star)"
    >
      ★
    </span>
  </div>
  <PrettyButton type="share" :small="true" @click="shareCurrentRecipe(item)"
    >Share Recipe</PrettyButton
  >
  <PrettyButton type="unlike" :small="true" :fab="true" @click="() => unlikeRecipe(item)"
    >Unlike Recipe</PrettyButton
  >
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

.recipe-meta {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
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

.ingredients {
  margin-bottom: 1rem;
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

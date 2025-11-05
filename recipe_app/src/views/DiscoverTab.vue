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
  showNextRecipe()
}

function dislikeCurrent() {
  store.dislike(currentRecipe.value)
  showNextRecipe()
}
</script>

<template>
  <ListDetail :items="store.recipes">
    <template #list_item="{ item }">
      <span>{{ item.name }}</span>
      <span>{{ item.cookingTime }}, {{ item.steps }} {{ item.mealType }}</span>
      <span>{{ item.description }}</span>
      <span>{{ item.image }}</span>
    </template>

    <template #list_actions>
      <PrettyButton type="like" @click="likeCurrent">Like</PrettyButton>
      <PrettyButton type="dislike" @click="dislikeCurrent">Dislike</PrettyButton>
    </template>

    <template v-if="currentRecipe" #details="{ items, index }">
      <template v-if="index != undefined">
        <label>Name<input v-model="items[index].name" /></label>
        <label>Cooking time<input v-model="items[index].cookingTime" /></label>
        <label>Steps<input v-model="items[index].steps" /></label>
        <label>Meal Type<input v-model="items[index].mealType" /></label>
        <label>Description<input v-model="items[index].description" /></label>
        <label>Image<input v-model="items[index].image" /></label>
      </template>
    </template>
  </ListDetail>
</template>

<style lang="css" scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.2rem;
}
</style>

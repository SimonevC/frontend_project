<script setup lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import { store } from '@/data/store'
import PrettyButton from '@/components/PrettyButton.vue'
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
      <PrettyButton type="like">Like</PrettyButton>
      <PrettyButton type="dislike">Dislike</PrettyButton>
    </template>

    <template #details="{ items, index }">
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

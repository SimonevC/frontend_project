<script setup lang="ts">
import ListDetail from '@/components/ListDetail.vue'
import { store } from '@/data/store'
import PrettyButton from '@/components/PrettyButton.vue'
</script>

<template>
  <ListDetail :items="store.recipes">
    <template #list_item="{ name, cookingTime, steps, mealType, description, image }">
      <span>{{ name }}</span>
      <span>{{ cookingTime }}, {{ steps }} {{ mealType }}</span>
      <span>{{ description }}</span>
      <span>{{ image }}</span>
    </template>

    <template #list_actions>
      <PrettyButton type="like">Like</PrettyButton>
      <PrettyButton type="dislike">Dislike</PrettyButton>
    </template>

    <template #details="{ items, index }">
      <template v-if="index != undefined"> </template>
    </template>
  </ListDetail>
</template>

<style lang="css" scoped></style>

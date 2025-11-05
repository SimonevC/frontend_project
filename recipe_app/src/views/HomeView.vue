<script setup lang="ts">
import { ref } from 'vue'
import PrettyBackground from '@/components/PrettyBackground.vue'
import HeaderTabs from '@/components/HeaderTabs.vue'
import DiscoverTab from './DiscoverTab.vue'
import LikedRecipesTab from './LikedRecipesTab.vue'
import ShoppingListTab from './ShoppingListTab.vue'

const offline = ref(false)

window.addEventListener('offline', () => {
  offline.value = true
})

window.addEventListener('online', () => {
  offline.value = false
})
</script>

<template>
  <main>
    <PrettyBackground></PrettyBackground>
    <HeaderTabs>
      <template #discover><DiscoverTab /></template>
      <template #liked><LikedRecipesTab /></template>
      <template #shopping><ShoppingListTab /></template>
    </HeaderTabs>
  </main>
</template>

<style lang="css" scoped></style>

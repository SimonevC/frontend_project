<script setup lang="ts">
import HomeView from './views/HomeView.vue'

function checkOnline() {
  if (navigator.onLine) {
    return 'Recipe app is Online'
  }
  return 'Recipe app is Offline'
}
</script>

<template>
  <HomeView></HomeView>
  <h5>{{ checkOnline() }}</h5>
</template>

<style scoped>
h5 {
  margin: 2rem;
}
</style>

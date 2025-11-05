<script setup lang="ts">
import { ref } from 'vue'
import PrettyBackground from '@/components/PrettyBackground.vue'

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
  </main>
</template>

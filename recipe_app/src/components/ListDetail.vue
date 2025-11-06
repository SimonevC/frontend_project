<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
const { items } = defineProps(['items'])

const currentItemIndex = ref<number | undefined>()

function setCurrentItem(index: number) {
  currentItemIndex.value = index
  router.push({ path: '/liked/' + index })
}
</script>

<template>
  <div class="container" :class="{ selected: currentItemIndex != undefined }">
    <div class="list">
      <div
        class="list_item"
        @click="() => setCurrentItem(index)"
        v-bind:key="item"
        v-for="(item, index) in items"
      >
        <slot name="list_item" :item="item" :index="index"></slot>
      </div>
      <slot name="list_actions" />
    </div>
    <div class="details">
      <slot name="details" :items="items" :index="currentItemIndex"></slot>
    </div>
    <slot name="detail_actions" />
  </div>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.list {
  margin-right: 1rem;
}

.list_item {
  cursor: pointer;
  padding: 2rem;
  margin-bottom: 1rem;
}

.active {
  font-weight: bold;
}

.back {
  display: none;
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }

  .details {
    display: none;
  }

  .selected .details {
    display: block;
  }

  .back {
    display: block;
  }

  .selected .list {
    display: none;
  }
}
</style>

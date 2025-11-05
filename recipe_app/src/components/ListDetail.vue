<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { items } = defineProps(['items'])

const currentItemIndex = ref<number | undefined>()
const router = useRouter()

function setCurrentItem(index: number) {
  currentItemIndex.value = index
  router.push({ path: '/manage/' + index })
}

function backToList() {
  currentItemIndex.value = undefined
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
        <slot name="list_item" :item="item"></slot>
      </div>
      <slot name="list_actions" />
    </div>
    <div class="details">
      <button class="back" @click="backToList">← Back</button>
      <slot name="details" :items="items" :index="currentItemIndex"></slot>
    </div>
    <!-- <slot name="detail_actions" /> -->
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
  border: 1px solid white;
  padding: 2rem;
  margin-bottom: 1rem;
}

.active {
  font-weight: bold;
}

.back {
  display: none;
}
</style>

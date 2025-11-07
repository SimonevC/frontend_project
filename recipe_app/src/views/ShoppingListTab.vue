<script setup lang="ts">
import { store } from '@/data/store'
import { computed } from 'vue'
import PrettyButton from '@/components/PrettyButton.vue'

const shoppingList = computed(() => store.getShoppingList())

function clearList() {
  store.clearShoppingList()
}
</script>

<template>
  <div class="shopping-list">
    <h2>Shopping List</h2>

    <div class="empty-message" v-if="shoppingList.length === 0">Your shopping list is empty!</div>

    <ul v-else class="list-container">
      <li v-for="(item, index) in shoppingList" :key="index">
        {{ item.quantity }} {{ item.unit }} {{ item.name }}
      </li>
    </ul>
    <PrettyButton
      v-if="shoppingList.length > 0"
      type="delete"
      class="clear-button"
      @click="clearList"
    >
      Clear Shopping List
    </PrettyButton>
  </div>
</template>

<style lang="css" scoped>
h2 {
  margin-bottom: 1rem;
}

.shopping-list {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.empty-message {
  font-style: italic;
  color: #888;
  text-align: center;
}

.list-container {
  display: grid;
  gap: 1rem;
}

.list-item {
  padding: 1rem;
  background-color: #ffe6f0; /* zacht roze */
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clear-button {
  justify-self: center;
  margin-top: 1rem;
  background-color: #ff5a87;
  color: white;
  padding: 0.8rem 2rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
}

.clear-button:hover {
  background-color: #ff3670;
}

@media (max-width: 600px) {
  .list-container {
    display: flex;
    flex-direction: column;
  }
}
</style>

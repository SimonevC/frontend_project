import { reactive } from 'vue'
import { watchEffect } from 'vue'
import { recipeList } from './data'

const recipeStorage = localStorage.getItem('recipes')
let loadFromStorage = recipeList
if (recipeStorage) {
  loadFromStorage = JSON.parse(recipeStorage)
}

export const store = reactive({
  recipes: loadFromStorage,
})

watchEffect(() => {
  localStorage.setItem('recipes', JSON.stringify(store.recipes))
})

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
  like(recipe) {
    recipe.liked = true
  },

  dislike(recipe) {
    recipe.liked = false
  },

  // Filter recepten die nog niet beoordeeld zijn
  getUndisplayedRecipes() {
    return store.recipes.filter((r) => r.liked === undefined)
  },

  // Alle gelikede recepten
  getLikedRecipes() {
    return store.recipes.filter((r) => r.liked === true)
  },
})

watchEffect(() => {
  localStorage.setItem('recipes', JSON.stringify(store.recipes))
})

import { reactive } from 'vue'
import { watchEffect } from 'vue'
import { recipeList } from './data'
import type { Recipe } from '@/recipe'

const recipeStorage = localStorage.getItem('recipes')
let loadFromStorage = recipeList

if (recipeStorage) {
  loadFromStorage = JSON.parse(recipeStorage)
}

const reactiveRecipes = loadFromStorage.map((r) => reactive(r))

export const store = reactive({
  recipes: reactiveRecipes,
  like(recipe: Recipe) {
    recipe.liked = true
  },

  dislike(recipe: Recipe) {
    recipe.liked = false
  },

  getUndisplayedRecipes() {
    return store.recipes.filter((r) => r.liked === undefined)
  },

  getLikedRecipes() {
    return store.recipes.filter((r) => r.liked === true)
  },
})

watchEffect(() => {
  localStorage.setItem('recipes', JSON.stringify(store.recipes))
})

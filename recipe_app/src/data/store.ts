import { reactive } from 'vue'
import { watchEffect } from 'vue'
import { recipeList } from './data'
import type { Recipe } from '@/recipe'

const recipes = localStorage.getItem('recipes')
let loadFromStorage = recipeList

if (recipes) {
  loadFromStorage = JSON.parse(recipes)
  console.log({ loadFromStorage })
}

// const reactiveRecipes = loadFromStorage.map((r) => reactive(r))

export const store = reactive({
  recipes: recipes ? JSON.parse(recipes) : recipeList,
  like(recipe: Recipe) {
    recipe.liked = true
  },

  dislike(recipe: Recipe) {
    recipe.liked = false
  },

  seen(recipe: Recipe) {
    recipe.seen = true
  },

  getUndisplayedRecipes() {
    return store.recipes.filter((r) => r.seen === undefined)
  },

  getLikedRecipes() {
    return store.recipes.filter((r) => r.liked === true)
  },
})

watchEffect(() => {
  localStorage.setItem('recipes', JSON.stringify(store.recipes))
})

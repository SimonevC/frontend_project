import { reactive } from 'vue'
import { watchEffect } from 'vue'
import { recipeList } from './data'
import type { Ingredient, Recipe } from '@/recipe'

const recipes = localStorage.getItem('recipes')
const shoppingStorage = localStorage.getItem('shoppingList')
const loadFromStorage: Recipe[] = recipes ? (JSON.parse(recipes) as Recipe[]) : recipeList
const loadShoppingList: Ingredient[] = shoppingStorage ? JSON.parse(shoppingStorage) : []
const reactiveRecipes = loadFromStorage.map((r) => reactive(r))

// if (recipes) {
//   loadFromStorage = JSON.parse(recipes)
// }

export const store = reactive({
  recipes: reactiveRecipes,
  shoppingList: reactive(loadShoppingList) as Ingredient[],
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
    return store.recipes.filter((r: Recipe) => r.seen === false)
  },

  getLikedRecipes() {
    return store.recipes.filter((r: Recipe) => r.liked === true)
  },

  addToShoppingList(items: Ingredient[]) {
    store.shoppingList.push(...items)
  },

  getShoppingList() {
    return store.shoppingList
  },

  clearShoppingList() {
    store.shoppingList = []
  },
})

watchEffect(() => {
  localStorage.setItem('recipes', JSON.stringify(store.recipes))
  localStorage.setItem('shoppingList', JSON.stringify(store.shoppingList))
})

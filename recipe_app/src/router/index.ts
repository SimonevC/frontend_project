import ShoppingListTab from '@/views/ShoppingListTab.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: (to) => {
        // the function receives the target route as the argument
        // we return a redirect path/location here.
        return { path: '/discover', query: { q: to.params.searchText } }
      },
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('@/views/DiscoverTab.vue'),
    },
    {
      path: '/liked',
      name: 'liked',
      component: () => import('@/views/LikedRecipesTab.vue'),
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingListTab,
    },
    {
      path: '/liked/:id',
      name: 'likedRecipe',
      component: () => import('@/views/LikedRecipesTab.vue'),
    },
  ],
})

export default router

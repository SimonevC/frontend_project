import DiscoverTab from '@/views/DiscoverTab.vue'
import LikedRecipesTab from '@/views/LikedRecipesTab.vue'
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
      component: DiscoverTab,
    },
    {
      path: '/liked',
      name: 'liked',
      component: LikedRecipesTab,
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingListTab,
    },
  ],
})

export default router

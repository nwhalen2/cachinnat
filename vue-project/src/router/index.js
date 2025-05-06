import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '../views/SiteView.vue'
import ShowsView from '../views/ShowsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SiteView,
    },
    {
      path: '/shows',
      name: 'shows',
      component: ShowsView,
    },
  ],
})

export default router

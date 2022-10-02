import { createRouter, createWebHistory } from 'vue-router'
import PapillonHome from '../views/PapillonHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PapillonHome
    },
    {
      path: '/edt',
      name: 'edt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EdtView.vue')
    }
  ]
})

export default router

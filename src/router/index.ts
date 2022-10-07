import { createRouter, createWebHistory } from 'vue-router'
import PapillonHome from '../views/PapillonHome.vue'

let authStatus = localStorage.getItem('token') !== null || false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/PapillonLogin.vue')
    },
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

router.beforeEach(async(to,from,next)=>{
  if(!authStatus && to.path !== '/login') {
    next({path:'/login'})
  }
  else {
    next()
  }
})

export default router

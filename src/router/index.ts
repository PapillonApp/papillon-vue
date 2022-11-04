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
      component: () => import('../views/EdtView.vue')
    },
    {
      path: '/homework',
      name: 'homework',
      component: () => import('../views/HomeworkView.vue')
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

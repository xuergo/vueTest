import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ,{
    path: '/live',
    name: 'live',
    component: () => import('../views/live.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

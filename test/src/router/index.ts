import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Home } from '../views/Home'
import { About } from '../views/About'
import { Convert } from 'vue-object'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Convert(Home)
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Convert(About)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

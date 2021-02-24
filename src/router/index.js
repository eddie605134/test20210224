import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rwd from '../views/Rwd.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rwd',
    name: 'rwd',
    component: ()=> import('../views/Rwd.vue')
  },
  {
    path: '/vue.js',
    name: 'vue.js',
    component: ()=> import('../views/Vue.js.vue')
  },
  {
    path: '/react',
    name: 'react',
    component: ()=> import('../views/React.vue')
  },
  {
    path: '/html5',
    name: 'html5',
    component: ()=> import('../views/Html5.vue')
  },
  {
    path: '/node.js',
    name: 'node.js',
    component: ()=> import('../views/Node.js.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/index.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/product/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('@/pages/HomePage.vue')
  // },
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/category/:slug',
    component: () => import('@/pages/CategoryPage.vue')
  },
  {
    path: '/product',
    component: () => import('@/pages/ProductPage.vue')
  },
  {
    path: '/cart',
    component: () => import('@/pages/CartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

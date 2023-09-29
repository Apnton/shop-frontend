import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    path: '/product/:slug',
    component: () => import('@/pages/SingleProduct.vue')
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

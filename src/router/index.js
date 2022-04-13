import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    props: true,
    component: () => import('../views/Pedidos.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

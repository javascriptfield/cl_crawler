import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/list.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/detail.vue')
    }
  ]
})

export default router
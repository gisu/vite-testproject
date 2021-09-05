import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import Launches from '@/pages/Launches.vue'
import LaunchDetails from '@/pages/LaunchDetails.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template'
    }
  },
  {
    path: '/launches/',
    component: Launches,
    meta: {
      title: 'Launches'
    }
  },
  {
    path: '/launches/:id',
    component: LaunchDetails,
    meta: {
      title: 'Launch Details'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

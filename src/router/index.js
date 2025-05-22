import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '../pages/PageIndex.vue'
import Portafolio from '../pages/Portafolio.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'

const routes = [
  { path: '/', component: PageIndex },
  { path: '/portafolio', component: Portafolio },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory('/causaviva/'), // o solo '/' si tu app está en la raíz
  routes,
})

export default router
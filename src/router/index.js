import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/product_list',
    name: 'product_list',
    component: () => import( '../views/product_list.vue')
  },
  {
    path: '/gold',
    name: 'gold',
    component: () => import( '../views/gold.vue')
  },
  {
    path: '/show_customer',
    name: 'show_customer',
    component: () => import( '../views/Show_customer.vue')
  },
  {
    path: '/show_employee',
    name: 'show_employee',
    component: () => import( '../views/Show_employee.vue')
  },
  {
    path: '/show_register',
    name: 'show_register',
    component: () => import('../views/Register.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
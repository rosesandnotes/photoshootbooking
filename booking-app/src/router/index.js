import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import('../views/BookingsView.vue')
  },
  {
    path: '/view/:id',
    name: 'view ',
    component: () => import('../views/BookingDetailsView.vue'),
    props: true
  },
  {
    path: '/add',
    name: 'add ',
    component: () => import('../views/AddBookingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

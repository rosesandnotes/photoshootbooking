import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import {getAuth, onAuthStateChanged} from 'firebase/auth'

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
    component: () => import('../views/BookingsView.vue'),
    meta: {
      requiresAuth: true
    }
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
/* 
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeEventListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeEventListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  const requiresAUth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAUth){
    if(await getCurrentUser){
      next();
    }
  }
})
 */
export default router

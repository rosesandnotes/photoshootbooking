import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

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
    path: '/view/:id',
    name: 'view ',
    component: () => import('../views/BookingDetailsView.vue'),
    props: true
  },
  {
    path: '/edit/:id',
    name: 'edit ',
    component: () => import('../views/BookingItemEditView.vue'),
    props: true
  },
  {
    path: '/add',
    name: 'add ',
    component: () => import('../views/AddBookingView.vue')
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
    path: '/bookings/:status',
    name: 'status',
    component: () => import('../views/BookingStatusView.vue'),
    meta: {
      requiresAuth: true 
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeEventListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeEventListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  const requiresAUth = to.matched.some((record) => record.meta.requiresAuth);

  console.log("requiresAUth: ", requiresAUth);

  if(requiresAUth){
    const user = await getCurrentUser();
    if(!user){
      next({
        name: 'login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
})
 
export default router

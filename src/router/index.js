import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import GuestBook from '../views/GuestBook.vue'

const routes = [
  { 
    name: 'home',
    path: '/', 
    component: Login 
  },
  { 
    name: 'login',
    path: '/login', 
    component: Login 
  },
  {
    name: 'register',
    path: '/register', 
    component: Register 
  },
  { 
    name: 'profile',
    path: '/profile/:firstname?/:lastname?/:email?/:date_of_birth?', 
    component: Profile,
  },
  { 
    name: 'guestbook',
    path: '/guestbook/:id?', 
    component: GuestBook,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
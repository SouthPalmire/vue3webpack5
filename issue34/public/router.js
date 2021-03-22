import VueRouter from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Profile from './Profile.vue'


export default new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile }
  ],
  mode: 'history'
})
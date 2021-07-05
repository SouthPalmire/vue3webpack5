import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Login from '../views/Login.vue';

const Register = () => import('../views/Register.vue');
const Profile = () => import('../views/Profile.vue');
const GuestBook = () => import('../views/GuestBook.vue');

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    alias: '/',
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'profile',
    path: '/:lastname?/profile',
    component: Profile,
  },
  {
    name: 'guestbook',
    path: '/guestbook/:id?',
    component: GuestBook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  store.commit('setLastRoute', from.name);
});

router.beforeEach((to, from, next) => {
  if (to.name === 'register') next();
  else if (to.name !== 'login' && !store.state.isAuth) next({ name: 'login' });
  else next();
});

export default router;

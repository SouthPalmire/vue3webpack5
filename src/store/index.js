import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    isAuth: false,
    lastRoute: '',
  }),
  getters: {

  },
  mutations: {
    setAuth(state) {
      state.isAuth = true;
    },
    setLastRoute(state, route) {
      state.lastRoute = route;
    },
  },
  actions: {

  },
  modules: {

  },
});

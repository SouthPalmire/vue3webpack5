import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueMoment)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

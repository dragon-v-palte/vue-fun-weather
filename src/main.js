import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = []

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

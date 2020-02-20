import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home'
import WeatherApp from './pages/WeatherApp'
import CurrentWeather from './pages/CurrentWeather'
import DailyWeather from './pages/DailyWeather'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/weather/', component: WeatherApp,
    children: [
      { path: 'current', component: CurrentWeather },
      { path: 'daily', component: DailyWeather }
    ] }
]

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

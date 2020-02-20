<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home'
import WeatherApp from './pages/WeatherApp'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
     container: "body",
     duration: 1500,
     easing: "ease-in-out",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

export default {
  name: 'app',
  components: {
    Home,
    WeatherApp
  }
}
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
body {
  font-family: "Ubuntu", sans-serif;
  /* background: url('./assets/img/weather-app.jpg') top center no-repeat;
  background-size: 96%;
  opacity: .5; */
}

a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
    color: inherit;
  }
}
</style>

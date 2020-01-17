<template>
  <div id="app">
      <Home/>
  </div>
</template>

<script>
import Home from './pages/Home'
export default {
  name: 'app',
  components: {
    Home
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

<template lang="pug">
  div.header
    div.container
      div.header__content
        nav.navbar.navbar-expand-lg
          div.header__logo.navbar-brand
            span Fun Weather.
          button.navbar-toggler(
            type="button"
            data-toggle="collapse"
            data-target="#menu-collapse"
            aria-controls="menu-collapse"
            aria-expanded="true")
            i.fa.fa-bars
        div.collapse.navbar-collapse#menu-collapse
          ul.header__menu.menu.navbar.nav
            li.menu-item
              a(href="#home") Home
            li.menu-item
              a(href="#features") Features
            li.menu-item
              a(href="#reviews") Reviews
            li.menu-item
              a(href="#download") Download
          div.header__social
            a(href="#") 
              i.fa.fa-facebook            
            a(href="#")
              i.fa.fa-instagram
            a(href="#")
              i.fa.fa-twitter
  //<div class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <span>Fun Weather.</span>
        </div>
        <ul class="header__menu menu">
          <a href="#"><li class="menu-item">Home</li></a>
          <a href="#"><li class="menu-item">Features</li></a>
          <a href="#"><li class="menu-item">Reviews</li></a>
          <a href="#"><li class="menu-item">Download</li></a>
        </ul>
        <div class="header__social">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jquery from 'jquery'
/* import Vue from 'vue'
Vue.use(Jquery) */
export default {
  components: {
    Jquery
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #648cff;
  color: #ffffff;
  font-weight: bold;
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 43px 0 50px;
    height: 60px;
  }
  &__logo {
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }
  &__social {
    display: flex;
    flex-direction: row;
    align-items: center;
    i {
      font-size: 28px;
      margin-left: 35px;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
    }
  }
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  &-item {
    list-style: none;
    margin: 0 40px;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }
}

</style>
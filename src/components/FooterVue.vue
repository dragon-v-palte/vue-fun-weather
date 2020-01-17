<template lang="pug">
    div.footer
        div.container
            div.footer__top
                div.footer__logo
                    span.footer__logo--red Fun 
                    span.footer__logo--blue Weather.
                ul.footer__menu.menu
                    li.menu-item
                        a(href="#home") Home
                    li.menu-item
                        a(href="#features") Features
                    li.menu-item
                        a(href="#reviews") Reviews
                    li.menu-item
                        a(href="#download") Download
                div.footer__social
                    a(href="#") 
                        i.fa.fa-facebook            
                    a(href="#")
                        i.fa.fa-instagram
                    a(href="#")
                        i.fa.fa-twitter
            div.footer__bottom
                p.footer__copyright © 2016 All rights reserved. Weather App Theme by Gravpix
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer {
  background: #353854;
  color: #ffffff;
  font-weight: bold;
  z-index: 3;
  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    height: 60px;
    @media (max-width: 991px) {
        flex-direction: column;
        height: auto;
        padding-bottom: 0;
    }
  }
  &__logo {
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    &--red {
        color: #fc6a42;
    }
    &--blue {
        color: #648cff;
    }
    &:hover {
      color: #ccc;
    }
    @media (max-width: 991px) {
        margin-bottom: 50px;
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
        @media (max-width: 991px) {
            margin: 50px 20px;
        }
    }
  }
  &__bottom {
      border-top: 1px solid #565b87;
      padding: 55px 0 85px;
  }
  &__copyright {
      color: #565b87;
      text-align: right;
      @media (max-width: 991px) {
        text-align: center;
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
<template lang="pug">
    div.footer
        div.container
            div.footer__top
                div.footer__logo(v-scroll-to="'#home'")
                    span.footer__logo--red Fun 
                    span.footer__logo--blue Weather.
                ul.footer__menu.menu
                    li.menu-item
                        a(href="#home" v-scroll-to="'#home'") Home
                    li.menu-item
                        a(href="#features" v-scroll-to="'#features'") Features
                    li.menu-item
                        a(href="#reviews" v-scroll-to="'#reviews'") Reviews
                    li.menu-item
                        a(href="#download" v-scroll-to="'#download'") Download
                div.footer__social
                    a(href="#" target="_blank") 
                        i.fa.fa-facebook            
                    a(href="#" target="_blank")
                        i.fa.fa-instagram
                    a(href="#" target="_blank")
                        i.fa.fa-twitter
            div.footer__bottom
                p.footer__copyright © 2016 All rights reserved. Weather App Theme by Gravpix                
        transition(name="button-up")
            a(href="#home" v-scroll-to="'#home'").button-up(v-if="offset")
                i.fa.fa-angle-up
</template>

<script>
export default {
    data: function() {
        return {
            offset: false
        }
    },
  created() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
        this.offset = (window.scrollY > 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #353854;
  color: #ffffff;
  font-weight: bold;
  &__top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 104px 0;
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
      opacity: .7;
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
      padding: 43px 0 85px;
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
  @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  &-item {
    list-style: none;
    margin: 0 40px;
    cursor: pointer;
    @media (max-width: 768px)
    {
        margin: 10px 0;
    }
    &:hover {
      color: #ccc;
    }
  }
}
.button-up {
  position: fixed;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  right: 10%;
  width: 50px;
  height: 35px;
  background: #454545;
  font-size: 35px;
  text-align: center;
  line-height: 35px;
  color: #ccc;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
.button-up-enter-active, .button-up-leave-active {
    transition: .5s;
}
.button-up-enter, .button-up-leave-to {
    opacity: 0
}
</style>
<template lang="pug">
  div.header#home
    div.container
      div.header__content          
          div.header__logo
            span Fun Weather.
          button.header__btn-collapse(v-on:click="HeaderMenuVisibleByButton = !HeaderMenuVisibleByButton")
            i.fa.fa-bars
          transition(name="menu-collapse")
            div.header__collapse(v-show="HeaderMenuVisible")
              ul.header__menu.menu
                li.menu-item
                  a(href="#home" v-scroll-to="'#home'") Home
                li.menu-item
                  a(href="#features" v-scroll-to="'#features'") Features
                li.menu-item
                  a(href="#reviews" v-scroll-to="'#reviews'") Reviews
                li.menu-item
                  a(href="#download" v-scroll-to="'#download'") Download
              div.header__social
                a(href="#" target="_blank") 
                  i.fa.fa-facebook            
                a(href="#" target="_blank")
                  i.fa.fa-instagram
                a(href="#" target="_blank")
                  i.fa.fa-twitter
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      window: {
        width: 0
      },
      HeaderMenuVisibleByButton: false,
      HeaderMenuVisibleByWindow: true
    }
  },
  computed: {
      HeaderMenuVisible: function() {
        if (this.HeaderMenuVisibleByWindow)
          return this.HeaderMenuVisibleByWindow
        else
          return this.HeaderMenuVisibleByButton
      }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.HeaderMenuVisibleByWindow = (window.innerWidth > 768)
    }
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
    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      height: auto;
      padding-bottom: 0;
    }
  }
  &__logo {
    text-transform: uppercase;
    font-size: 24px;
    cursor: pointer;
    width: 80%;
    &:hover {
      color: #ccc;
    }
  }
  &__collapse {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    @media(min-width: 768px) {
      flex-direction: row;
    }
  }
  &__btn-collapse {
    display: block;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 6px;
    color: #ffffff;
    padding: 5px 10px;
    outline: none;
    &:hover {
      color: #ccc;
      border-color: #ccc;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__social {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    i {
      font-size: 28px;
      margin-left: 35px;
      cursor: pointer;
      &:hover {
        color: #ccc;
      }
      @media (max-width: 768px) {
        margin: 20px;
      } 
      @media (max-width: 992px) {
        margin-left: 25px;
      } 
    }
    &--collapse {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    @media (max-width: 768px) {
      margin: 10px 0;
    }
    @media (max-width: 992px) {
      margin: 10px 15px;
    }
  }
}
  .header__menu {
    @media (max-width: 768px){
      &--collapse {
        display: none;
      }
    }
  }

.menu-collapse-enter-active, .menu-collapse-leave-active {
  transition: .5s;
  transform-origin: 0 0;
}
.menu-collapse-enter, .menu-collapse-leave-to  {
  opacity: 0;
  transform: scaleY(0);
  margin-bottom: -244px;
}


</style>
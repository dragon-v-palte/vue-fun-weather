<template>
    <div class="weather">
        <div class="container">
            <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div class="weather__content">
                    <div class="weather__menu menu">
                        <router-link to="/" class="menu__home"><i class="fa fa-home"></i></router-link>
                        <CitySuggest />
                    </div>
                    <div class="weather__city city" v-if="city.name != ''">
                        <h1 class="city__name">{{ city.name }}</h1>
                        <p class="city__country">{{ city.country }}</p>
                        <div class="city__links links">
                            <router-link to="/weather/current" class="links__item">Сейчас</router-link>
                            <router-link to="/weather/daily" class="links__item">На 3 дня</router-link>
                        </div>
                    </div>
                    <div class="city__data">
                        <transition :name="transitionName">
                            <router-view></router-view>                 
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

import Vuex from 'vuex'
import { mapState } from 'vuex'

import CitySuggest from '../components/CitySuggest.vue'

import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'

Vue.use(Vuex)

export default {
    data() {
        return{
            transitionName: ''
        }
    },
    components: {
        CitySuggest,
        CurrentWeather,
        DailyWeather
    },
    computed: {
        ...mapState(['city'])
    },
    watch: {
        $route(to, from) {
            const fromDepth = from.path.includes('current')
            const toDepth = to.path.includes('daily')
            this.transitionName = toDepth && fromDepth ? 'slide-left' : 'slide-right'
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide-left-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .slide-left-enter-to, .slide-left-leave, 
    .slide-right-enter-to, .slide-right-leave {    
        opacity: 1;
    }

    .slide-left-enter-active, .slide-left-leave-active,
    .slide-right-enter-active, .slide-right-leave-active {
        transition: 1s;
        width: 100%;
    }

    .slide-left-leave-active,
    .slide-right-leave-active {
        position: absolute;
    }

    .slide-left-leave-to, .slide-right-enter {
        opacity: 0;
        transform: translateX(-100%);
    }

    .weather {
        width: 100%;
        height: 100vh;
        background: url("../assets/img/hero-background.jpg") top center no-repeat;
        &__content {
            margin: 0 -30px;
            @media (min-width: 576px) {
                margin: 0;
                background: rgba(0,0,0,0.1);
                filter: blur(0.4);
            }
        }
        .menu {
            width: 100%;
            padding: 0 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            &__home {
                color: #ffffff;
                margin: 20px 10px 20px 0;
                padding: 5px;
                font-size: 36px;
                line-height: 36px;
                border: 2px solid #ffffff;
                border-radius: 5px;
                text-align: center;
                max-width: 25%;
                &:hover {
                    color: #ccc;
                    border-color: #ccc;
                }
                @media (min-width: 425px) {
                    padding: 7px;
                    font-size: 40px;
                    line-height: 40px;
                }
            }
        }
        .city {
            flex-grow: 1 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bold;
            color: #ffffff;
            &__name {
                font-size: 48px;
                font-weight: 900;
            }
            &__country {
                font-size: 18px;
                font-weight: 200;
            }
            &__data {
                display: flex;
                flex-direction: row;
                justify-content: center;
                position: relative;
                overflow: hidden;
                min-height: 472px;
            }
        }
        .links__item {
            padding: 5px 20px;
            color: white;
            font-size: 20px;
            &:hover {
                color: #ccc;
            }
            &.router-link-active {
                background: rgba(0,0,0,0.2)
            }
        }
    }
</style>
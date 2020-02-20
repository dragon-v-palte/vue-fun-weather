<template>
    <carousel-3d v-if="city.name != ''" 
            :controls-visible="true" 
            :display="1" 
            :loop="false" 
            :clickable="false" 
            :width="300" 
            :height="430" 
            :perspective="180" 
            :minSwipeDistance="100"
            dir="ltr"> 
        <slide class="list-item item" v-for="ind in 3" :index="ind-1" :key="ind-1">
            <ul> 
                <li v-for="item in cityDaily.list" :key="item.id">
                    <div v-if="dayParser(item.dt, ind)">
                        <div v-if="item.dt % 21600 != 0">
                            <span class="item__time">{{ getTime(item.dt) }}</span>
                            <div class="item__information">
                                <div class="item__image">
                                    <img :src="require(`../assets/img/weather-icon/${item.weather[0].icon}.svg`)" :alt="cityDaily.city.name" class="item__icon"/>                    
                                    <span class="item__description">{{ item.weather[0].description }}</span>
                                </div>
                                <div class="item__params">
                                    <span class="item__temp">{{ Math.round(item.main.temp)}}&deg;</span>
                                    <span class="item__humidity">{{ item.main.humidity }}%</span>
                                    <span class="item__wind">{{ item.wind.speed }}м/с</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </slide>
    </carousel-3d>
</template>

<script>

import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Carousel from 'vue-carousel-3d'

Vue.use(Carousel)

export default {
    data() {
        return {
            dayNight: [
                'Ночь',
                'Утро',
                'День',
                'Вечер'
            ]
        }
    },
    components: {
        Carousel
    },
    computed: {
        ...mapState(['city','cityDaily']),
        imageSrc() {
            if (this.cityDaily.list[0].weather[0].icon == "") {
                return
            }
            const path = this.cityDaily.list[0].weather[0].icon.toLowerCase();
            return require(`../assets/img/weather-icon/${path}.svg`);
        }
    },
    methods: {        
        ...mapActions(['getDailyData']),
        getTime(date) {
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            var day = new Date((date - 18000)*1000)
            var dayNightIndex = (date / 10800 - 1) % 8 / 2 
            if (dayNightIndex % 1 == 0)
                return this.dayNight[dayNightIndex] + " " + day.toLocaleString("ru", options)
            else
                return ''
        },
        dayParser(timeTicks, index) {
            return Math.floor(timeTicks / 86400) == Math.floor(Date.now() / 86400000 ) + index - 1
        },
    },
    mounted() {      
        this.getDailyData({
            id: this.city.id,
            name: this.city.name,
            country: this.city.country
        })
        if (this.city.name == '') this.$router.push({ path: '/weather' })
    }
    
}
</script>

<style lang="scss" scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .carousel-3d-slide {
        border: none;
        background: transparent;
        color: white;
        height: 384px;
    }
    .item {
        &__information {
            display: flex;
            flex-direction: row;
            background: rgba(0,0,0,0.2);
        }
        &__image {
            width: 70%;
            display: flex;
            align-items: center;
        }
        &__icon {
            margin: 10px;
            width: 50px;
        }
        &__params {
            display: flex;
            flex-direction: column;
        }
    }
</style>
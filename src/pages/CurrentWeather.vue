<template>
    <div v-if="city.name != ''" class="current-weather">            
        <img :src="imageSrc" :alt="cityCurrent.name" class="current-weather__icon"/>
        <span class="current-weather__description">{{ cityCurrent.description }}</span>
        <div class="current-weather__information information">
            <span class="information__temp">{{ cityCurrent.temp }}&deg;</span>
            <span class="information__humidity"><i class="fa fa-tint"></i> {{ cityCurrent.humidity }}%</span>
            <span class="information__wind"><i class="fa fa-wind"></i> {{ cityCurrent.wind }} м/с</span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'

Vue.use(Vuex)

export default {
    computed: {
        ...mapState(['city','cityCurrent']),
        imageSrc() {
            if (this.cityCurrent.imgSrc == "") {
                return
            }
            const path = this.cityCurrent.imgSrc.toLowerCase();
            return require(`../assets/img/weather-icon/${path}.svg`);
        }
    },
    mounted() {
        if (this.city.name == '') this.$router.push({ path: '/weather' })
    }
}
</script>

<style lang="scss" scoped>
    .current-weather {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        color: #ffffff;
        margin: 20px 0;
        padding: 20px;
        &__icon {
            max-width: 300px;
            max-height: 300px;
            padding: 25px 0;
            width: 90%;
            @media(min-width: 768px) {
                width: 70%;
            }
            @media(min-width: 992px) {
                width: 50%;
            }
        }
        &__description {
            padding-bottom: 50px;
        }
        .information {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
            max-width: 90%;
            &__temp {
                font-size: 50px;
                margin-right: 20px;
                font-weight: bold;
            }
            &__humidity {
                font-size: 18px;
                margin: 0 20px;
            }
            &__wind {
                margin-left: 20px;
                font-size: 18px;
            }
        }
    } 
</style>
<template lang="pug">
    div.screenshots#screenshots
        div.container
            div.screenshots__header
                h2.screenshots__name Screenshots
                p.screenshots__description The brightest images
            div.screenshots__list
                div.screenshots-item
                    div.screenshots-item__images
                        img.screenshots-item__img-text(src="../assets/img/screenshots-weather-1.png" v-parallax="0.15")
                        img.screenshots-item__img-phone(src="../assets/img/screenshots-1.png")
                        kinesis-container.kinesis-parent
                            kinesis-element.kinesis-child(:strength="20")                                                
                                span.screenshots-item__bubble.screenshots-item__bubble--blue 15&deg;
                            kinesis-element.kinesis-child(:strength="-10") 
                                span.screenshots-item__bubble.screenshots-item__bubble--yellow Cloudy
                    div.screenshots-item__description
                        img.screenshots-item__img-weather(src="../assets/img/screenshots-icon-1.png")
                        h3.screenshots-item__name When the clouds
                        p.screenshots-item__text Variable information on the air humidity, the feeling of the weather, and the ability to share this with your friends
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Cloudy
                            div.screenshots-item__icon-item 9
                                sup o
                            div.screenshots-item__icon-item 55%
                div.screenshots-item
                    div.screenshots-item__images
                        img.screenshots-item__img-text(src="../assets/img/screenshots-weather-2.png" v-parallax="0.15")
                        img.screenshots-item__img-phone(src="../assets/img/screenshots-2.png")                         
                        kinesis-container.kinesis-parent
                            kinesis-element.kinesis-child(:strength="-15")                          
                                span.screenshots-item__bubble.screenshots-item__bubble--blue 9&deg;
                            kinesis-element.kinesis-child(:strength="45")      
                                span.screenshots-item__bubble.screenshots-item__bubble--yellow Sunny
                    div.screenshots-item__description
                        img.screenshots-item__img-weather(src="../assets/img/screenshots-icon-2.png")
                        h3.screenshots-item__name When the sun
                        p.screenshots-item__text Variable information on the air humidity, the feeling of the weather, and the ability to share this with your friends
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Sunny
                            div.screenshots-item__icon-item 15
                                sup o
                            div.screenshots-item__icon-item 75%
                div.screenshots-item
                    div.screenshots-item__images
                        img.screenshots-item__img-text(src="../assets/img/screenshots-weather-3.png" v-parallax="0.15")
                        img.screenshots-item__img-phone(src="../assets/img/screenshots-3.png")                            
                        kinesis-container.kinesis-parent
                            kinesis-element.kinesis-child(:strength="20")                                                 
                                span.screenshots-item__bubble.screenshots-item__bubble--blue 9&deg;
                            kinesis-element.kinesis-child(:strength="-30")      
                                span.screenshots-item__bubble.screenshots-item__bubble--yellow Rainy
                    div.screenshots-item__description
                        img.screenshots-item__img-weather(src="../assets/img/screenshots-icon-3.png")
                        h3.screenshots-item__name When the rain
                        p.screenshots-item__text Sometimes the simplest things are the hardest to find. So we created a new line for everyday life. 
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Rainy
                            div.screenshots-item__icon-item 12
                                sup o
                            div.screenshots-item__icon-item 95%
</template>

<script>
import Kinesis from 'vue-kinesis'
import VueParallaxJS from 'vue-parallax-js'
import Vue from 'vue'
Vue.use(Kinesis)
Vue.use(VueParallaxJS)

export default {
    components: {
        Kinesis,
        VueParallaxJS
    }    
}
</script>

<style lang="scss" scoped>
    .screenshots {
        padding: 50px 0 20px;
        &__name {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            text-transform: uppercase;
            color: #648cff;
            margin-bottom: 10px;
        }
        &__description {
            font-size: 18px;
            text-align: center;
            color: #aeaeae;
        }  
        &-item{  
            padding: 135px 0 214px;
            display: flex;
            flex-direction: row;
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
            @media (max-width: 991px) {
                flex-direction: column-reverse;
                &:nth-child(even) {
                    flex-direction: column-reverse;
            }
            }
            &__images {
                position: relative;
                width: 48%;
                @media (max-width: 768px) {
                    width: 100%;
                }
            }
            &__img-phone {
                position: absolute;
                top: 35px;
                left: 83px;
                margin-right: 100px;
                height: 576px;
                @media(max-width: 992px) {
                    position: relative;
                    margin: 0 auto;
                    right: 20px;
                }
                @media(max-width: 576px) {
                    width: 65%;
                    height: auto;
                }
            }
            &__img-text {
                position: absolute;
                top: 0px;
                left: 235px;
                margin-right: 100px;
                height: 665px;
                @media(max-width: 576px) {
                    left: auto;
                    right: 0;
                    margin: 0;
                }
            }
            &__bubble {
                position: absolute;
                border-radius: 50%;
                font-weight: bold;
                text-align: center;
                text-transform: uppercase;
                cursor: context-menu;
                @media(max-width: 425px) {
                    display: none;
                }
                &--yellow {
                    background: #fcec64;
                    width: 88px;
                    height: 88px;
                    line-height: 88px;
                    color: #ffffff;
                    top: 194px;
                    left: 308px;
                    @media (max-width: 576px) {
                        left: auto;
                        right: 10%;
                    }
                }
                &--blue {
                    background: #648cff;
                    color: #ffffff;
                    line-height: 88px;
                    width: 88px;
                    height: 88px;
                    top: 393px;
                    left: 20px;
                    @media (max-width: 576px) {
                        left: 10%;
                    }
                }
            }
            &__img-weather {
                margin-bottom: 35px;
            }
            &__name {
                font-size: 36px;
                font-weight: bold;
                text-transform: uppercase;
                color: #648cff;
                margin-bottom: 20px;
            }
            &__text {
                max-width: 450px;
                font-size: 22px;
                color: #353854;
                margin-bottom: 45px;
                @media (max-width: 992px) {
                    max-width: 80%;
                    text-align: center;
                }
            }
            &__description {
                width: 52%;
                margin-top: 115px;
                @media (max-width: 992px) {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px 0 50px;
                }
            }
            &__icons {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
            }
            &__icon-item {
                background: #ffffff;
                box-shadow: 2px 0 5px 1px #dedede;
                border-radius: 50%;
                font-weight: bold;
                color: #cfcfcf;
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                margin-right: -15px;
            }
        }
        .kinesis-parent {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .kinesis-child {
            position: relative;
        }
    }
</style>
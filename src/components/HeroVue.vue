<template lang="pug">
    div.hero
        div.container
            div.hero__content
                div.row
                    div.col-12.col-md-6
                        div.hero__description
                            h2 Get the most fun weather app
                            p Simple, nice and used-friendly application of the weather. Only useful information
                            div.hero__buttons
                                button.hero__button.hero__button--red(v-scroll-to="'#download'") Download
                                button.hero__button.hero__button--blue
                                    router-link(to="/weather") Try It
                    div.col-12.col-md-6
                        div.hero__phone
                            img.hero__phone-image(src="../assets/img/hero-phone.png")                            
                        kinesis-container.kinesis__parent(:duration="2500")
                            kinesis-element.kinesis__child(:strength="-30")
                                span.hero__bubble.hero__bubble--white 9&deg;
                            kinesis-element.kinesis__child(:strength="10")
                                span.hero__bubble.hero__bubble--orange Sunny                                    
                            kinesis-element.kinesis__child(:strength="15")
                                span.hero__bubble.hero__bubble--blue London                            
                            kinesis-element.kinesis__child(:strength="-35")
                                span.hero__bubble.hero__bubble--yellow Rio                            
            div.text-center
                button.hero__button-down(v-scroll-to="'#screenshots'")
                    i.fa.fa-angle-down
</template>
<script src="vue-kinesis.min.js"></script>
<script>
import Vue from 'vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
export default {
    /*components: {
        KinesisContainer,
        KinesisElement
    }*/
}
</script>

<style lang="scss" scoped>
    .hero {

        background: #648cff url('../assets/img/hero-background.jpg') bottom center repeat-x;
        padding-bottom: 55px;
        color: #ffffff;
        &__content {
            padding: 100px 0 20px;
        }
        &__description {
            display: flex;
            flex-direction: column;
            padding-top: 80px;
            height: 100%;
            @media (max-width: 768px) {
                padding: 0 0 50px;
                align-items: center;
            }
            h2 {
                font-size: 57px;
                font-weight: bold;
                margin-bottom: 33px;
                letter-spacing: 1px;
                @media (max-width: 768px) {
                    text-align: center;
                }
            }
            p {
                font-size: 18px;
                max-width: 392px;
                margin-bottom: 55px;
                @media (max-width: 768px) {
                    text-align: center;
                }
            }
        }
        &__button {
            margin-right: 10px;
            width: 150px;
            padding: 10px 35px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            border: 0;
            border-radius: 5px;
            outline: none;
            &--red {
                background: rgb(255, 126, 79);
                &:hover {
                    background: rgb(252, 105, 52);
                }
            }
            &--blue {
                background: #3650a0;
                &:hover {
                    background: #4266d1;
                }
            }
        }
        &__phone {
            position: relative;
            &-image {
                height: 577px;   
                margin: 0 80px;
            }
            @media (max-width: 768px) {
                text-align: center;
                &-image {
                    margin: auto;
                }
            }
        }
        &__bubble {
            position: absolute;
            border-radius: 50%;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            cursor: context-menu;
            &--white {
                background: #ffffff;
                width: 53px;
                height: 53px;
                line-height: 53px;
                color: #648cff;
                top: 83px;
                left: 374px;
            }
            &--orange {
                background: chocolate;
                line-height: 88px;
                width: 88px;
                height: 88px;
                top: 280px;
                left: -44px;
            }
            &--blue {
                background: #3650a0;
                line-height: 88px;
                width: 88px;
                height: 88px;
                top: 253px;
                left: 396px;
                @media (min-width: 768px) and (max-width: 992px)
                {
                    top: 320px;
                    left: 320px;
                }
            }
            &--yellow {
                background: yellow;
                color: #648cff;
                line-height: 52px;
                width: 52px;
                height: 52px;
                top: 549px;
                left: 393px;
            }
        }
        &__button-down {
            width: 45px;
            height: 45px;
            color: red;
            background: #ffffff;
            padding: 0;
            margin: 13px auto 7px;
            border: 0;
            border-radius: 50%;
            box-shadow: 2px 2px 5px #333;
            outline: none;
            &:hover {
                background: #eef;
            }
        }
        .kinesis__parent {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            @media(max-width: 576px)
            {
                display: none;
            }
        }
        .kinesis__child {
            position: absolute;
        }
    }
</style>
<template lang="pug">
    div.widgets
        div.container
            div.widgets__header
                h3.widgets__name Simple widgets
                p.widgets__description Drap and Drop
            div.widgets__content--large
                carousel-3d(
                    :perspective="0"
                    :border="0"
                    :display="3"
                    :space="300"
                    :height="625"
                    :controls-prev-html="'&lsaquo;'" 
                    :controls-next-html="'&rsaquo;'"
                    :controls-visible="true")
                    slide(:index="0")
                        img(src="../assets/img/widgets-1.jpg")
                    slide(:index="1")
                        img(src="../assets/img/widgets-2.jpg")
                    slide(:index="2")
                        img(src="../assets/img/widgets-3.jpg")
            div.widgets__content--medium
                carousel-3d(
                    :perspective="0"
                    :border="0"
                    :display="3"
                    :space="300"
                    :height="625"
                    :width="300"
                    :controls-prev-html="'&lsaquo;'" 
                    :controls-next-html="'&rsaquo;'"
                    :controls-visible="true")
                    slide(:index="0")
                        img(src="../assets/img/widgets-1.jpg")
                    slide(:index="1")
                        img(src="../assets/img/widgets-2.jpg")
                    slide(:index="2")
                        img(src="../assets/img/widgets-3.jpg")
            div.widgets__content--small
                carousel-3d(
                    :perspective="0"
                    :border="0"
                    :display="1"
                    :height="400"
                    :width="200"
                    :controls-prev-html="'&lsaquo;'" 
                    :controls-next-html="'&rsaquo;'"
                    :controls-visible="true")
                    slide(:index="0")
                        img(src="../assets/img/widgets-1.jpg")
                    slide(:index="1")
                        img(src="../assets/img/widgets-2.jpg")
                    slide(:index="2")
                        img(src="../assets/img/widgets-3.jpg")
</template>

<script>
import Vue from 'vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'
Vue.use(Carousel3d)
Vue.use(Slide)

export default {
    components: {        
        'carousel-3d': Carousel3d,
        'slide': Slide
    }    
}
</script>

<style lang="scss" scoped>
    .widgets {
        padding-bottom: 25px;
        &__header {
            padding: 26px 0 20px;
        }
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
        &__content--large {
            @media (max-width: 992px) {
                display: none;
            }
        }
        &__content--medium {
            @media (min-width: 991px) {
                display: none;
            } 
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__content--small {
            @media (min-width: 768px) {
                display: none;
            }
        }
    }
    .carousel-3d-container{
        height: auto !important;
        padding-bottom: 35px;
        .carousel-3d-slide {
            box-shadow: 0 20px 20px -4px rgba(0, 0, 0, .2);
            img {
                height: 100%;
            }
        }
    }
</style>
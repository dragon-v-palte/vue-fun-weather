<template lang="pug">
    div.widgets
        div.container
            div.widgets__header
                h3.widgets__name Simple widgets
                p.widgets__description Drap and Drop
            div.widgets__content
                carousel-3d(
                    :perspective="0"
                    :border="0"
                    :display="3"
                    :space="300"
                    :height="635"
                    :controls-prev-html="'&lsaquo;'" 
                    :controls-next-html="'&rsaquo;'" 
                    :controls-width="40" 
                    :controls-height="50" 
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

export default {
    components: {        
        'carousel-3d': Carousel3d,
        'slide': Slide
    }    
}
</script>

<style lang="scss" scoped>
    .widgets {
        padding-bottom: 50px;
        &__header {
            padding: 20px 0;
        }
        &__name {
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            text-transform: uppercase;
            color: #648cff;
            margin-bottom: 15px;
        }
        &__description {
            font-size: 18px;
            text-align: center;
            color: #aeaeae;
        }        
    }
    .carousel-3d-controls {
        color: #c3cfe5;
        .prev {
            margin: 0 20px;
        }
    }
</style>
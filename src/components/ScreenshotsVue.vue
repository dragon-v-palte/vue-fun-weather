<template lang="pug">
    div.screenshots
        div.container
            div.screenshots__header
                h2.screenshots__name Screenshots
                p.screenshots__description The brightest images
            div.screenshots__list
                div.screenshots-item
                    div.screenshots-item__images
                        img(src="../assets/img/screenshots-weather-1.png")
                        img.screenshots-item__phone(src="../assets/img/screenshots-1.png")
                    div.screenshots-item__description
                        img.screenshots-item__image(src="../assets/img/screenshots-icon-1.png")
                        h3.screenshots-item__name When the clouds
                        p.screenshots-item__text Variable information on the air humidity, the feeling of the weather, and the ability to share this with your friends
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Cloudy
                            div.screenshots-item__icon-item 9
                                sup o
                            div.screenshots-item__icon-item 55%
                div.screenshots-item
                    div.screenshots-item__images
                        img(src="../assets/img/screenshots-weather-2.png")
                        img.screenshots-item__phone(src="../assets/img/screenshots-2.png")
                    div.screenshots-item__description
                        img.screenshots-item__image(src="../assets/img/screenshots-icon-2.png")
                        h3.screenshots-item__name When the sun
                        p.screenshots-item__text Variable information on the air humidity, the feeling of the weather, and the ability to share this with your friends
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Sunny
                            div.screenshots-item__icon-item 15
                                sup o
                            div.screenshots-item__icon-item 75%
                div.screenshots-item
                    div.screenshots-item__images
                        img(src="../assets/img/screenshots-weather-3.png")
                        img.screenshots-item__phone(src="../assets/img/screenshots-3.png")
                    div.screenshots-item__description
                        img.screenshots-item__image(src="../assets/img/screenshots-icon-3.png")
                        h3.screenshots-item__name When the rain
                        p.screenshots-item__text Sometimes the simplest things are the hardest to find. So we created a new line for everyday life. 
                        div.screenshots-item__icons
                            div.screenshots-item__icon-item Rainy
                            div.screenshots-item__icon-item 12
                                sup o
                            div.screenshots-item__icon-item 95%
</template>

<script>
export default {
    
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
            margin-bottom: 15px;
        }
        &__description {
            font-size: 18px;
            text-align: center;
            color: #aeaeae;
        }  
        &-item{  
            padding: 90px 0 40px;
            display: flex;
            flex-direction: row;
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
            @media (max-width: 991px) {
                flex-direction: column;
                &:nth-child(even) {
                    flex-direction: column;
            }
            }
            &__images {
                position: relative;
                width: 50%;
                min-height: 700px;
                img {
                    position: absolute;
                    top: 0px;
                    right: 80px;
                    @media (max-width: 991px) {
                        margin: 0 auto;
                    }
                }
                @media (max-width: 576px) {
                    display: none;
                }
                @media (max-width: 768px) {
                    width: 100%;
                }
            }
            &__phone {
                top: 0;
                margin-right: 100px;
                height: 600px;
            }
            &__image {
                margin-bottom: 40px;
            }
            &__name {
                font-size: 36px;
                font-weight: bold;
                text-transform: uppercase;
                color: #648cff;
                margin-bottom: 15px;
            }
            &__text {
                max-width: 450px;
                font-size: 22px;
                color: #353854;
                margin-bottom: 40px;
            }
            &__description {
                width: 50%;
                margin-top: 150px;
                @media (max-width: 768px) {
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
                box-shadow: 0 0 10px #aeaeae;
                border-radius: 50%;
                color: #aeaeae;
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                margin-right: -15px;
            }
        }
    }
</style>
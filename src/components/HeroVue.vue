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
                                button.hero__button.hero__button--red Download
                                button.hero__button.hero__button--blue Features
                    div.col-12.col-md-6
                        div.hero__phone
                            div.text-center
                                img.hero__phone-image(src="../assets/img/hero-phone.png")
                            span.hero__bubble.hero__bubble--white 9&deg;
                            span.hero__bubble.hero__bubble--orange Sunny
                            span.hero__bubble.hero__bubble--blue London
                            span.hero__bubble.hero__bubble--yellow Rio
            div.text-center
                button.hero__button-down
                    i.fa.fa-angle-down

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .hero {

        background: #648cff url('../assets/img/hero-background.jpg') bottom center repeat-x;
        padding-bottom: 55px;
        color: #ffffff;
        &__content {
            display: flex;
            flex-direction: row;
            align-items: center;
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
                font-size: 60px;
                font-weight: bold;
                margin-bottom: 25px;
                @media (max-width: 768px) {
                    text-align: center;
                }
            }
            p {
                font-size: 18px;
                max-width: 390px;
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
                height: 580px;   
            }
            @media (max-width: 576px) {
                display: none;
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
                width: 50px;
                height: 50px;
                line-height: 50px;
                color: #648cff;
                top: 50px;
                right: 60px;
            }
            &--orange {
                background: chocolate;
                line-height: 90px;
                width: 90px;
                height: 90px;
                top: 300px;
                left: 20px;
            }
            &--blue {
                background: #3650a0;
                line-height: 90px;
                width: 90px;
                height: 90px;
                top: 250px;
                right: 10px;
            }
            &--yellow {
                background: yellow;
                color: #648cff;
                line-height: 60px;
                width: 60px;
                height: 60px;
                top: 550px;
                right: 30px;
            }
        }
        &__button-down {
            width: 45px;
            height: 45px;
            color: red;
            background: #ffffff;
            padding: 0;
            margin: 10px;
            border: 0;
            border-radius: 50%;
            box-shadow: 2px 2px 5px #333;
            &:hover {
                background: #eef;
            }
        }
    }
</style>
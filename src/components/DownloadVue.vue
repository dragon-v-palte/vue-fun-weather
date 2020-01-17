<template lang="pug">
    div.download
        div.container
            div.row
                div.col-12.col-lg-6
                    div.download__description
                        h2.download__name How Download the app?
                        p.download__text Just download the app from the store. Simple, nice and user-friendly application of theweather. Only relevant and useful information.
                        button.download__button.download__button--appstore
                            img(src="../assets/img/download-appstore.png")
                        button.download__button.download__button--googleplay
                            img(src="../assets/img/download-googleplay.png")
                div.col-12.col-lg-6
                    div.download__images
                        img.download__image.download__image--left(src="../assets/img/screenshots-1.png")
                        img.download__image.download__image--right(src="../assets/img/screenshots-3.png")
                        img.download__image.download__image--center(src="../assets/img/screenshots-2.png")
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .download {
        background: #648cff;
        padding-top: 60px;
        &__description {
            padding-bottom: 105px;
            @media (max-width: 991px) {
                text-align: center;
            }
        }
        &__name {
            font-size: 36px;
            font-weight: bold;
            text-transform: uppercase;
            color: #ffffff;
            margin: 50px 0 30px;
        }
        &__text {
            font-size: 18px;
            line-height: 1.2;
            color: #ffffff;
            margin-bottom: 30px;
            width: 370px;
            @media (max-width: 991px) {
                margin: 0 auto 30px;
            }
        }  
        &__button {
            border: 0;
            background: transparent;
            padding: 0;
            margin-right: 5px;
            height: 40px;
            width: 140px;
            &--googleplay {
                width: 135px;
            }
            img {
                height: 100%;
                width: 100%;
            }
        }
        &__images {
            position: relative;
            width: 700px;
            height: 425px;
            overflow: hidden;
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__image {
            position: absolute;
            &--left {
                filter: blur(3px);
                top: 80px;
                left: 5%;
            }
            &--center {
                top: 0;
                left: 30%;
            }            
            &--right {
                filter: blur(3px);
                top: 80px;
                left: 55%;
            }
        }
    }
</style>
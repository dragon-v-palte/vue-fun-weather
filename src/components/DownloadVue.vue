<template lang="pug">
    div.download#download
        div.container
            div.row
                div.col-12.col-lg-6
                    div.download__description
                        h2.download__name How Download the app?
                        p.download__text Just download the app from the store. Simple, nice and user-friendly application of theweather. Only relevant and useful information.
                        a.download__link.download__link--appstore(href="#", target="_blank")
                            img(src="../assets/img/download-appstore.png")
                        a.download__link.download__link--googleplay(href="#", target="_blank")
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
        padding-top: 58px;
        &__description {
            padding-bottom: 102px;
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
            margin-bottom: 27px;
            width: 370px;
            @media (max-width: 425px) {
                width: auto;
            }
            @media (max-width: 991px) {
                margin: 0 auto 30px;
            }
        }  
        &__link {
            margin-right: 5px;
            height: 40px;
            width: 140px;
            &:hover {
                opacity: 0.7;
            }
            &--googleplay {
                width: 135px;
            }
            img {
                width: 140px;
            }
        }
        &__images {
            position: relative;
            width: 48vw;
            height: 381px;
            overflow: hidden;
            @media (max-width: 1200px){
                height: 425px;
            }
            @media (max-width: 992px){
                width: 100%;
            }
            @media (max-width: 768px) {
                height: 240px;
            }
        }
        &__image {
            position: absolute;
            &--left {
                filter: blur(3px);
                top: 70px;
                left: 15px;
                @media(max-width: 768px) {
                    left: 5%;
                }
            }
            &--center {
                top: 0;
                left: 215px;
                height: 150%;
                @media(max-width: 768px) {
                    left: 30%;
                    height: auto;
                }
            }            
            &--right {
                filter: blur(3px);
                top: 70px;
                left: 380px;
                @media(max-width: 768px) {
                    left: 55%;
                }
            }
            @media(max-width: 768px) {
                width: 40%;
                height: auto;
            }
        }
    }
</style>
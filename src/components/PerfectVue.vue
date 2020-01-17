<template lang="pug">
    div.perfect#features
        div.container
            h3.name Perfect Features
            p.description Only necessary
            div.row
                div.col-12.col-sm-4
                    div.perfect-item
                        img.perfect-item__image(src="../assets/img/perfect-1.png")
                        div.perfect-item__text
                            h4 Usability
                            p Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                div.col-12.col-sm-4
                    div.perfect-item
                        img.perfect-item__image(src="../assets/img/perfect-2.png")
                        div.perfect-item__text
                            h4 Parallax Effect
                            p Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
                div.col-12.col-sm-4
                    div.perfect-item
                        img.perfect-item__image(src="../assets/img/perfect-3.png")
                        div.perfect-item__text
                            h4 Unlimited colors
                            p Sometimes the simplest things are the hardest to find. So we created a new line for everyday life
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.perfect {
    padding: 115px 0 30px;
    .name {
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        text-transform: uppercase;
        color: #648cff;
        margin-bottom: 15px;
    }
    .description {
        font-size: 18px;
        text-align: center;
        color: #aeaeae;
    }
    &-item {
        margin: 100px 0px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        @media (min-width: 576px) and (max-width: 991px) {
            flex-direction: column;
            align-items: center;
        }
        &__image {
            width: 75px;
            margin-right: 20px;
            margin-bottom: 0;
            @media (min-width: 576px) and (max-width: 991px) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
        &__text {
            h4 {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 15px;
                @media (min-width: 576px) and (max-width: 991px) {
                    text-align: center;
                }
            }
            p {
                font-size: 15px;
                line-height: 28px;
                color: #aeaeae;
            }
        }
    }
}
</style>
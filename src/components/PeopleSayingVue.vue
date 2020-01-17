<template lang="pug">
    div.people-saying#reviews
        div.container
            div.people-saying__header
                h2.people-saying__name What people are saying
                p.people-saying__description Reviews
                div.row
                    div.col-12.col-md-6
                        div.people-saying__quote.quote
                            p.quote__start “
                            p.quote__text What art offers is space - a certain breathing room for the spirit. 
                            p.quote__author John Updike
                            p.quote__end “
                    div.col-12.col-md-6
                        div.people-saying__quote.quote
                            p.quote__start “
                            p.quote__text We do not see nature with our eyes, but with our understandings and our hearts. 
                            p.quote__author William Hazlitt
                            p.quote__end “
                    div.col-12.col-md-6
                        div.people-saying__quote.quote
                            p.quote__start “
                            p.quote__text The only courage that matters is the kind that gets you from one moment to the next.
                            p.quote__author Mignon McLaughlin
                            p.quote__end “
                    div.col-12.col-md-6
                        div.people-saying__quote.quote
                            p.quote__start “
                            p.quote__text No man has a good enough memory to be a successful liar. 
                            p.quote__author Abraham Lincoln
                            p.quote__end “
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .people-saying{
        padding-bottom: 80px;
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
    .quote {
        margin: 75px 0 15px;
        &__start, &__end {
            color: #648cff;
            font-size: 140px;
            margin: -70px 0 -110px;
        }
        &__end {
            text-align: right;
        }
        &__text {
            font-size: 24px;
            padding-left: 8px;
            margin-bottom: 10px;
        }
        &__author {
            padding-left: 8px;
            font-size: 18px;
        }
    }
</style>
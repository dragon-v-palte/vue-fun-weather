<template>
    <div>
        <span>{{ item.name }} ({{item.country}})</span>
    </div>
</template>

<script>
export default {
    props: {
        item:{
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    span {
        text-align: left;
    }
</style>
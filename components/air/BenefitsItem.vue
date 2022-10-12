<template>
    <div class="benefits-item">
        <div class="benefits-item__img">
            <img :src="img" alt="">
        </div>

        <h2 class="benefits-item__title">
            {{ title }} <span>{{ gradient }}</span>
        </h2>

        <div class="benefits-item__sub">
            <p>{{ subOne }}</p>
            <p>{{ subSecond }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: ''
        },

        title: {
            type: String,
            default: ''
        },

        gradient: {
            type: String,
            default: ''
        },

        subOne: {
            type: String,
            default: ''
        },

        subSecond: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/air/benefits";
</style>
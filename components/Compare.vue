<template>
    <div class="compare">
        <div class="container mx-auto">
            <div class="compare__title" :class="{'compare__title-air': isAir}">
                <p>Compare our products and</p>
                <p>choose a plan that’s <span>right for you.</span></p>
            </div>

            <div class="compare__btn">
                <app-button
                    class="mx-auto"
                    nuxt
                    to=""
                    :color="isAir ? 'gradient-pink' : 'gradient-yellow'"
                    style="width: 116px"
                >Find a Plan</app-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAir: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_compare.scss";
</style>
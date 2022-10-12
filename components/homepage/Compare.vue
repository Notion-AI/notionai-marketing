<template>
    <div class="compare">
        <div class="container mx-auto">
            <div class="compare__title">
                <p>Compare our products and</p>
                <p>choose a plan that’s <span>right for you.</span></p>
            </div>

            <div class="compare__btn">
                <app-button
                    class="mx-auto"
                    nuxt
                    to=""
                    color="gradient-yellow"
                    style="width: 7.25rem; height: 2.375rem"
                >Find a Plan</app-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_compare.scss";
</style>
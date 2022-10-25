<template>
    <div class="three-pillar">
        <div class="container mx-auto">
            <h2 class="three-pillar__title">
                Notion Ai's products and capabilities are anchored in three pillars: <span class="text-gradient-yellow">strategy, data and design.</span>
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                <div class="three-pillar__item" v-for="(item, index) in data" :key="index">
                    <div class="item-img">
                        <img :src="item.img" alt="">
                    </div>

                    <h4 class="item-name">{{ item.name }}</h4>
                    <div class="item-position">{{ item.position }}</div>
                    <div class="item-linkedin">
                        <app-button style="width: 95px">LinkedIn</app-button>
                    </div>
                </div>
            </div>

            <h2 class="get-touch lg:hidden">
                <span class="text-gradient-yellow">Get in touch</span> with us and take advantage of our unrivalled market intelligence
            </h2>

            <h2 class="get-touch hidden lg:block">
                <p><span class="text-gradient-yellow">Get in touch</span> with us and take advantage</p>
                <p>of our unrivalled market intelligence</p>
            </h2>

            <app-button color="gradient-yellow" style="width: 124px" :border="false">Contact us</app-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/about/_three-pillar.scss";
</style>
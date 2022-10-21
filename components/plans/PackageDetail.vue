<template>
    <div>
        <div 
            v-for="(item, index) in data" :key="index"
            class="package-detail grid grid-cols-1 lg:grid-cols-2"
            :class="`background-${item.mode}`"
        >
            <div class="des">
                <h2 class="des__slogan" v-html="item.slogan"></h2>
                <app-button
                    style="width: 100px"
                    :color="`gradient-${item.gradient}`"
                >Sign up</app-button>
            </div>

            <div class="des">
                <h4 class="des__title" v-html="item.title"></h4>

                <p class="des__sub" v-html="item.subTitle"></p>

                <div class="des__benefit">How you’ll benefit</div>

                <ul class="des__benefit-list">
                    <li v-for="(i, idx) in item.benefits" :key="idx">
                        <img v-if="item.gradient === 'yellow' || item.gradient === 'pink'" src="~assets/images/plans/check.png" alt="" />
                        <img v-else src="~assets/images/plans/check-violet.png" alt="" />
                        {{ i.name }}
                    </li>
                </ul>

                <div class="des__price">
                    <p>{{ item.priceUSD }} / {{ item.monthly }}</p>
                    <div v-if="item.users && item.topics">
                        <app-button color="gray">{{item.users}} Users</app-button>
                        <app-button color="gray">{{item.topics}} Topics</app-button>
                    </div>
                </div>
            </div>
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
@import "~/assets/scss/components/plans/package-detail";
</style>
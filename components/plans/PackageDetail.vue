<template>
    <div>
        <div 
            v-for="(item, index) in data" :key="index"
            class="package-detail grid grid-cols-1 xl:grid-cols-2 lg:gap-16"
            :class="item.mode"
            :style="{
                paddingTop: item.paddingTop + 'rem', 
                paddingBottom: item.paddingBottom +'rem',
                background: item.background
            }"
        >
            <div class="des">
                <h2 class="des__slogan" v-html="item.slogan"></h2>
                <app-button
                    class="des__sign-up"
                    style="width: 100px"
                    :color="`gradient-${item.gradient}`"
                >Sign up</app-button>
            </div>

            <div class="des">
                <h4 class="des__title">{{ item.title }}</h4>

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
                    <p v-if="item.priceUSD && item.monthly">
                        <span class="usd">{{ item.priceUSD }}</span>
                        <span class="monthly"> / {{ item.monthly }}</span>
                    </p>
                    <div v-if="item.users && item.topics" class="flex items-center ml-11">
                        <app-button color="gray" class="mr-4">{{item.users}} Users</app-button>
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

<style lang="scss">
@import "~/assets/scss/components/plans/_package-detail.scss";
</style>
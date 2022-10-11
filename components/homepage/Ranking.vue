<template>
   <div>
        <div
            v-if="type === 1"
            class="ranking" 
            :style="{paddingBottom: padding + 'rem'}"
        >
            <div class="container mx-auto">
                <img class="mx-auto" :src="require(`~/assets/images/${image}.png`)" alt="" />
                <h2 class="ranking__text" v-if="isText">
                    Ranking results in <span>terms of relevance</span>
                </h2>
            </div>
        </div>

        <div
            v-else
            class="ranking--modify" 
            :style="{paddingTop: padding + 'rem', paddingBottom: padding + 'rem'}"
        >
            <div 
                class="container container--modify mx-auto flex items-center content-between"
            >
                <h2 :class="{'opacity-30': opacity}" class="ranking__left">Straight into your hands</h2>
                <img v-if="opacity" src="~assets/images/ranking-3.png" alt=""/>
                <img v-else src="~assets/images/ranking-4.png" alt=""/>
                <h2 :class="{'opacity-30': opacity}" class="ranking__right">under one subscription</h2>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        },

        isText: {
            type: Boolean,
            default: true
        },

        padding: {
            type: Number,
            default: 0
        },

        type: {
            type: Number,
            default: 1
        },

        opacity: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_ranking.scss";
</style>
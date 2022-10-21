<template>
   <div>
        <div
            v-if="type === 1"
            class="ranking" 
            :style="{paddingBottom: padding + 'rem'}"
        >
            <div class="container mx-auto">
                <img class="mx-auto" :src="require(`~/assets/images/home/${image}.png`)" alt="" />
                <h2 class="ranking__text" v-if="isText">
                    {{rankingText}} <span>{{rankingTextHighlight}}</span>
                </h2>
            </div>
        </div>

        <div
            v-else
            class="ranking--modify" 
            :style="{paddingTop: padding + 'rem', paddingBottom: padding + 'rem'}"
        >
            <div 
                class="container container--modify mx-auto"
            >
                <h2 :class="{'opacity-30': opacity}" class="ranking__left">{{straightText}}</h2>
                <img v-if="opacity" src="~assets/images/home/ranking-3.png" alt="" class="mx-auto"/>
                <img v-else src="~assets/images/home/ranking-4.png" alt="" class="mx-auto"/>
                <h2 :class="{'opacity-30': opacity}" class="ranking__right">{{underText}}</h2>
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
        },
        rankingText: {
          type: String,
          default: 'Ranking results in'
        }, 
        rankingTextHighlight: {
          type: String,
          default: 'terms of relevance'
        },
        straightText: {
          type: String,
          default: 'Straight into your hands'
        },
        underText: {
          type: String,
          default: 'under one subscription'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_ranking.scss";
</style>
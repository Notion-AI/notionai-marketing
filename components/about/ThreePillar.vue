<template>
    <div class="three-pillar">
        <div class="container mx-auto">
            <h2 class="three-pillar__title"
                v-for="(item, idx) in titlePillar"
                :key="idx"
                v-html="$textConvert(item, '', 'text-gradient-yellow')"
            >
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
                <div class="three-pillar__item" v-for="(item, index) in dataPillar" :key="index">
                    <div class="item-img">
                        <img :src="item?.avatar?.url" alt="">
                    </div>

                    <h4 class="item-name">{{ item.name }}</h4>
                    <div class="item-position">{{ item.position }}</div>
                    <div class="item-linkedin">
                        <app-button 
                            style="width: 95px"
                            tag="a"
                            :target="item.link_linkedin.target"
                            :href="item.link_linkedin.url"
                        >LinkedIn</app-button>
                    </div>
                </div>
            </div>

            <h2 
                class="get-touch"
                v-for="(item, index) in titleContact"
                :key="index"
                v-html="$textConvert(item, '', 'text-gradient-yellow')"
            ></h2>

            <app-button 
                color="gradient-yellow" 
                style="width: 124px"
                :border="false"
                tag="a"
                :target="this.contact?.primary?.button_link?.target"
                :href="this.contact?.primary?.button_link?.url"
            >
                {{ this.contact?.primary?.button_text }}
            </app-button>
        </div>
    </div>
</template>

<script>
import { filter } from 'lodash'
export default {
    props: {
        teams: {
            type: Object,
            default: () => {}
        },

        contact: {
            type: Object,
            default: () => {}
        }
    },

    computed: {
        titlePillar() {
            return this.teams?.primary?.title || []
        },

        dataPillar () {
            return filter(this.teams?.items, item => item.is_active) || []
        },

        titleContact() {
            return this.contact?.primary?.title || []
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/components/about/_three-pillar.scss";
</style>

<style scoped>
.three-pillar__title :deep(.text-gradient-yellow),
.get-touch :deep(.text-gradient-yellow){
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
</style>
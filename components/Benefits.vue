<template>
    <div class="benefits">
        <div class="container mx-auto">
            <h2 :class="`${type} benefits__title`">
                <p>{{benefit_title_normal}}</p>
                <p>{{benefit_title_highlight}}</p>
            </h2>

            <div class="benefits__content grid grid-cols-1 md:grid-cols-3">
                <BenefitsItem
                    v-for="(i, idx) in benefits" :key="idx"
                    :class="type"
                    :img="i.image.url"
                    :title="i.title_normal"
                    :gradient="i.title_highlight"
                    :sub-one="i.description"
                />
            </div>
        </div>
    </div>
</template>

<script>
import BenefitsItem from './BenefitsItem.vue';
export default {
    components: { BenefitsItem },
    data() {
        return {
        }
    },

    props: {
        type: {
          type: String,
          default: 'air'
        },
        benefit_title_highlight: {
          type: String,
          default: ''
        },
        benefit_title_normal: {
          type: String,
          default: ''
        },
        benefits: {
          type: Array,
          default: []
        }
    },

    created() {
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/benefits";
</style>
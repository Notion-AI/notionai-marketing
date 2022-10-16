<template>
    <div class="benefits">
        <div class="container mx-auto">
            <h2 v-if="type === 'air'" class="air benefits__title">
                <p>How AiR benefits</p>
                <p>your business.</p>
            </h2>

            <h2 v-if="type === 'stream'" class="stream benefits__title">
                <p>How Stream benefits</p>
                <p>you as a professional.</p>
            </h2>

            <div class="benefits__content grid grid-cols-1 md:grid-cols-3">
                <BenefitsItem
                    v-for="(i, idx) in benefits" :key="idx"
                    :class="type"
                    :img="i.img"
                    :title="i.title"
                    :gradient="i.gradient"
                    :sub-one="i.subOne"
                    :sub-second="i.subSecond"
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
            benefits: [],
            benefitsAir: [
                {img: '/images/benefit-1.png', title: 'Save', gradient: 'Resources', subOne: 'Do more with less in support of', subSecond: 'growth and efficiency initiatives.'},
                {img: '/images/benefit-2.png', title: 'Innovate', gradient: 'Faster', subOne: 'Extend the breadth of new ideas', subSecond: 'from global practices.'},
                {img: '/images/benefit-3.png', title: 'Research', gradient: 'Repository', subOne: 'Repository of research that', subSecond: 'can be updated on demand.'}
            ],

            benefitsStream: [
                {img: '/images/stream-dynamic-2.png', title: 'Access', gradient: 'Global Content', subOne: '100,000 enterprise-grade sources,', subSecond: 'one subscription.'},
                {img: '/images/stream-dynamic-3.png', title: 'Unlimited', gradient: 'Briefings', subOne: 'Monitor big issues,', subSecond: 'personalised for you.'},
                {img: '/images/stream-dynamic-4.png', title: 'Collaborate', gradient: 'Around Content', subOne: 'Understand and share the 1%', subSecond: 'that matters.'}
            ]
        }
    },

    props: {
        type: {
            type: String,
            default: 'air'
        }
    },

    created() {
        if(this.type === 'air') {
            this.benefits = this.benefitsAir
        } else {
            this.benefits = this.benefitsStream
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/benefits";
</style>
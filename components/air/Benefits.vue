<template>
    <div class="benefits">
        <div class="container mx-auto">
            <h2 class="benefits__title">
                <p>How AiR benefits</p>
                <p>your business.</p>
            </h2>

            <div class="benefits__content grid grid-cols-1 md:grid-cols-3">
                <BenefitsItem
                    v-for="(i, idx) in benefits" :key="idx"
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
            benefits: [
                {img: '/images/benefit-1.png', title: 'Save', gradient: 'Resources', subOne: 'Do more with less in support of', subSecond: 'growth and efficiency initiatives.'},
                {img: '/images/benefit-2.png', title: 'Innovate', gradient: 'Faster', subOne: 'Extend the breadth of new ideas', subSecond: 'from global practices.'},
                {img: '/images/benefit-3.png', title: 'Research', gradient: 'Repository', subOne: 'Repository of research that', subSecond: 'can be updated on demand.'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/air/benefits";
</style>
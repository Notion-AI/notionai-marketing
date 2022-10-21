<template>
    <div class="plans-package">
        <h2 class="plans-package__title lg:hidden">
            <p>Leverage the power of AI and <span class="text-gradient-yellow">find a plan that’s right for you.</span></p>
        </h2>

        <h2 class="plans-package__title hidden lg:block">
            <p>Leverage the power of AI and</p>
            <p class="text-gradient-yellow">find a plan that’s right for you.</p>
        </h2>

        <div class="plans-package__list grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <div 
                class="package-item-wrapper"
                v-for="(item, index) in data" :key="index"
                :class="`wrapper-gradient-${item.classGradient}`"
            >
                <div class="package-item">
                    <h5 
                        class="package-item__title"
                        :class="`text-gradient-${item.classGradient}`"
                    >
                        {{ item.title }}
                    </h5>
                    <div class="package-item__price">
                        <span class="usd" :class="`text-gradient-${item.classGradient}`">{{ item.price }}</span>
                        <span class="monthly">{{ item.perMonth }}</span>
                    </div>

                    <p class="package-item__text">
                        {{ item.text }}
                    </p>

                    <div class="package-item__btn">
                        <app-button
                            class="mx-auto"
                            color="outline-white"
                            style="width: 130px"
                        >Learn more</app-button>
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
@import "~/assets/scss/components/plans/plan-package";
</style>
<template>
    <div class="plans-package">
        <h2 class="plans-package__title">
            <p
              v-for="(item, idx) in title"
              :key="idx"
              v-html="$textConvert(item, '', 'text-gradient-yellow')"
            >
            </p>
        </h2>

        <div class="plans-package__list grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <div 
                class="package-item-wrapper"
                v-for="(item, index) in data" :key="index"
                :class="`wrapper-gradient-${item.class_gradient}`"
            >
                <div class="package-item">
                    <h5 
                        class="package-item__title"
                        :class="`text-gradient-${item.class_gradient}`"
                    >
                        {{ item.title }}
                    </h5>
                    <div class="package-item__price">
                        <span class="usd" :class="`text-gradient-${item.class_gradient}`">{{ item.price }}</span>
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
                            v-scroll-to="`#package-detail-${index}`"
                        >{{ item.price }}</app-button>
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
        },
        title: {
          type: Array,
          default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/plans/plan-package";
</style>
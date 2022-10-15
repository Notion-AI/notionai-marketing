<template>
    <div class="timeline-enter">
      <h2 class="timeline-enter__title">
        <slot />
      </h2>

      <div class="timeline-enter__dot grid grid-cols-3 gap-4 lg:gap-32">
        <div class="dot-item">
          <span></span>
        </div>

        <div class="dot-item">
          <span></span>
        </div>

        <div class="dot-item">
          <span></span>
        </div>
      </div>

      <div class="swiper timeline-enter__item grid grid-cols-3 gap-4 lg:gap-32">
        <div
          class="swiper-wrapper"
          v-for="(item, idx) in data" :key="idx"
        >
          <div class="swiper-content">
            <h3 class="item-title">
              {{ item.title }}
            </h3>

            <p>{{ item.sub }}</p>
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
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/enterprise/_timeline-enterprise.scss";
</style>
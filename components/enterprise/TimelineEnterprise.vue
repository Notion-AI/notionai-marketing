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

      <!-- <div class="swiper timeline-enter__item grid grid-cols-3 gap-4 lg:gap-32">
        <div
          class="swiper-wrapper"
          v-for="(item, idx) in data" :key="idx"
        >
          <div class="swiper-content">
            
          </div>
        </div>
      </div> -->

      <swiper ref="mySwiper"  :slides-per-view="3" class="columns-3">
        <swiper-slide v-for="(item,key) in data" :key="key" class="timeline-enter__item">
          <h3 class="item-title">
            {{ item.title }}
          </h3>

          <p>{{ item.sub }}</p>
        </swiper-slide>
      </swiper>
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

  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/enterprise/_timeline-enterprise.scss";
</style>
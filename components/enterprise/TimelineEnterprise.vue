<template>
    <div class="timeline-enter">
      <h2 class="timeline-enter__title">
        <slot />
      </h2>

      <div class="timeline-enter__dot grid grid-cols-3 lg:gap-14">
        <div class="dot-item">
          <span class="hidden lg:inline-block"></span>
        </div>

        <div class="dot-item">
          <span class="inline-block"></span>
        </div>

        <div class="dot-item">
          <span class="hidden lg:inline-block"></span>
        </div>
      </div>

      <div class="carousel">
        <client-only>
          <carousel v-bind="options">
            <slide v-for="(item,key) in data" :key="key" class="timeline-enter__item">
              <h3 class="item-title">
                {{ item.title }}
              </h3>

              <p>{{ item.sub }}</p>
            </slide>
          </carousel>
        </client-only>
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

  data() {
    return {
      options: {
        autoplay: true,
        autoplayHoverPause: true,
        perPage: 1,
        paginationEnabled: false,
        perPageCustom: [[768, 3]]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/enterprise/_timeline-enterprise.scss";
</style>
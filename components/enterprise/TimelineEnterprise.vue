<template>
    <div class="timeline-enter">
      <h2 class="timeline-enter__title">
        <slot />
      </h2>

      <div class="carousel">
        <client-only>
          <carousel v-bind="options">
            <slide v-for="(item,key) in data" :key="key" class="timeline-enter__item">
               <div class="item-dot">
                  <span></span>
                </div>

              <h3 class="item-title">
                {{ item.title[0].text }}
              </h3>
              
              <h5 class="flex justify-center">
                <p>{{ item.description }}</p>
              </h5>
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
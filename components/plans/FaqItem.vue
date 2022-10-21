<template>
  <div class="faq-item">
    <div class="faq-item__head" @click="collapse = !collapse">
      <h3>{{ data.title }}</h3>

      <div class="arrow" :class="{'arrow-rotate': collapse}">
        <img src="~assets/images/plans/arrow-down.png" alt="">
      </div>
    </div>

    <div v-if="collapse" class="faq-item__body">
      {{ data.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data(){
    return {
      collapse: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/plans/faq";
</style>
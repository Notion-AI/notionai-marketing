<template>
  <div class="source">
    <div class="container mx-auto" v-if="type === 1">
      <img class="mx-auto w-8/12" src="~/assets/images/home/source.png" alt=""/>
      <p class="source__number">{{sourceNumber}}</p>
    </div>

    <img v-if="type === 2" class="mx-auto w-full" src="~/assets/images/home/source-2.png" alt=""/>

    <img v-if="type === 3" class="ml-auto w-9/12" src="~/assets/images/home/source-3.png" alt=""/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    },
    sourceNumber: {
      type: String,
      default: '74,356 sources'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_source.scss";
</style>
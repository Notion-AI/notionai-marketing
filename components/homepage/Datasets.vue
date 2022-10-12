<template>
  <div 
    class="datasets"
    :style="{paddingTop: top  + 'rem', paddingBottom: bottom + 'rem'}"
  >
    <div class="container mx-auto">
        <h2 class="datasets__text" v-if="isText">
            <p>Highlighting fringe topics to</p>
            <p>create <span>new datasets that inform</span></p>
            <p>critical business decisions.</p>
        </h2>

        <div class="datasets__img">
            <img src="~assets/images/home/datasets.png" alt="" class="mx-auto">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isText: {
            type: Boolean,
            default: false
        },

        top: {
            type: Number,
            default: 10.0625
        },

        bottom: {
            type: Number,
            default: 10.0625
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_datasets.scss";
</style>
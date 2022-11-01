<template>
  <div class="data-cluster">
    <div class="container mx-auto">
        <div v-if="type === 1" class="flex items-center content-between">
            <img src="~assets/images/home/data-cluster-1.svg" alt="" class="w-1/3 lg:w-auto mr-auto">
            <img src="~assets/images/home/data-cluster-2.svg" alt="" class="w-1/3 lg:w-auto mx-auto">
            <img src="~assets/images/home/data-cluster-3.svg" alt="" class="w-1/3 lg:w-auto ml-auto">

            <div class="data-cluster__text">
                <p>{{clusterText}} <span>{{clusterTextHighlight}}</span></p>
                <!-- <p>and connections between them</p> -->
            </div>
        </div>

        <div v-if="type === 2">
            <img src="~assets/images/home/data-cluster-4.svg" alt="" class="mx-auto">
        </div>

        <div v-if="type === 3">
            <img src="~assets/images/home/data-globe-3.svg" alt="" class="mx-auto">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: Number,
            default: 1
        },
        clusterText: {
          type: String,
          default: 'Analyzed to discover '
        },
        clusterTextHighlight: {
          type: String,
          default: 'themes and connections between them'
        },
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_data-cluster.scss";
</style>
<template>
  <div class="data-globe">
    <div class="container mx-auto">
        <div class="grid grid-cols-3">
            <p class="data-globe__text-left text-right">
                {{textLeft}}
            </p>
            <div>
                <img class="mx-auto" :src="require(`~/assets/images/${image}.png`)" alt="" />
            </div>
            <p class="data-globe__text-right text-left">
                {{textRight}}
                <span>{{textStrong}}</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        textLeft: {
            type: String,
            default: ''
        },

        textStrong: {
            type: String,
            default: ''
        },

        image: {
            type: String,
            default: ''
        },

        textRight: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_data-globe.scss";
</style>
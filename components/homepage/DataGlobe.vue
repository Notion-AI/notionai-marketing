<template>
  <div class="data-globe">
    
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <p class="data-globe__text-left text-center lg:text-right">
                {{textLeft}}
            </p>
            <div>
                <img class="mx-auto" :src="require(`~/assets/images/home/${image}.svg`)" alt="" />
            </div>
            <p class="data-globe__text-right text-center lg:text-left">
                {{textRight}}
                <span>{{textStrong}}</span>
            </p>
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
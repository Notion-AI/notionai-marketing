<template>
    <div>
        <div v-if="type === 1" class="fringer-data">
            <div class="container mx-auto">
                <img src="~assets/images/home/fringer-data-1.svg" alt="" class="mx-auto" />
            </div>
        </div>

        <div v-if="type === 2" class="fringer-data--bg">
            <img src="~assets/images/home/cycle-data.svg" alt="" />
        </div>

        <div v-if="type === 3" class="fringer-data--dot">
            <img src="~assets/images/home/cycle-data.svg" alt="" />
            <p class="fringer-data__text">{{dataText}} <span>{{dataTextHighlight}}</span></p>
        </div>

        <div v-if="type === 4">
            <img src="~assets/images/home/fringer-data-3.svg" alt="" class="w-full object-cover"/>
        </div>

        <div v-if="type === 5">
            <img src="~assets/images/home/fringer-data-4.svg" alt="" class="w-full object-cover"/>
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
        dataText: {
          type: String,
          default: 'To quickly find the '
        },
        dataTextHighlight: {
          type: String,
          default: '1% that matters'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_fringer-data.scss";
</style>
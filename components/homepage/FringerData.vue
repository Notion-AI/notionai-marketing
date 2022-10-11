<template>
    <div>
        <div v-if="type === 1" class="fringer-data">
            <div class="container mx-auto">
                <img src="~assets/images/fringer-data-1.png" alt="" class="mx-auto" />
            </div>
        </div>

        <div v-if="type === 2" class="fringer-data--bg">
            <img src="~assets/images/cycle-data.png" alt="" />
        </div>

        <div v-if="type === 3" class="fringer-data--dot">
            <img src="~assets/images/cycle-data.png" alt="" />
            <p class="fringer-data__text">To quickly find the <span>1% that matters</span></p>
        </div>

        <div v-if="type === 4">
            <img src="~assets/images/fringer-data-3.png" alt="" class="w-full object-cover"/>
        </div>

        <div v-if="type === 5">
            <img src="~assets/images/fringer-data-4.png" alt="" class="w-full object-cover"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_fringer-data.scss";
</style>
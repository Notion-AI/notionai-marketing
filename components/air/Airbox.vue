<template>
    <div class="air-box" :style="{ backgroundColor: background }">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                <div class="air-box__left">
                    <slot name="right" v-if="reverse"/>
                    <slot name="left" v-else/>
                </div>

                <div class="air-box__right">
                    <slot name="left" v-if="reverse"/>
                    <slot name="right" v-else/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        background: {
            type: String,
            default: '#fff'
        },

        reverse: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/air/air-box";
</style>
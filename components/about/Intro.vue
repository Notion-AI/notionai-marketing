<template>
    <div class="intro">
        <div class="container-mx-auto">
            <h1 class="intro__title"
                v-for="(item, idx) in title"
                :key="idx"
                v-html="$textConvert(item, '', 'text-gradient-yellow')"
            ></h1>

            <div class="intro__content">
                <div 
                    class="content-row"
                    v-for="(item, idx) in data" :key="idx"
                >
                    <h3 class="content-name">{{ item?.title }}</h3>
                    <div class="content-text">
                        <p v-for="(i, index) in item?.description" :key="index">{{ i?.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: Array,
            default: () => []
        },

        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/components/about/_intro.scss";
</style>
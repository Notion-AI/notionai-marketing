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


<style scoped>
.intro__title :deep(.text-gradient-yellow) {
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
</style>
<template>
    <div class="explore">
        <h2 class="explore__title lg:hidden">
            <p>Explore 1000+ articles on trending topics from around the globe and stay infromed.</p>
        </h2>

        <h2 class="explore__title hidden lg:block">
            <p>Explore 1000+ articles on trending topics</p>
            <p>from around the globe and stay infromed.</p>
        </h2>

        <div class="explore__carousel list-article__blog">
            <client-only>
                <carousel v-bind="options">
                    <slide class="carousel-item" v-for="(item, index) in data" :key="index">
                        <img :src="item.img" alt="" class="blog-img">
                        <app-button class="blog-btn">{{ item.textBtn }}</app-button>
                        <h3 class="blog-title">{{ item.title }}</h3>
                        <p class="blog-subtext">{{ item.text }}</p>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: {
                autoplay: true,
                autoplayHoverPause: true,
                perPage: 1,
                paginationEnabled: false,
                perPageCustom: [[768, 2], [1024, 3]],
            },
        }
    },

    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/explore";
@import "~/assets/scss/components/blog/_list-article.scss";
</style>
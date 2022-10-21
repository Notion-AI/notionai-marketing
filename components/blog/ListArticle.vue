<template>
    <div class="list-article-wrapper">
        <div class="list-article">
            <div class="list-article__category">
                <n-link to="" class="font-bold">Latest</n-link>
                <n-link to="">From Notion Ai</n-link>
                <n-link to="">Community</n-link>
                <n-link to="">Events</n-link>
                <n-link to="">Resources</n-link>
            </div>

            <div class="list-article__blog grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-5">
                <div v-for="(item, index) in data" :key="index" class="mx-auto mb-14 md:mb-11">
                    <img :src="item.img" alt="" class="blog-img">
                    <app-button class="blog-btn">{{ item.textBtn }}</app-button>

                    <h3 class="blog-title">{{ item.title }}</h3>
                    <p class="blog-subtext">{{ item.text }}</p>

                    <div class="blog-time">
                        <div class="logo-mini">
                            <img src="~assets/images/logo-mini.png" alt="">
                            <span>Notion Ai</span>
                        </div>
                        <span class="date">{{ item.time }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-article">
            <div class="list-article__category"></div>
            <AppPagination
                class="blog-pagintion"
                :total-pages="11"
                :total="113"
                :per-page="10"
                :current-page="currentPage"
                @pagechanged="onPageChange" 
            />
        </div>
    </div>
</template>

<script>

export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            currentPage: 1,
        };
    },

    methods: {
        onPageChange(page) {
            this.currentPage = page;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/_list-article.scss";
</style>
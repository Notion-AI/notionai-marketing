<template>
    <div class="explore">
        <h2 class="explore__title">
            <p>{{title}}</p>
        </h2>

        <div class="explore__carousel list-article__blog">
            <client-only>
                <carousel v-bind="options">
                    <slide
                      v-for="(item, index) in data"
                      :key="index"
                      class="carousel-item"
                    >
                        <img :src="item.data?.thumbnail?.url" :alt="item.data?.thumbnail?.alt" class="blog-img" @click="() => $router.push({ name: 'blog-id', params: { id: item?.uid } })">
                        <div class="flex flex-wrap gap-2">
                          <app-button
                            v-for="category in item.tags"
                            :key="category"
                            class="blog-btn"
                          ><span>{{ category }}</span></app-button>
                        </div>
                        
                        <h3 class="blog-title" @click="() => $router.push({ name: 'blog-id', params: { id: item?.uid } })">{{ item?.data?.title }}</h3>
                        <p class="blog-subtext">{{ item?.data?.description_short }}</p>
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
        },
        title: {
          type: String,
          default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/explore";
@import "~/assets/scss/components/blog/_list-article.scss";
</style>
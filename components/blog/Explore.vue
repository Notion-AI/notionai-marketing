<template>
    <div class="explore">
        <h2 class="explore__title">
            <p>{{title}}</p>
        </h2>

        <div class="explore__carousel list-article__blog">
            <client-only>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide 
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
                    </swiper-slide>
                </swiper>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOptions: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                autoplay: true,
                breakpoints: {
                    '640': {
                        slidesPerView: 'auto',
                        spaceBetween: 15,
                    },
                     '5120': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
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
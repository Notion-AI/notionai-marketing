<template>
    <div class="list-article-wrapper">
        <div class="list-article">
           <div class="list-article__category--mobile block lg:hidden">
              <client-only>
                <carousel v-bind="options">
                  <slide>
                    <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Latest', page: 1} }" :class="`${ (!$route?.query?.author || $route?.query?.author === 'Latest') ? 'font-bold' : ''}`">Latest</n-link>
                  </slide>

                  <slide>
                    <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'From Notion Ai', page: 1}}" :class="`${ $route?.query?.author === 'From Notion Ai' ? 'font-bold' : ''}`">From Notion Ai</n-link>
                  </slide>

                  <slide>
                    <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Community', page: 1}}" :class="`${ $route?.query?.author === 'Community' ? 'font-bold' : ''}`">Community</n-link>
                  </slide>

                  <slide>
                    <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Events', page: 1}}" :class="`${ $route?.query?.author === 'Events' ? 'font-bold' : ''}`">Events</n-link>
                  </slide>

                  <slide>
                    <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Resources', page: 1}}" :class="`${ $route?.query?.author === 'Resources' ? 'font-bold' : ''}`">Resources</n-link>
                  </slide>
                </carousel>
              </client-only>
           </div>

            <div class="list-article__category--desktop hidden lg:block">
              <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Latest', page: 1} }" :class="`${ (!$route?.query?.author || $route?.query?.author === 'Latest') ? 'font-bold' : ''}`">Latest</n-link>
              <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'From Notion Ai', page: 1}}" :class="`${ $route?.query?.author === 'From Notion Ai' ? 'font-bold' : ''}`">From Notion Ai</n-link>
              <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Community', page: 1}}" :class="`${ $route?.query?.author === 'Community' ? 'font-bold' : ''}`">Community</n-link>
              <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Events', page: 1}}" :class="`${ $route?.query?.author === 'Events' ? 'font-bold' : ''}`">Events</n-link>
              <n-link :to="{ name: 'blog', query: { ...$route.query, author: 'Resources', page: 1}}" :class="`${ $route?.query?.author === 'Resources' ? 'font-bold' : ''}`">Resources</n-link>
            </div>

            <div class="list-article__blog grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <div 
                  v-for="(item, index) in getBlogs" :key="index" 
                  class="mx-auto mb-14 md:mb-11"
                >
                  <img 
                    :src="item.data?.thumbnail?.url" 
                    :alt="item.data?.thumbnail?.alt" 
                    class="blog-img 2xl:w-full"
                    @click="$router.push(`/blog/${item.uid}`)"
                  >
                  <div class="flex flex-wrap gap-2">
                    <app-button
                      v-for="category in item.tags"
                      :key="category"
                      class="blog-btn"
                    ><span>{{ category }}</span></app-button>
                  </div>

                  <h3 class="blog-title" @click="$router.push(`/blog/${item.uid}`)">{{ item.data?.title }}</h3>
                  <p class="blog-subtext">{{ item.data?.description_short }}</p>

                  <div class="blog-time">
                      <div class="logo-mini">
                          <!-- <img src="~assets/images/logo-mini.png" alt=""> -->
                          <nuxt-img
                            provider="prismic"
                            :src="item.data?.logo_author?.url"
                            :alt="item.data?.logo_author?.alt"
                          />
                          <span>{{ item.data?.author }}</span>
                      </div>
                      <span class="date">{{ item.data?.created_date }}</span>
                  </div>
                </div>
            </div>
        </div>

        <div class="list-article" v-if="data?.total_pages > 1">
            <div class="list-article__category--desktop"></div>
            <AppPagination
                class="blog-pagintion"
                :total-pages="data?.total_pages"
                :total="data?.total_results_size"
                :per-page="data?.page"
                :current-page="data?.page || 1"
                @pagechanged="onPageChange" 
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
      return {
        currentPage: 1,
        options: {
          autoplay: false,
          autoplayHoverPause: true,
          perPage: 4,
          paginationEnabled: false,
        },
      };
    },

    computed: {
      ...mapState('blog', [
        'data'
      ]),

      getBlogs () {
        return this.data?.results || []
      }
    },

    methods: {
        onPageChange(page) {
          this.$router.push({
            name: 'blog',
            query: { ...this.$route.query, page }
          })
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/_list-article.scss";
</style>
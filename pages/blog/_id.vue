<template>
    <div>
        <div class="blog-detail">
            <h2 class="blog-detail__title"
                v-for="(item, idx) in titleDetail"
                :key="idx"
                v-html="$textConvert(item, '', 'text-gradient-yellow')"
            ></h2>
    
            <div class="blog-detail__img">
                <img :src="banner?.url" :alt="banner?.alt" />
            </div>
    
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div></div>
                <div class="col-span-2">
                    <div
                        v-for="(item, idx) in content"
                        :key="idx"
                    >
                        <div v-if="item.type === 'paragraph'" class="detail-text" v-html="$textConvert(item, '', 'font-medium')">
                            
                        </div>

                        <div v-if="item.type === 'image'" class="detail-img">
                            <img :src="item.url" :alt="item.alt" class="mx-auto">
                        </div>

                        <h3 v-if="item.type === 'preformatted'" class="detail-title">
                            <p>{{ item?.text }}</p>
                        </h3>
                    </div>
    
                    <div class="detail-infor">
                        <div class="flex items-center mb-4 md:mb-0">
                            <nuxt-img
                              provider="prismic"
                              :src="item.data?.logo?.url"
                              :alt="item.data?.logo?.alt"
                            />
                            <p class="detail-infor__name-logo ml-4 mr-3">{{ item.data?.author }}</p>
                        </div>
                        <p class="detail-infor__time">{{ blogDetail?.data?.created_date }}</p>
                    </div>
    
                    <div class="detail-divide"></div>
    
                    <div class="detail-note">
                       
                        <h4 class="detail-note__title">
                            {{ titleFootnote[0]?.text }}
                        </h4>
    
                        <ol 
                            type="1" 
                            class="detail-note__list"
                        >
                            <li v-for="(i, idx) in contentFootnote" :key="idx">{{ i?.text }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <Explore :title="blogDetail?.explore_title" :data="dateExplore"/>
    </div>
</template>

<script>
import Explore from '~/components/blog/Explore.vue';
import { mapState, mapGetters } from 'vuex'
export default {
    components: { Explore },
    async fetch ({ $prismic, store, route, params }) {
      const { data: blogDetail} = await $prismic.api.getByUID('blogs', params.id)
      const { results: getExplore} = await $prismic.api.query([
        $prismic.predicate.at('document.type','blogs')
      ], {
          page: 1,
          pageSize: 6
        }
      );
      store.commit('blog/SET_DATA_DETAIL', blogDetail)
      store.commit('blog/SET_DATA_EXPLORE', getExplore)
    },

    computed: {
      ...mapState('blog', [
        'blogDetail',
        'dateExplore'
      ]),

      ...mapGetters('blog', [
        'titleDetail',
        'banner',
        'content',
        'footnote'
      ]),

      titleFootnote() {
        return this.footnote?.filter(i => i.type === 'paragraph') || []
      },

      contentFootnote() {
        return this.footnote?.filter(i => i.type === 'o-list-item') || []
      }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/pages/_blog-detail.scss";
</style>

<style scoped>
.blog-detail__title :deep(.text-gradient-yellow){
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
</style>
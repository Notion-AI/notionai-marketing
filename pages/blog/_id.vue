<template>
    <div>
        <div class="blog-detail">
            <h2 class="blog-detail__title"
                v-for="(item, idx) in titleDetail"
                :key="idx"
                v-html="$textConvert(item, '', 'text-gradient-yellow')"
            ></h2>
    
            <div class="blog-detail__img">
                <img :src="banner?.url" :alt="banner?.alt" class="mx-auto">
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
                            <p>{{ item.text }}</p>
                        </h3>
                    </div>
    
                    <div class="detail-infor">
                        <div class="flex items-center mb-4 md:mb-0">
                            <img src="~assets/images/logo-mini.png" alt="">
                            <p class="detail-infor__name-logo ml-4 mr-3">Notion Ai</p>
                        </div>
                        <p class="detail-infor__time">{{ blogDetail?.data?.created_date }}</p>
                    </div>
    
                    <div class="detail-divide"></div>
    
                    <div class="detail-note">
                       
                        <h4 class="detail-note__title">
                            {{ titleFootnote[0].text }}
                        </h4>
    
                        <ol 
                            type="1" 
                            class="detail-note__list"
                        >
                            <li v-for="(i, idx) in contentFootnote" :key="idx">{{ i.text }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <Explore :data="dataExplore"/>
    </div>
</template>

<script>
import Explore from '~/components/blog/Explore.vue';
import { mapState, mapGetters } from 'vuex'
export default {
    components: { Explore },
    async fetch ({ $prismic, store, route, params }) {
      // Get all value tag of blogs page
      const blogDetail = await $prismic.api.getByUID('blogs', params.id)

      store.commit('blog/SET_DATA_DETAIL', blogDetail)
    },
    data() {
        return {
            dataExplore: [
                {
                    img: '/images/blog-5.png', 
                    textBtn: 'Press', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                },

                {
                    img: '/images/blog-6.png', 
                    textBtn: 'Social', 
                    title: 'Save senior leaders time by providing fit-for-person media monitoring.',
                    text: "Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },

                {
                    img: '/images/blog-1.png', 
                    textBtn: 'Social', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                },
            ]
        }
    },

    computed: {
      ...mapState('blog', [
        'blogDetail'
      ]),

      ...mapGetters('blog', [
        'titleDetail',
        'banner',
        'content',
        'footnote'
      ]),

      titleFootnote() {
        return this.footnote.filter(i => i.type === 'paragraph')
      },

      contentFootnote() {
        return this.footnote.filter(i => i.type === 'o-list-item')
      }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/pages/_blog-detail.scss";
</style>
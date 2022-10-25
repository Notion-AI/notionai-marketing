<template>
    <div class="blog">
        <Sentences />
        <ListArticle :data="list"/>
    </div>
</template>

<script>
import Sentences from '~/components/blog/Sentences.vue';
import ListArticle from '~/components/blog/ListArticle.vue';
import { mapState, mapGetters } from 'vuex'
import { map, union } from 'lodash'
export default {
    components: { Sentences, ListArticle },
    async fetch ({ $prismic, store }) {
      // Get all value tag of blogs page
      const { results: blogResulst } = await $prismic.api.query(
        $prismic.predicates.at('document.type','blogs')
      );

      const testGetByCategory = await $prismic.api.query([
        $prismic.predicate.at('document.type','blogs'),
        $prismic.predicate.at('my.blogs.author', 'Community')
      ]);

      if (!blogResulst) return
      const tags = union(...map(blogResulst, 'tags'))
      store.commit('blog/SET_DATA', blogResulst)
      store.commit('blog/SET_TAGS', tags)
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    img: '/images/blog-1.png', 
                    textBtn: 'Social', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                    time: '01 OCT 2022'
                },

                {
                    id: 2,
                    img: '/images/blog-2.png', 
                    textBtn: 'Resources', 
                    title: 'Save senior leaders time by providing fit-for-person media monitoring.',
                    text: "Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    time: '01 OCT 2022'
                },

                {
                    id: 3,
                    img: '/images/blog-3.png', 
                    textBtn: 'Resources', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                    time: '01 OCT 2022'
                },

                {
                    id: 4,
                    img: '/images/blog-4.png', 
                    textBtn: 'Events', 
                    title: 'Save senior leaders time by providing fit-for-person media monitoring.',
                    text: "HSentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    time: '01 OCT 2022'
                },

                {
                    id: 5,
                    img: '/images/blog-5.png', 
                    textBtn: 'Press', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                    time: '01 OCT 2022'
                },

                {
                    id: 6,
                    img: '/images/blog-6.png', 
                    textBtn: 'Social', 
                    title: 'Save senior leaders time by providing fit-for-person media monitoring.',
                    text: "Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    time: '01 OCT 2022'
                }
            ]
        }
    },
    computed: {
      ...mapState('blog', [
        'data',
        'tags'
      ])
    }
}
</script>

<style>

</style>
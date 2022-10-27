<template>
    <div class="blog">
      <Sentences />
      <ListArticle />
    </div>
</template>

<script>
import Sentences from '~/components/blog/Sentences.vue';
import ListArticle from '~/components/blog/ListArticle.vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
import { map, union } from 'lodash'
export default {
    components: { Sentences, ListArticle },
    async fetch ({ $prismic, store, route }) {
      // Get all value tag of blogs page
      const blogResulst = await $prismic.api.query(
        $prismic.predicates.at('document.type','blogs')
      );

      let queryPayload = [$prismic.predicate.at('document.type','blogs')]

      if (route?.query?.category && route?.query?.category !== 'All') {
        queryPayload = [...queryPayload, $prismic.predicate.any('document.tags', [ route?.query?.category ] )]
      }

      if (route?.query?.author && route?.query?.author !== 'Latest') {
        queryPayload = [...queryPayload, $prismic.predicate.at('my.blogs.author', route?.query?.author)]
      }

      const getByCategory = await $prismic.api.query(queryPayload, {
          page: 1,
          pageSize: 2
        }
      );

      if (!blogResulst) return
      const tags = union(...map(blogResulst?.results, 'tags'))
      store.commit('blog/SET_DATA', getByCategory)
      store.commit('blog/SET_TAGS', tags)
    },
    data () {
      return {
        currentPage: 1,
        pageSize: 2,
      }
    },

    computed: {
      ...mapState('blog', [
        'data',
        'tags'
      ])
    },

    watch: {
      $route (newVal, oldVal) {
        let queryPayload = [this.$prismic.predicate.at('document.type','blogs')]

        if (newVal?.query?.category && newVal?.query?.category !== 'All') {
          queryPayload = [...queryPayload, this.$prismic.predicate.any('document.tags', [ newVal?.query?.category ] )]
        }

        if (newVal?.query?.author && newVal?.query?.author !== 'Latest') {
          queryPayload = [...queryPayload, this.$prismic.predicate.at('my.blogs.author', newVal?.query?.author)]
        }

        if (newVal?.query?.page) {
          this.currentPage = newVal?.query?.page
        }

        this.$prismic.api.query(queryPayload, {
          page: this.currentPage,
          pageSize: this.pageSize
        }).then(res => {
          this.SET_DATA(res)
        });
      }
    },

    methods: {
      ...mapMutations('blog', [
        'SET_DATA'
      ]),

      getQueryPayload () {}
    }
}
</script>

<style>

</style>
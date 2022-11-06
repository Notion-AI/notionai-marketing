<template>
    <div class="about">
      <div class="black-transparent" v-observe-visibility="visibilityChanged">
        <Intro :title="introduction?.primary?.title" :data="introduction?.items" />
      </div>

      <div class="transparent" v-observe-visibility="visibilityChanged">
        <ThreePillar  
          :teams="teams"
          :contact="contact"
        />
      </div>

      <div class="black-transparent" v-observe-visibility="visibilityChanged">
        <Trusted />
      </div>
    </div>
</template>

<script>
import Intro from '~/components/about/Intro.vue';
import ThreePillar from '~/components/about/ThreePillar.vue';
import Trusted from '~/components/Trusted.vue';
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    components: { Intro, ThreePillar, Trusted },

    async fetch ({ $prismic, store }) {
      const { data: aboutResulst }= await $prismic.api.getSingle('about')
      store.commit('about/SET_DATA', aboutResulst)
    },

    computed: {
      ...mapState('about', [
        'data'
      ]),

      ...mapGetters('about', [
        'introduction',
        'teams',
        'contact'
      ]),
    },

    methods: {
      ...mapMutations(['SET_HEADER_COLOR']),

      visibilityChanged (isVisible, entry) {
        if (isVisible) {
          this.SET_HEADER_COLOR(entry.target.className)
        }
      },
    },
}
</script>

<style>

</style>
<template>
    <div class="about">
      <Intro :title="introduction?.primary?.title" :data="introduction?.items" />
      <ThreePillar  
        :teams="teams"
        :contact="contact"
      />
      <Trusted />
    </div>
</template>

<script>
import Intro from '~/components/about/Intro.vue';
import ThreePillar from '~/components/about/ThreePillar.vue';
import Trusted from '~/components/Trusted.vue';
import { mapState, mapGetters } from 'vuex'

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
    }
}
</script>

<style>

</style>
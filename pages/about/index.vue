<template>
    <div class="about">
        <Intro />
        <ThreePillar :data="data"/>
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

    data() {
      return {
        data: [
          {img: "/images/three-pillar-1.png", name: 'Vinesh Prasad', position: 'Founder & CEO'},
          {img: "/images/three-pillar-2.png", name: 'Snow', position: 'Chief Technology Officer'},
          {img: "/images/three-pillar-3.png", name: 'Jeremy Walker', position: 'Chief Design Officer'}
        ]
      }
    },

    computed: {
      ...mapState('about', [
        'data'
      ]),

      ...mapGetters('about', [
        'introduction',
        'teams',
        'contact'
      ])
    }
}
</script>

<style>

</style>
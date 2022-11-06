<template>
  <div class="plans">
    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <PlanPackage :data="dataPackage" :title="introduction?.primary?.title"/>
    </div>

    <PackageDetail :data="dataDetail"/>

    <div class="transparent" v-observe-visibility="visibilityChanged">
      <Faq />
    </div>

    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <Trusted />
    </div>
  </div>
</template>

<script>
import PlanPackage from '~/components/plans/PlanPackage.vue';
import PackageDetail from '~/components/plans/PackageDetail.vue';
import Faq from '~/components/plans/Faq.vue';
import { mapState, mapGetters, mapMutations } from 'vuex'
import { filter } from 'lodash'

export default {
  components: { PlanPackage, PackageDetail, Faq },
  async fetch ({ $prismic, store }) {
    const { data: plansResulst }= await $prismic.api.getSingle('plans')
    store.commit('plans/SET_DATA', plansResulst)
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('plans', [
      'data'
    ]),
    ...mapGetters('plans', [
      'introduction',
      'itemsPlan'
    ]),

    dataPackage () {
      return filter(this.introduction?.items, item => item.is_active) || []
    },

    dataDetail () {
      return filter(this.itemsPlan?.items, item => item.is_active) || []
    }
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
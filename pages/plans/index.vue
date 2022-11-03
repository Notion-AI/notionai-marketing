<template>
  <div class="plans">
    <PlanPackage :data="dataPackage" :title="introduction?.primary?.title"/>
    <PackageDetail :data="dataDetail"/>
    <Faq />
    <Trusted />
  </div>
</template>

<script>
import PlanPackage from '~/components/plans/PlanPackage.vue';
import PackageDetail from '~/components/plans/PackageDetail.vue';
import Faq from '~/components/plans/Faq.vue';
import { mapState, mapGetters } from 'vuex'
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
  }
}
</script>

<style>

</style>
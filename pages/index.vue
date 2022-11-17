<template>
  <div>
    <HomepageGatherInfor />

    <HomepageSpheresSections />

    <HomepageWhatWould />

    <HomepageLearnHow />

    <Compare
      :campare_title_normal="data.section_14_title_normal"
      :campare_title_highlight="data.section_14_title_highlight"
      :campare_btn_text="data.section_14_btn_text"
      :campare_btn_link="data.section_14_btn_link"
    />

    <Trusted />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch ({ $prismic, store }) {
    const { data: homeResulst }= await $prismic.api.getSingle('home_page')
    store.commit('home/SET_DATA', homeResulst)
  },
  computed: {
    ...mapState('home', ['data'])
  },
}
</script>



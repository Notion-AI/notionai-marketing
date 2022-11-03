<template>
  <div>
    <GatherInfor />
    <GatherInfor2 />
    <GatherInfor3 />
    <Globe />
    <DataGlobe
      :text-left="data.section_4_left_text" 
      image="data-globe-1"    
      :text-right="data.section_4_right_text"
      :text-strong="data.section_4_right_text_bold"
    />

    <DataGlobe
      :text-left="data.section_5_left_text" 
      image="data-globe-2"
      :text-right="data.section_5_right_text"
      :text-strong="data.section_5_right_text_bold"
    />

    <DataGlobe
      :text-left="data.section_5_bottom_left_text" 
      image="data-globe-3"
      :text-right="data.section_5_bottom_right_text"
      :text-strong="data.section_5_bottom_right_text_bold"
    />

    <DataGlobe
      image="data-globe-3"
    />

    <Source :source-number="data.section_6_sources_number"/>
    <Source :type="2"/>
    <Source :type="3"/>

    <DataCluster
      :type="1"
      :cluster-text="data.section_7_title_normal"
      :cluster-text-highlight="data.section_7_title_highlight"
    />
    <DataCluster :type="2"/>
    <DataCluster :type="3"/>

    <FringerData :type="1" />
    <FringerData :type="2" />
    <FringerData
      :type="3"
      :data-text="data.section_8_title_normal"
      :data-text-highlight="data.section_8_title_highlight"
    />
    <FringerData :type="4" />
    <FringerData :type="5" />

    <Datasets />
    <Datasets 
      isText
      :top="5.3125"
      :bottom="5.3125"
      :datasets-text="data.section_9_title_normal"
      :datasets-text-highlight="data.section_9_title_highlight"
    />

    <Ranking
      image="ranking-1"
      :ranking-text="data.section_10_title_normal"
      :ranking-text-highlight="data.section_10_title_highlight"
    />
    <Ranking 
      image="ranking-2" 
      :isText="false"
      :padding="10.5"
    />
    <Ranking 
      :type="2"
      :straight-text="data.section_11_left_title"
      :under-text="data.section_11_right_title"
    />
    <Ranking 
      :type="2"
      :padding="10.5"
      :opacity="false"
      :straight-text="data.section_11_left_title"
      :under-text="data.section_11_right_title"
    />

    <WhatWould />

    <LearnHow />

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
import GatherInfor from "../components/homepage/GatherInfor.vue";
import GatherInfor2 from "../components/homepage/GatherInfor2.vue";
import GatherInfor3 from "../components/homepage/GatherInfor3.vue";
import Globe from "../components/homepage/Globe.vue";
import DataGlobe from "~/components/homepage/DataGlobe.vue";
import Source from "~/components/homepage/Source.vue";
import DataCluster from "~/components/homepage/DataCluster.vue";
import FringerData from "~/components/homepage/FringerData.vue";
import Datasets from "~/components/homepage/Datasets.vue";
import Ranking from "~/components/homepage/Ranking.vue";
import WhatWould from "~/components/homepage/WhatWould.vue";
import LearnHow from "~/components/homepage/LearnHow.vue";
import Compare from "../components/Compare.vue";
import Trusted from "~/components/Trusted.vue";

import { mapState } from 'vuex'

export default {
  components: {
    GatherInfor,
    GatherInfor2,
    GatherInfor3,
    Globe,
    DataGlobe,
    Source,
    DataCluster,
    FringerData,
    Datasets,
    Ranking,
    WhatWould,
    LearnHow,
    Compare,
    Trusted,
  },
  async fetch ({ $prismic, store }) {
    const { data: homeResulst }= await $prismic.api.getSingle('home_page')
    store.commit('home/SET_DATA', homeResulst)
  },
  computed: {
    ...mapState('home', ['data'])
  },
}
</script>



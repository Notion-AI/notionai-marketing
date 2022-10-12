<template>
  <div>
    <GatherInfor />
    <GatherInfor2 />
    <GatherInfor3 />
    <Globe />
    <DataGlobe
      text-left="A new way for professionals and" 
      image="data-globe-1"
      text-right="business to"
      text-strong="understand the world"
    />

    <DataGlobe
      text-left="Prepare your business to see..." 
      image="data-globe-2"
      text-right="stategic issues in"
      text-strong="a new light"
    />

    <DataGlobe
      text-left="Instant AI analysis to... " 
      image="data-globe-3"
      text-right=" create"
      text-strong="data driven intelligence"
    />

    <DataGlobe
      image="data-globe-3"
    />

    <Source />
    <Source :type="2"/>
    <Source :type="3"/>

    <DataCluster :type="1"/>
    <DataCluster :type="2"/>
    <DataCluster :type="3"/>

    <FringerData :type="1" />
    <FringerData :type="2" />
    <FringerData :type="3" />
    <FringerData :type="4" />
    <FringerData :type="5" />

    <Datasets />
    <Datasets 
      isText
      :top="5.3125"
      :bottom="5.3125"
    />

    <Ranking image="ranking-1"/>
    <Ranking 
      image="ranking-2" 
      :isText="false"
      :padding="10.5"
    />
    <Ranking 
      :type="2"
    />
    <Ranking 
      :type="2"
      :padding="10.5"
      :opacity="false"
    />

    <WhatWould />

    <LearnHow />

    <Compare />
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
import Compare from "../components/homepage/Compare.vue";

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
    Compare
}
}
</script>



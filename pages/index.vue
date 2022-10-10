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
  </div>
</template>

<script>
import GatherInfor from "../components/homepage/GatherInfor.vue";
import GatherInfor2 from "../components/homepage/GatherInfor2.vue";
import GatherInfor3 from "../components/homepage/GatherInfor3.vue";
import Globe from "../components/homepage/Globe.vue";
import DataGlobe from "~/components/homepage/DataGlobe.vue";
import Source from "~/components/homepage/Source.vue";

export default {
  components: {
    GatherInfor,
    GatherInfor2,
    GatherInfor3,
    Globe,
    DataGlobe,
    Source
}
}
</script>

<style lang="scss" scoped>

</style>

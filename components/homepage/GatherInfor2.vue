<template>
    <div class="gather-infor-2 gather-infor">
       <div class="container mx-auto">
            <h2 class="gather-infor__title">
                <p>{{data.section_2_title_normal}}</p>
                <p>{{data.section_2_title_highlight}}</p>
            </h2>

            <div class="gather-infor__sub">
                <p>{{data.section_2_description}}</p>
            </div>

            <div class="gather-infor__img">
                <GatherInfor2  class="mx-auto"/>
            </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GatherInfor2 from '~/assets/images/home/gather-infor-2.svg?inline'

export default {
  components: {
    GatherInfor2
  },

  computed: {
    ...mapState('home', ['data'])
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_gather-infor.scss";
</style>

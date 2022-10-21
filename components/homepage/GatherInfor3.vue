<template>
    <div class="gather-infor-3 gather-infor">
       <div class="container mx-auto">
            <h2 class="gather-infor__title">
                <p>{{data.section_3_title_normal}}</p>
                <p>{{data.section_3_title_highlight}}</p>
            </h2>

            <div class="gather-infor__sub">
                <p>{{data.section_2_description}}</p>
            </div>

            <div class="gather-infor__img">
                <img src="~assets/images/home/gather-infor-3.png" alt="" class="mx-auto">
            </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('home', ['data'])
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_gather-infor.scss";
</style>

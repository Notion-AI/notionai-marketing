<template>
    <div class="gather-infor">
       <div class="container mx-auto">
            <h2 class="gather-infor__title">
                <p>{{data.section_1_title_normal}}</p>
                <p>{{data.section_1_title_highlight}}</p>
            </h2>

            <div class="gather-infor__sub">
                <p>{{data.section_1_description}}</p>
            </div>

            <div class="gather-infor_btn">
                <app-button
                    class="mx-auto" 
                    color="outline-white"
                    style="width: 222px"
                >
                  <a :href="data.section_1_btn_link.url" :target="data.section_1_btn_link.target">{{data.section_1_btn_text}}</a>
                </app-button>
            </div>

            <div class="gather-infor__img">
              <client-only>
                <video autoplay loop playsinline muted>
                  <source :src="data?.media?.url" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </client-only>
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

<template>
  <div class="stream">
    <Slogan
      type="stream"
      :slogan_title="dataStream.slogan_title"
      :slogan_text_description="dataStream.slogan_text_description"
      :slogan_text_btn="dataStream.slogan_text_btn"
      :slogan_btn_link="dataStream.slogan_btn_link"
      :slogan_image="dataStream.slogan_image"
      :slogan_media="dataStream.slogan_media"
      :class="`slogan-${$route.name}`"
    />
    <Benefits
      type="stream"
      :benefit_title_highlight="dataStream.benefit_title_highlight"
      :benefit_title_normal="dataStream.benefit_title_normal"
      :benefits="dataStream.benefits"
    />

    <Box v-if="services.length >= 1">
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>{{services[0].title_normal_before}} </span> <span class="text-gradient-yellow">{{services[0].title_highlight}} </span> <span>{{services[0].title_normal_after}}</span>
          </h2>

          <p class="box-sub">
            {{services[0].description}}
          </p>
        </div>
      </template>

      <template v-slot:right>
        <img :src="services[0].image.url" :alt="services[0].image.alt" class="mx-auto" />
      </template>
    </Box>

    <Box v-if="services.length >= 2" background="#F7F7F7" :reverse="window.width < 768 ? true : false">
      <template v-slot:left>
        <img :src="services[1].image.url" :alt="services[1].image.alt" class="mx-auto" />
      </template>

      <template v-slot:right>
        <div>
          <h2 class="box-title">
            <span>{{services[1].title_normal_before}}</span> <span class="text-gradient-yellow">{{services[1].title_highlight}} </span> <span>{{services[1].title_normal_after}} </span>
          </h2>

          <p class="box-sub">{{services[1].description}}</p>
        </div>
      </template>
    </Box>

    <Box v-if="services.length >= 3" isBtn>
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>{{services[2].title_normal_before}} </span> <span class="text-gradient-yellow">{{services[2].title_highlight}} </span>
						<span>{{services[2].title_normal_after}}</span>
          </h2>

          <p class="box-sub">
            {{services[2].description}}
          </p>

          <app-button
            color="gradient-pink"
            style="width: 232px; height: 38px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            <a :href="alertLink.url" :target="alertLink.target">Start your free trial today</a>
          </app-button>
        </div>
      </template>

      <template v-slot:right>
        <img :src="services[2].image.url" :alt="services[2].image.alt" class="mx-auto" />
      </template>
    </Box>

    <Compare
      :campare_title_normal="dataStream.campare_title_normal"
      :campare_title_highlight="dataStream.campare_title_highlight"
      :campare_btn_text="dataStream.campare_btn_text"
      :campare_btn_link="dataStream.campare_btn_link"
    />
    <Aggregate
      type="stream"
      :organisation_title_normal="dataStream.organisation_title_normal"
      :organisation_title_highlight="dataStream.organisation_title_highlight"
      :organisation_btn_enterprise_text="dataStream.organisation_btn_enterprise_text"
      :organisation_tab_left_text="dataStream.organisation_tab_left_text"
      :organisation_tab_right_text="dataStream.organisation_tab_right_text"
    />

    <Trusted />
  </div>
</template>

<script>
import caculatorwidth from '~/utils/caculator-width'
import { mapState, mapGetters } from 'vuex'
import Trusted from '~/components/Trusted.vue'
export default {
    mixins: [caculatorwidth],
    async fetch({ $prismic, store, params }) {
        const { data: streamResulst } = await $prismic.api.getByUID("product_page", "stream_page");
        store.commit("product/SET_DATA_STREAM", streamResulst);
    },
    computed: {
        ...mapState("product", ["dataStream"]),
        ...mapGetters([
          'alert',
        ]),
        services() {
            return this.dataStream.services || [];
        },
        alertLink () {
          return this.alert?.link || {}
        }
    },
    components: { Trusted }
}
</script>

<style>

</style>
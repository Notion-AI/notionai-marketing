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

    <Box
      v-for="service, idx in services"
      :key="idx"
      :background="service.background_color"
      :reverse="(idx % 2 !== 0 && window.width < 768) ? true : false"
    >
      <template v-slot:left>
        <div v-if="idx % 2 === 0">
          <h2 class="box-title">
            <span>{{service.title_normal_before}} </span> <span class="text-gradient-yellow">{{service.title_highlight}} </span> <span>{{service.title_normal_after}}</span>
          </h2>

          <p class="box-sub">
            {{service.description}}
          </p>

          <app-button
            v-if="service?.button_text && service?.button_link"
            color="gradient-pink"
            style="width: 232px; height: 38px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            <a :href="service.button_link.url" :target="service.button_link.target">{{ service?.button_text }}</a>
          </app-button>
        </div>
        <div v-else class="flex justify-center w-full">
          <nuxt-img provider="prismic" :src="service.image.url" :alt="service.image.alt" class="mx-auto" />
        </div>
      </template>

      <template v-slot:right>
        <div v-if="idx % 2 === 0" class="flex justify-center w-full">
          <nuxt-img provider="prismic" :src="service.image.url" :alt="service.image.alt" class="mx-auto" />
        </div>
        <div v-else>
          <h2 class="box-title">
            <span>{{service.title_normal_before}}</span> <span class="text-gradient-yellow">{{service.title_highlight}} </span> <span>{{service.title_normal_after}} </span>
          </h2>

          <p class="box-sub">{{service.description}}</p>

          <app-button
            v-if="service?.button_text && service?.button_link"
            color="gradient-pink"
            style="width: 232px; height: 38px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            <a :href="service.button_link.url" :target="service.button_link.target">{{ service?.button_text }}</a>
          </app-button>
        </div>
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
      :organisation_btn_enterprise_router="dataStream.organisation_btn_enterprise_router"
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
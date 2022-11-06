<template>
  <div class="air">
    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <Slogan
        :slogan_title="data.slogan_title"
        :slogan_text_description="data.slogan_text_description"
        :slogan_text_btn="data.slogan_text_btn"
        :slogan_btn_link="data.slogan_btn_link"
        :slogan_image="data.slogan_image"
        :slogan_media="data.slogan_media"
        :class="`slogan-${$route.name}`"
      />
    </div>

    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <Benefits
        :benefit_title_highlight="data.benefit_title_highlight"
        :benefit_title_normal="data.benefit_title_normal"
        :benefits="data.benefits"
      />
    </div>
    
    <div class="transparent" v-observe-visibility="visibilityChanged">
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
    </div>

    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <Compare
        isAir
        :campare_title_normal="data.campare_title_normal"
        :campare_title_highlight="data.campare_title_highlight"
        :campare_btn_text="data.campare_btn_text"
        :campare_btn_link="data.campare_btn_link"
      />
    </div>
    
    <div class="transparent" v-observe-visibility="visibilityChanged">
      <Aggregate
        :organisation_title_normal="data.organisation_title_normal"
        :organisation_title_highlight="data.organisation_title_highlight"
        :organisation_btn_enterprise_text="data.organisation_btn_enterprise_text"
        :organisation_tab_left_text="data.organisation_tab_left_text"
        :organisation_tab_right_text="data.organisation_tab_right_text"
        :organisation_btn_enterprise_router="data.organisation_btn_enterprise_router"
      />
    </div>
    
    <div class="black-transparent" v-observe-visibility="visibilityChanged">
      <Trusted />
    </div>
  </div>
</template>

<script>
import Compare from '~/components/Compare.vue'
import Aggregate from '~/components/Aggregate.vue'

import caculatorwidth from '~/utils/caculator-width'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: { Compare, Aggregate },
	mixins: [caculatorwidth],

  async fetch ({ $prismic, store, params }) {
    const { data: airResulst }= await $prismic.api.getByUID('product_page', 'air_page')
    store.commit('product/SET_DATA', airResulst)
  },
  data () {
    return {}
  },
  computed: {
    ...mapState('product', ['data']),
    ...mapGetters([
      'alert',
    ]),
    services() {
      return this.data.services || []
    },
    alertLink () {
      return this.alert?.link || {}
    }
  },
  head () {
    return {
      title: `AiR`
    }
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['SET_HEADER_COLOR']),

    visibilityChanged (isVisible, entry) {
      console.log('visibilityChanged', isVisible, entry.target.className)
      if (isVisible) {
        this.SET_HEADER_COLOR(entry.target.className)
      }
    },
  },
}
</script>

<style>
</style>
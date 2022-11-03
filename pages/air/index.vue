<template>
  <div class="air">
    <Slogan
      :slogan_title="data.slogan_title"
      :slogan_text_description="data.slogan_text_description"
      :slogan_text_btn="data.slogan_text_btn"
      :slogan_btn_link="data.slogan_btn_link"
      :slogan_image="data.slogan_image"
      :slogan_media="data.slogan_media"
      :class="`slogan-${$route.name}`"
    />
    <Benefits
      :benefit_title_highlight="data.benefit_title_highlight"
      :benefit_title_normal="data.benefit_title_normal"
      :benefits="data.benefits"
    />
    <Box v-if="services.length >= 1">
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>{{services[0].title_normal_before}} </span> <span class="text-gradient-pink">{{services[0].title_highlight}} </span> <span>{{services[0].title_normal_after}}</span>
          </h2>

          <p class="box-sub">
            {{services[0].description}}
          </p>
        </div>
      </template>

      <template v-slot:right>
        <div class="flex justify-center w-full">
          <nuxt-img src="/images/air/air-1.svg" placeholder="/images/air/air-1-placeholder.png"/>
        </div>
        <!-- <img :src="services[0].image.url" :alt="services[0].image.alt" class="mx-auto" /> -->
      </template>
    </Box>

    <Box v-if="services.length >= 2" background="#F7F7F7" :reverse="window.width < 768 ? true : false">
      <template v-slot:left>
        <!-- <img :src="services[1].image.url" :alt="services[1].image.alt" class="mx-auto" /> -->
        <div class="flex justify-center w-full">
          <nuxt-img src="/images/air/air-2-placeholder.png"/>
        </div>
      </template>

      <template v-slot:right>
        <div>
          <h2 class="box-title">
            <span class="text-gradient-pink">{{services[1].title_highlight}} </span> <span>{{services[1].title_normal_after}} </span>
          </h2>

          <p class="box-sub">{{services[1].description}}</p>
        </div>
      </template>
    </Box>

    <Box v-if="services.length >= 3" isBtn>
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>{{services[2].title_normal_before}} </span> <span class="text-gradient-pink">{{services[2].title_highlight}} </span>
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
        <!-- <img :src="services[2].image.url" :alt="services[2].image.alt" class="mx-auto" /> -->
        <div class="flex justify-center w-full">
          <nuxt-img src="/images/air/air-3-placeholder.png"/>
        </div>
      </template>
    </Box>

    <Compare
      isAir
      :campare_title_normal="data.campare_title_normal"
      :campare_title_highlight="data.campare_title_highlight"
      :campare_btn_text="data.campare_btn_text"
      :campare_btn_link="data.campare_btn_link"
    />
    <Aggregate
      :organisation_title_normal="data.organisation_title_normal"
      :organisation_title_highlight="data.organisation_title_highlight"
      :organisation_btn_enterprise_text="data.organisation_btn_enterprise_text"
      :organisation_tab_left_text="data.organisation_tab_left_text"
      :organisation_tab_right_text="data.organisation_tab_right_text"
      :organisation_btn_enterprise_router="data.organisation_btn_enterprise_router"
    />

    <Trusted />
  </div>
</template>

<script>
import Compare from '~/components/Compare.vue'
import Aggregate from '~/components/Aggregate.vue'

import caculatorwidth from '~/utils/caculator-width'
import { mapState, mapGetters } from 'vuex'

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
  methods: {}
}
</script>

<style>
</style>
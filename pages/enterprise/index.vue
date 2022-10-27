<template>
  <div class="enterprise">
    <SloganEnterprise v-if="intruduction?.primary?.is_active || false"/>

    <TimelineEnterprise
      v-if="benefitsIntro?.primary?.is_active || false"
      :data="itemsBenefitsIntro"
    >
      <p
        v-for="(title, idx) in benefitsIntro?.primary?.title"
        :key="idx"
        v-html="$textConvert(title, '', 'highlight')"
      >
      </p>
    </TimelineEnterprise>

    <Box
      v-for="(service, idx) in itemsService"
      :key="idx"
      :background="service.background_color"
    >
      <template v-slot:left>
        <div v-if="idx % 2 == 0">
          <h2
            v-for="(title, index) in service.title"
            class="box-title"
            v-html="$textConvert(title, 'text-white', 'gradient')"
            :key="index"
          >
          </h2>

          <p class="box-sub">
            {{ service.description }}
          </p>

          <app-button
            v-if="service.button_text"
            color="gradient-violet"
            style="width: 120px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            <a
              v-if="service.button_link"
              :href="service.button_link?.url || ''"
              :target="service.button_link?.target || ''"
            >
              {{ service.button_text }}
            </a>
            <span v-else>
              {{ service.button_text }}
            </span>
          </app-button>
        </div>
        <img v-else :src="service.image?.url" :alt="service.image?.alt" class="mx-auto" />
      </template>

      <template v-slot:right>
        <img v-if="idx % 2 == 0" :src="service.image?.url" :alt="service.image?.alt"  class="mx-auto" />
        <div v-else>
          <h2
            v-for="(title, index) in service.title"
            class="box-title"
            v-html="$textConvert(title, 'text-white', 'gradient')"
            :key="index"
          >
          </h2>

          <p class="box-sub">
            {{ service.description }}
          </p>

          <app-button
            v-if="service.button_text"
            color="gradient-violet"
            style="width: 120px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            <a
              v-if="service.button_link"
              :href="service.button_link?.url || ''"
              :target="service.button_link?.target || ''"
            >
              {{ service.button_text }}
            </a>
            <span v-else>
              {{ service.button_text }}
            </span>
          </app-button>
        </div>
      </template>
    </Box>
    
    <TimelineEnterprise
      :data="itemsBenefitsSecurity"
    >
      <p>Security, control and</p>
      <p>compliance that you expect from</p>
      <p class="gradient">enterprise-grade platforms.</p>
    </TimelineEnterprise>

    <Trusted />
  </div>
</template>

<script>
import SloganEnterprise from '~/components/enterprise/SloganEnterprise.vue'
import TimelineEnterprise from '~/components/enterprise/TimelineEnterprise.vue'
import caculatorwidth from '~/utils/caculator-width'
import Trusted from '~/components/Trusted.vue'
import { mapState, mapGetters } from 'vuex'
import { filter } from 'lodash'

export default {
  components: { SloganEnterprise, TimelineEnterprise, Trusted },
  mixins: [caculatorwidth],
  async fetch ({ $prismic, store }) {
    const { data: enterpriseResulst }= await $prismic.api.getSingle('enterprise')
    store.commit('enterprise/SET_DATA', enterpriseResulst)
  },
  data() {
    return {
      data1: [
        {title: 'Media Monitoring', sub:'Corporate Communications, Affairs, and Marketing'},
        {title: 'Global Practices', sub:'Innovation, Product Development'},
        {title: 'Commercial Platforms', sub:'Sales & Distribution, Intitutional Point of Entry Platforms, Intranet'}
      ],

      data2: [
        {title: 'Secure integration', sub:'Maintain full control of data that arrives and leaves the organisation'},
        {title: 'Service-level agreement', sub:'Fully aligned to your established procurement standards'},
        {title: 'Service', sub:'Dedicated consultant and data scientist'}
      ],
    }
  },
  computed: {
    ...mapState('enterprise', ['data']),

    ...mapGetters('enterprise', [
      'benefitsIntro',
      'intruduction',
      'services',
      'benefitsSecurity'
    ]),

    itemsBenefitsIntro () {
      return this.benefitsIntro?.items || []
    },

    itemsService () {
      return filter(this.services.items, item => item.is_active)
    },

    itemsBenefitsSecurity () {
      return this.benefitsSecurity?.items || []
    },
  }
}
</script>
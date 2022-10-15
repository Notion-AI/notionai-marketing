<template>
  <div class="enterprise">
    <SloganEnterprise />
    <TimelineEnterprise>
      <p class="gradient">Stream for enterprise</p>
      <p>lorem ipsum dolor sit amet</p>
    </TimelineEnterprise>

    <Box background="#100418">
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span class="text-white">Be a champion of saving senior leaders time by providing fit-for-person</span> <span class="gradient">media monitoring.</span>
          </h2>

          <p class="box-sub">
            Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/enterprise/enterprise-2.png" alt="" class="mx-auto" />
      </template>
    </Box>

    <Box background="#291E30" :reverse="window.width < 768 ? true : false">
      <template v-slot:left>
        <img src="~assets/images/enterprise/enterprise-3.png" alt="" class="mx-auto" />
      </template>

      <template v-slot:right>
        <div>
          <h2 class="box-title">
            <span class="text-white">Compare content to your peers and identify gaps for capturing audience engagement with</span> <span class="gradient">Content commissioning.</span>
          </h2>

          <p class="box-sub">
            Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </template>
    </Box>

    <Box isBtn background="#100418">
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span class="text-white">Demonstrate your organisation’s expertise with</span> <span class="gradient">valuable content. </span>
          </h2>

          <p class="box-sub">
           Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <app-button
            nuxt
            to=""
            color="gradient-violet"
            style="width: 120px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            Contact us
          </app-button>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/enterprise/enterprise-4.png" alt="" class="mx-auto" />
      </template>
    </Box>

    <TimelineEnterprise>
      <p>Security, control and</p>
      <p>compliance that you expect from</p>
      <p class="gradient">enterprise-grade platforms.</p>
    </TimelineEnterprise>
  </div>
</template>

<script>
import SloganEnterprise from '~/components/enterprise/SloganEnterprise.vue'
import TimelineEnterprise from '~/components/enterprise/TimelineEnterprise.vue'
import caculatorwidth from '~/utils/caculator-width'

export default {
  components: { SloganEnterprise, TimelineEnterprise },
  mixins: [caculatorwidth]
}
</script>

<style>

</style>
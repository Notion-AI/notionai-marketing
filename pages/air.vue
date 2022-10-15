<template>
  <div class="air">
    <Slogan />
    <Benefits />
    <Box>
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>Configure and train your</span> <span class="gradient">Strategic</span> <span>AI on the go.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/air/box-1.png" alt="" class="mx-auto" />
      </template>
    </Box>

    <Box background="#F7F7F7" :reverse="window.width < 768 ? true : false">
      <template v-slot:left>
        <img src="~assets/images/air/box-2.png" alt="" class="mx-auto" />
      </template>

      <template v-slot:right>
        <div>
          <h2 class="box-title">
            <span class="gradient">Synthesise</span> <span>key themes on your strategic topics.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </template>
    </Box>

    <Box isBtn>
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>Track key</span> <span class="gradient">trends</span>
						<span>and understand how the world is changing around your strategic topics.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <app-button
            nuxt
            to=""
            color="gradient-pink"
            style="width: 232px; height: 38px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            Start your free trial today
          </app-button>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/air/box-3.png" alt="" class="mx-auto" />
      </template>
    </Box>

    <Compare isAir />
    <Aggregate />
  </div>
</template>

<script>
import Compare from '~/components/Compare.vue'
import Aggregate from '../components/Aggregate.vue'

import caculatorwidth from '~/utils/caculator-width'

export default {
  components: { Compare, Aggregate },
	mixins: [caculatorwidth]
}
</script>

<style>
</style>
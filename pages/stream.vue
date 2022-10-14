<template>
  <div class="stream">
    <Slogan type="stream"/>
    <Benefits type="stream" />

    <Box :class="'stream-box'">
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>AI-generated summaries inside regular briefings to quickly</span> <span class="gradient">inform you.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/stream/stream-box-1.png" alt="" class="mx-auto" />
      </template>
    </Box>

    <Box :class="'stream-box'" background="#F7F7F7" :reverse="window.width < 768 ? true : false">
      <template v-slot:left>
        <img src="~assets/images/stream/stream-box-2.png" alt="" class="mx-auto" />
      </template>

      <template v-slot:right>
        <div>
          <h2 class="box-title">
            <span>Drill-down with AI analytics to understand trends and fringe concepts behind</span> <span class="gradient"> big issues.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </template>
    </Box>

    <Box :class="'stream-box'" isBtn>
      <template v-slot:left>
        <div>
          <h2 class="box-title">
            <span>Every big issue dynamically personalised to</span> <span class="gradient">your company and industry in an instant.</span>
          </h2>

          <p class="box-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <app-button
            nuxt
            to=""
            :color="$route.path === '/air' ? 'gradient-pink' : 'gradient-yellow'"
            style="width: 232px; height: 38px"
            class="mb-28 md:mb-0 mx-auto md:ml-0"
          >
            Start your free trial today
          </app-button>
        </div>
      </template>

      <template v-slot:right>
        <img src="~assets/images/stream/stream-box-3.png" alt="" class="mx-auto" />
      </template>
    </Box>
  </div>
</template>

<script>
import caculatorwidth from '~/utils/caculator-width'
export default {
  mixins: [caculatorwidth]
}
</script>

<style>

</style>
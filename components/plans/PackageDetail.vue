<template>
  <div>
    <div v-for="(item, index) in data" :key="index" class="package-detail grid grid-cols-1 xl:grid-cols-2 lg:gap-28"
      :class="item.mode" :style="{
        paddingTop: item.padding_top + 'rem',
        paddingBottom: item.padding_bottom + 'rem',
        background: item.background_color
      }"
      :id="`package-detail-${index}`"
    >
      <div class="des">
        <h2 class="des__slogan">
          <p v-for="(text, idx) in item.slogan" :key="idx"
            v-html="$textConvert(text, '', `text-gradient-${item.gradient}`)">
          </p>
        </h2>
        <app-button class="des__sign-up" style="width: 125px" :color="`gradient-${item.gradient}`">
          <a :href="signUpLink.url" :target="signUpLink.url">Contact us</a>
        </app-button>
      </div>

      <div class="des">
        <h4 class="des__title">{{ item.title }}</h4>

        <p class="des__sub">{{ item.subtitle }}</p>

        <div class="des__benefit">How you’ll benefit</div>

        <ul class="des__benefit-list">
          <li v-for="(i, idx) in item.benefits" :key="idx">
            <img v-if="item.gradient === 'yellow' || item.gradient === 'pink'" src="~assets/images/plans/check.png"
              alt="" />
            <img v-else src="~assets/images/plans/check-violet.png" alt="" />
            <p>{{ i.text }}</p>
          </li>
        </ul>

        <div class="des__price">
          <p v-if="item.price_usd && item.monthly">
            <span class="usd">{{ item.price_usd }}</span>
            <span class="monthly"> / {{ item.monthly }}</span>
          </p>
          <div v-if="item.users && item.topics" class="flex items-center ml-11">
            <app-button color="gray" class="mr-4" style="width: 98px">{{ item.users }} Users</app-button>
            <app-button color="gray" style="width: 98px">{{ item.topics }} Topics</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
      data: {
          type: Array,
          default: () => []
      }
  },

  computed: {
    ...mapGetters(['signUpLink'])
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/components/plans/_package-detail.scss";
</style>

<style scoped>
.des__slogan .text-gradient-yellow {
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.des__slogan :deep(.text-gradient-yellow) {
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}


.des__slogan :deep(.text-gradient-pink) {
  background: -webkit-linear-gradient(247.69deg, #F5C0BE -4.24%, #A3A5EF 191.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.text-gradient-violet {
  background: linear-gradient(252.6deg, #D1A8D0 -62.78%, #9D9AED 119.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.des__slogan :deep(.text-gradient-violet) {
  background: linear-gradient(252.6deg, #D1A8D0 -62.78%, #9D9AED 119.63%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
</style>
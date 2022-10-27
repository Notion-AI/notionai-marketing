<template>
    <div class="slogan-enterprise">
      <h2 class="slogan-enterprise__title">
        <p
          v-for="(title, idx) in getTitles"
          :key="idx"
          v-html="$textConvert(title, '', 'highlight')"
        >
        </p>
      </h2>

      <div class="slogan-enterprise__btn">
        <app-button
          class="mx-auto"
          color="outline-white"
          style="width: 120px"
        >
          <a :href="intruduction.primary.button_link.url" :target="intruduction.primary.button_link.target">
            {{ intruduction.primary.button_text || '' }}
          </a>
        </app-button>
      </div>

      <div class="slogan-enterprise__img">
        <img :src="intruduction.primary.media.url" :alt="intruduction.primary.media.name" class="mx-auto">
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('enterprise', [
      'intruduction'
    ]),


    getTitles () {
      return this.intruduction.primary.title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/enterprise/_slogan-enterprise.scss";
</style>
<template>
    <div class="sentences">
        <div class="flex justify-center">
          <h2 class="sentences__title">
            Sentence here about articles Notion publishes. <span class="text-gradient-yellow">Find what you’re looking for.</span>
          </h2>
        </div>

        <div class="sentences__choose">
            <p class="choose-text">Choose a from these categories</p>
            <div class="flex flex-wrap justify-center">
                <app-button
                  v-for="(category, idx) in tags"
                  :key="idx"
                  nuxt
                  :to="{ name: 'blog', query: { ...$route?.query, category, page: 1 }}"
                  style="min-width: 74px"
                  @click.native="active = idx"
                  :class="{'active': active === idx}"
                >
                  <span>{{ category }}</span>
                </app-button>

                <app-button 
                  nuxt
                  :to="{ name: 'blog', query: { ...$route?.query, category: 'All', page: 1 } }"
                  style="min-width: 100px"
                  @click.native="active = 'all'"
                  :class="{'active': active === 'all'}"
                >
                  <span>All Topics</span>
                </app-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: null
    }
  },
  computed: {
    ...mapState('blog', [
      'tags'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/_sentences.scss";
</style>

<template>
    <div class="sentences">
        <h2 class="sentences__title">
            Sentence here about articles Notion publishes. <span class="text-gradient-yellow">Find what you’re looking for.</span>
        </h2>

        <div class="sentences__choose">
            <p class="choose-text">Choose a from these categories</p>
            <div class="flex flex-wrap">
                <app-button
                  v-for="(category, idx) in tags"
                  :key="idx"
                  nuxt
                  :to="{ name: 'blog', query: { ...$route?.query, category, page: 1 }}"
                  :style="`${$route.query?.category === category ? 'min-width: 74px; background: #000000; color: #fff' : 'min-width: 74px;'}`"
                >
                  {{ category }}
                </app-button>

                <app-button 
                  nuxt
                  :to="{ name: 'blog', query: { ...$route?.query, category: 'All', page: 1 } }"
                  :style="`${(!$route.query?.category || $route.query?.category === 'All') ? 'width: 100px; background: #000000; color: #fff' : 'width: 100px;'}`"
                >All Topics</app-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

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
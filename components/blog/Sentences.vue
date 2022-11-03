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
                  :style="`${$route.query?.category === category ? 'min-width: 74px' : 'min-width: 74px;'}`"
                >
                  <span>{{ category }}</span>
                </app-button>

                <app-button 
                  nuxt
                  :to="{ name: 'blog', query: { ...$route?.query, category: 'All', page: 1 } }"
                  :style="`${(!$route.query?.category || $route.query?.category === 'All') ? 'width: 100px' : 'width: 100px;'}`"
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


<style scoped>
.sentences__title :deep(.text-gradient-yellow){
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
</style>

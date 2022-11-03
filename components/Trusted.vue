<template>
    <div class="trusted">
        <div class="trusted__title">
            <h2>
                <p class="inline-block"> {{ data.feedback_title_normal_before }} </p>
                <span v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="title--gardient-common">{{ data.feedback_title_highlight }}</span>
                <span v-if="$route.path === '/air'" class="title--gradient-pink">{{ data.feedback_title_highlight }}</span>
                <span v-if="$route.path === '/enterprise'" class="title--gradient-violet">{{ data.feedback_title_highlight }}</span>
                <p class="inline-block">{{ data.feedback_title_normal_after }}</p>
                <p class="block">{{ data.feedback_title_normal_line_2 }}</p>
            </h2>
        </div>

        <div class="trusted__carousel" :class="`trusted__carousel--${$route.name}`">
            <client-only>
                <carousel v-bind="options">
                    <slide
                      v-for="(feedback, idx) in feedbacks"
                      :key="idx"
                      class="carousel-item"
                    >
                        <p class="text-feedback">{{ feedback?.content || ''}}</p>
                        <div v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="trusted-line">
                            <span></span>
                        </div>

                        <div v-if="$route.path === '/air'" class="trusted-line trusted-line--pink">
                            <span></span>
                        </div>

                        <div v-if="$route.path === '/enterprise'" class="trusted-line trusted-line--violet">
                            <span></span>
                        </div>

                        <div class="trusted-img">
                            <nuxt-img provider="prismic" :src="feedback?.logo_company?.url" :alt="feedback?.logo_company?.alt"/>
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            options: {
                autoplay: true,
                autoplayHoverPause: true,
                perPage: 1,
                paginationEnabled: false,
                perPageCustom: [[768, 2]],
            }
        }
    },
    computed: {
      ...mapGetters([
        'feedbacks'
      ]),

      ...mapState([
        'layout'
      ]),

      data () {
        return this.layout?.data || {}
      },

      mounted() {
        console.log(this.$refs.feedback);
      }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/trusted";
</style>
<template>
    <div class="trusted">
        <div class="trusted__title">
            <h2>
                <p class="inline-block"> {{ data.feedback_title_normal_before }} </p>
                <span v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="title--gardient-common">{{ data.feedback_title_highlight }}</span>
                <span v-if="$route.path === '/air'" class="title--gradient-pink">{{ data.feedback_title_highlight }}</span>
                <span v-if="$route.path === '/enterprise'" class="title--gardient-violet">{{ data.feedback_title_highlight }}</span>
                <p class="inline-block">{{ data.feedback_title_normal_after }}</p>
            </h2>
        </div>

        <div class="trusted__carousel">
            <client-only>
                <carousel v-bind="options">
                    <slide v-for="(feedback,idx) in feedbacks" :key="idx" class="carousel-item">
                        <p class="text-xs lg: text-xl">{{ feedback.content }}</p>
                    </slide>
                </carousel>
            </client-only>
        </div>

        <div class="trusted-text grid grid-cols-2 gap-4 lg:gap-32">

            
        </div>

        <div v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="trusted-line grid grid-cols-2 lg:gap-32">
            <span></span>
            <span class="hidden lg:block"></span>
        </div>

        <div v-if="$route.path === '/air'" class="trusted-line trusted-line--pink grid grid-cols-2 lg:gap-32">
            <span></span>
            <span class="hidden lg:block"></span>
        </div>

        <div v-if="$route.path === '/enterprise'" class="trusted-line trusted-line--violet grid grid-cols-2 lg:gap-32">
            <span></span>
            <span class="hidden lg:block"></span>
        </div>

        <div class="trusted-img grid grid-cols-2 gap-4 lg:gap-32">
            <img
              v-for="(feedback,idx) in feedbacks"
              :key="idx"
              :src="feedback.logo_company.url"
              :alt="feedback.logo_company.alt"
            >
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
      }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/trusted";
</style>
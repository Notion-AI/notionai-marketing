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
<<<<<<< HEAD
                    <slide class="carousel-item">
                        <p class="text-feedback">“Notion provides us with strategically relevant information that allows us to develop greater insights for decision-making for both emerging strategic trends and current events. It's a service that is strategically aligned and a useful tool for leaders.”</p>
                        <div v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="trusted-line">
                            <span></span>
                            <!-- <span class="hidden lg:block"></span> -->
                        </div>

                        <div v-if="$route.path === '/air'" class="trusted-line trusted-line--pink">
                            <span></span>
                            <!-- <span class="hidden lg:block"></span> -->
                        </div>
=======
                    <slide v-for="(feedback,idx) in feedbacks" :key="idx" class="carousel-item">
                        <p class="text-xs lg: text-xl">{{ feedback.content }}</p>
                    </slide>
                </carousel>
            </client-only>
        </div>
>>>>>>> a39788d18f6e2c73efcbdaa0752ae10a2c8b404e

                        <div v-if="$route.path === '/enterprise'" class="trusted-line trusted-line--violet">
                            <span></span>
                        </div>

                        <div class="trusted-img">
                            <img src="~assets/images/craig-walker.png" alt="">
                        </div>
                    </slide>

                    <slide>
                        <p class="text-feedback">“A global review of thematics and practices in life insurance advice led to four ideas that informed the design strategy for Advice solutions.”</p>
                        
                        <div v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="trusted-line">
                            <span></span>
                        </div>

                        <div v-if="$route.path === '/air'" class="trusted-line trusted-line--pink">
                            <span></span>
                        </div>

                        <div v-if="$route.path === '/enterprise'" class="trusted-line trusted-line--violet">
                            <span></span>
                        </div>

<<<<<<< HEAD
                        <div class="trusted-img">
                            <img src="~assets/images/anz.png" alt="">
                        </div>
                    </slide>
                </carousel>
            </client-only>
=======
        <div class="trusted-img grid grid-cols-2 gap-4 lg:gap-32">
            <img
              v-for="(feedback,idx) in feedbacks"
              :key="idx"
              :src="feedback.logo_company.url"
              :alt="feedback.logo_company.alt"
            >
>>>>>>> a39788d18f6e2c73efcbdaa0752ae10a2c8b404e
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
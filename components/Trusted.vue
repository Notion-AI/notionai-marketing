<template>
    <div class="trusted">
        <div class="trusted__title">
            <h2>
                <p class="inline-block"> We’re </p>
                <span v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="title--gardient-common">trusted</span>
                <span v-if="$route.path === '/air'" class="title--gradient-pink">trusted</span>
                <span v-if="$route.path === '/enterprise'" class="title--gardient-violet">trusted</span>
                <p class="inline-block">by leading</p>
            </h2>
            <h2>professionals and businesses globally.</h2>
        </div>

        <div class="trusted__carousel">
            <client-only>
                <carousel v-bind="options">
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

                        <div class="trusted-img">
                            <img src="~assets/images/anz.png" alt="">
                        </div>
                    </slide>
                </carousel>
            </client-only>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/trusted";
</style>
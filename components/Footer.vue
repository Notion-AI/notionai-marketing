<template>
    <footer class="footer" id="footer">
        <div class="footer__title">
            <h2>
                <p class="inline-block"> We’re </p>
                <span v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="title--gardient-common">trusted</span>
                <span v-if="$route.path === '/air'" class="title--gardient-pink">trusted</span>
                <span v-if="$route.path === '/enterprise'" class="title--gardient-violet">trusted</span>
                <p class="inline-block">by leading</p>
            </h2>
            <h2>professionals and businesses globally.</h2>
        </div>

        <div class="footer__timeline">
            <div class="timeline-text grid grid-cols-2 gap-4 lg:gap-32">
                <p>“Notion provides us with strategically relevant information that allows us to develop greater insights for decision-making for both emerging strategic trends and current events. It's a service that is strategically aligned and a useful tool for leaders.”</p>

                <p>“A global review of thematics and practices in life insurance advice led to four ideas that informed the design strategy for Advice solutions.”</p>
            </div>

            <div v-if="$route.path === '/' || $route.path === '/stream' || $route.path === '/plans' || $route.path === '/about'" class="timeline-line grid grid-cols-2 gap-4 lg:gap-32">
                <span></span>
                <span></span>
            </div>

            <div v-if="$route.path === '/air'" class="timeline-line timeline-line--pink grid grid-cols-2 gap-4 lg:gap-32">
                <span></span>
                <span></span>
            </div>

            <div v-if="$route.path === '/enterprise'" class="timeline-line timeline-line--violet grid grid-cols-2 gap-4 lg:gap-32">
                <span></span>
                <span></span>
            </div>

            <div class="timeline-img grid grid-cols-2 gap-4 lg:gap-32">
                <img src="~assets/images/craig-walker.png" alt="">
                <img src="~assets/images/anz.png" alt="">
            </div>
        </div>

        <div class="footer__location lg:flex">
            <n-link to="/" class="footer-logo"><img src="~assets/images/logo.png" alt=""></n-link>
            <div class="location">
                <div class="location-address">
                    <p class="mb-1 font-medium">Location</p>
                    <div>
                        <p>Bay 7, Sydney Harbour Bridge Warehouses,</p>
                        <p>Middlemiss Street, Lavender Bay NSW 2060</p>
                        <p>Australia</p>
                    </div>
                </div>

                <div class="flex items-center">
                    <app-button
                        class="btn-contact"
                        color="outline-white"
                        style="width: 5.9375rem; height: 2.375rem"
                    ><n-link to="">Contact</n-link></app-button>
                    <n-link to="" class="mr-3.5"><img src="~assets/images/LinkedIn.png" alt=""></n-link>
                    <n-link to=""><img src="~assets/images/Instagram.png" alt=""></n-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    mounted() {
        document.getElementById('footer').className = 'footer'
        document.getElementById('footer').classList.add(this.$route.name)
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_footer.scss";
</style>
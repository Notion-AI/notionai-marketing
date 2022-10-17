<template>
    <footer class="footer" id="footer">
        <div class="footer__location lg:flex">
            <n-link to="/" class="footer-logo"><img :src="logo.url" :alt="logo.alt"></n-link>
            <div class="location">
                <div class="location-address">
                    <p class="mb-1 font-medium">{{ locationTitle }}</p>
                    <div class="location-address__detail">
                        <p v-html="locationDescription"></p>
                    </div>
                </div>

                <div class="flex items-center">
                    <app-button
                        class="btn-contact"
                        color="outline-white"
                        style="width: 90px"
                    >
                      <a :href="emailContact">Contact</a>
                    </app-button>
                    <a v-for="(s, idx) in socials" :key="idx" :href="s.link.url" :target="s.link.target" class="mr-8 md:mr-5" >
                      <img :src="s.icon_image.url" :alt="s.icon_image.alt">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
      ...mapState(['layout']),
      ...mapGetters([
        'footer',
        'logo',
        'emailContact'
      ]),

      locationTitle () {
        return this.footer?.location[0].title[0]?.text || ''
      },

      locationDescription () {
        return this.footer?.location[0].description[0]?.text || ''
      },

      socials () {
        return this.footer?.socials?.filter(s => s.is_active) || []
      }
    },

    mounted() {
        document.getElementById('footer').className = 'footer'
        document.getElementById('footer').classList.add(this.$route.name)
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_footer.scss";
</style>
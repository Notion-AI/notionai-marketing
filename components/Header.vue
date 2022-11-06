<template>
    <header>
        <div v-if="isShowAlert" class="header-join">
            {{ alertTitle }} <a :href="alertLink.url" :target="alertLink.target">{{alertTitleLink}}</a>
        </div>
        <div 
            class="header" id="header" 
            :class="{'transparent': scrollUp, 'header--blog': isBlog}"
        >
            <div class="header__logo">
                <n-link to="/" v-if="scrollUp || isBlog">
                  <nuxt-img provider="prismic" :src="logoBlack.url" :alt="logoBlack.alt"/>
                </n-link>
                <n-link to="/" v-else>
                  <nuxt-img provider="prismic" :src="logo.url" :alt="logo.alt"/>
                </n-link>
            </div>

            <div class="header__desktop hidden xl:flex">
                <n-link
                    v-for="(item, idx) in navigator" :key="idx"
                    :to="{ name: item.routers_name }"
                    :class="item.routers_name === $route.name ? `${item.routers_name}-active` : ''"
                >
                    <span>{{ item.name[0]?.text || '' }}</span>
                </n-link>
                <app-button
                    class="login-btn"
                    color="outline-white"
                    style="width: 102px; height: 30px;"
                >
                    <a :href="alertLink.url" :target="alertLink.target">Login</a>
                </app-button>
            </div>

            <div class="header__mobile xl:hidden">
                <n-link v-if="scrollUp" to="" @click.native="isMenu = true">
                    <img src="~assets/images/menu-black.png" alt="">
                </n-link>
                <n-link v-else to="" @click.native="isMenu = true">
                    <img src="~assets/images/icon-menu.png" alt="">
                </n-link>

                <transition name="fade">
                    <div v-if="isMenu" class="mobile-list">
                        <div class="mobile-list__action">
                            <n-link to="/">
                              <!-- <img src="~assets/images/logo-mobile.png" alt="" class="logo-mobile" /> -->
                              <nuxt-img provider="prismic" :src="logo.url" :alt="logo.alt" class="logo-mobile"/>
                            </n-link>
                            <n-link 
                              to=""
                              @click.native="isMenu = false"
                            >
                              <img src="~assets/images/icon-close.png" alt="">
                            </n-link>
                        </div>

                        <ul class="mobile-list__menu">
                            <li><a :href="alertLink.url" :target="alertLink.target">Start your free trial today</a></li>
                            <li v-for="(item, idx) in navigator" :key="idx" @click="handleClickMenu()">
                            <n-link :to="{ name: item.routers_name }">
                                {{ item.name[0]?.text || '' }}
                            </n-link>
                            </li>
                        </ul>

                        <div class="mobile-list__login">
                            <app-button 
                                class="w-full md:w-6/12 mx-auto"
                                color="outline-white"
                            >
                                <a :href="alertLink.url" :target="alertLink.target">Login</a>
                            </app-button>

                            <p class="trial text-white">
                                <a :href="alertLink.url" :target="alertLink.target">Start your free trial today</a>
                            </p>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState,  mapGetters } from 'vuex'

export default {
    data() {
       return {
           isMenu: false,
           prev: null,
           scrollUp: false,
           isBlog: false
       }
    },

    computed: {
      ...mapState([
        'color'
      ]),
      ...mapGetters([
        'navigator',
<<<<<<< HEAD
        'alert',
        'logo',
        'logoBlack'
=======
        'alert'
>>>>>>> 041de9f (dynamic header bg color)
      ]),

      isShowAlert () {
        return this.alert?.is_active || false
      },

      alertTitle () {
        return this.alert?.title[0]?.text || ''
      },

      alertTitleLink () {
        return this.alert?.title_link[0]?.text || ''
      },

      alertLink () {
        return this.alert?.link || {}
      }
    },

    created() {
        if(this.$route.name === 'blog' || this.$route.name === 'blog-id') {
            this.isBlog = true
        }
    },

    // watch: { 
    //     '$route.name': {
    //         handler(value) {
    //             value === 'blog' || value === 'blog-id' ? this.scrollUp = true : this.scrollUp = false
    //         },
    //         deep: true,
    //         immediate: true
    //     }
    // },

    watch: {
      isMenu(newValue) {
        if (newValue) {
          document.documentElement.style.overflow = "hidden"
          document.documentElement.style.position = "fixed"
        } else {
          document.documentElement.style.overflow = "auto"
          document.documentElement.style.position = "unset"
        }
      }
    },

    mounted() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleNavigation(e));
        window.addEventListener('resize', this.windowHeight())
    },

    methods: {
        handleNavigation(e) {
            const window = e.currentTarget;

            // if(this.$route.name === 'blog' || this.$route.name === 'blog-id') {
            //     this.scrollUp = true
            // } else {
            //     if (this.prev > window.scrollY) {
            //     this.scrollUp = true
            //     } else if (this.prev < window.scrollY) {
            //         this.scrollUp = false
            //     }

            //     if(window.scrollY === 0) {
            //         this.scrollUp = false
            //         document.getElementById('header').classList.remove("transparent")
            //     }
            // }
            if (this.prev > window.scrollY) {
                this.scrollUp = true
            } else if (this.prev < window.scrollY) {
                this.scrollUp = false
            }

            if(window.scrollY === 0) {
                this.scrollUp = false
                document.getElementById('header').classList.remove("transparent")
            }
            this.prev = window.scrollY;
        },

        handleClickMenu() {
            this.isMenu = false
        },

        windowHeight(){
            const doc = document.documentElement
            doc.style.setProperty('--window-height', `${window.innerHeight}px`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_header.scss";
</style>
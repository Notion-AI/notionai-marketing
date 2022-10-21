<template>
    <header>
        <div v-if="isShowAlert" class="header-join">
            {{ alertTitle }} <a :href="alertLink.url" :target="alertLink.target">{{alertTitleLink}}</a>
        </div>
        <div class="header" id="header" :class="{'transparent': scrollUp}">
            <div class="header__logo">
                <n-link to="/" v-if="scrollUp"><img src="~assets/images/logo-black.png" alt=""></n-link>
                <n-link to="/" v-else><img src="~assets/images/logo.png" alt=""></n-link>
            </div>

            <div class="header__desktop hidden xl:flex">
                <n-link
                    v-for="(item, idx) in navigator" :key="idx"
                    :to="{ name: item.routers_name }"
                    :class="item.routers_name === $route.name ? `${item.routers_name}-active` : ''"
                >
                    {{ item.name[0]?.text || '' }}
                </n-link>
                <app-button
                    class="login-btn"
                    color="outline-white"
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

                <div v-if="isMenu" class="mobile-list">
                    <div class="mobile-list__action">
                        <n-link to="/"><img src="~assets/images/logo-mobile.png" alt=""></n-link>
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
                          class="w-full"
                          color="outline-white"
                        >
                          <a :href="alertLink.url" :target="alertLink.target">Login</a>
                        </app-button>

                        <p class="trial text-white">
                          <a :href="alertLink.url" :target="alertLink.target">Start your free trial today</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
       return {
           isMenu: false,
           prev: null,
           scrollUp: false
       }
    },

    computed: {
      ...mapGetters([
        'navigator',
        'alert',
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

    mounted() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleNavigation(e));
    },

    methods: {
        handleNavigation(e) {
            const window = e.currentTarget;

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
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_header.scss";
</style>
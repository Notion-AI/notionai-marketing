<template>
    <header>
        <div class="header-join">
            Get early access to the next generation of AI-augmented executive intelligence products. <n-link to="">Join the Lab</n-link>
        </div>
        <div class="header" id="header" :class="{'transparent': scrollUp}">
            <div class="header__logo">
                <n-link to="/" v-if="scrollUp"><img src="~assets/images/logo-black.png" alt=""></n-link>
                <n-link to="/" v-else><img src="~assets/images/logo.png" alt=""></n-link>
            </div>

            <div class="header__desktop hidden lg:flex">
                <n-link 
                    v-for="(i, idx) in dataHeader" :key="idx"
                    :to="i.route"
                    :class="i.route === $route.path ? i.class : ''"
                >
                    {{i.text}}
                </n-link>
                <app-button
                    color="outline-white"
                >
                    <n-link to="/login">Login</n-link>
                </app-button>
            </div>

            <div class="header__mobile lg:hidden">
                <n-link to="" @click.native="isMenu = true"><img src="~assets/images/icon-menu.png" alt=""></n-link>

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
                        <li><n-link to="">Start your free trial today</n-link></li>
                        <li><n-link to="">Stream</n-link></li>
                        <li><n-link to="">AiR</n-link></li>
                        <li><n-link to="">Enterprise</n-link></li>
                        <li><n-link to="">Plans</n-link></li>
                        <li><n-link to="">Blog</n-link></li>
                        <li><n-link to="">About</n-link></li>
                    </ul>

                    <div class="mobile-list__login">
                        <app-button 
                            class="w-full"
                            color="outline-white"
                        >Login</app-button>

                        <p class="trial text-white"><n-link to="">Start your free trial today</n-link></p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
       return {
           dataHeader: [
               {text: 'Stream', class: 'stream-active', route: '/stream'},
               {text: 'AiR', class: 'air-active', route: '/air'},
               {text: 'Enterprise', class: 'enterprise-active', route: '/enterprise'},
               {text: 'Plans', class: 'plans-active', route: '/plans'},
               {text: 'Blog', class: 'blog-active', route: '/blog'},
               {text: 'About', class: 'about-active', route: '/about'}
           ],

           isMenu: false,
           prev: null,
           scrollUp: false
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_header.scss";
</style>
<template>
  <div class="learn-how">
    <div class="container mx-auto">
        <div class="learn-how__title">
            <p>{{data.section_13_title}}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 md: gap-5">
            <div v-for="(prod,idx) in data.section_list_products" :key="idx" class="learn-how__item">
                <h2 class="item-title">{{prod.title}}</h2>

                <div class="item-text">
                    <p>{{prod.description}}</p>
                </div>

                <div class="item-btn">
                    <app-button
                        class="mx-auto"
                        nuxt
                        :to="{ 'name': prod.router_link }"
                        :color="`${idx === 0 ? 'gradient-yellow' : 'gradient-violet'}`"
                        style="width: 128px"
                    ><span>{{prod.button_text}}</span></app-button>
                </div>

                <div :class="`${idx === 0 ? 'item-border-yellow' : 'item-border-violet'}`"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['data'])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_learn-how.scss";
</style>
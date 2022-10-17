<template>
    <div class="sentences">
        <h2 class="sentences__title">
            <p>Sentence here about</p>
            <p>articles Notion publishes.</p>
            <p class="text-gradient-yellow">Find what you’re looking for.</p>
        </h2>

        <div class="choose">
            <span>Choose a from these categories</span>
            <app-button nuxt to="">Press</app-button>
            <app-button nuxt to="">Blog</app-button>
            <app-button nuxt to="">Social</app-button>
            <app-button nuxt to="">Events</app-button>
            <app-button nuxt to="">Resources</app-button>
            <app-button nuxt to="">All Topics</app-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/blog/_sentences.scss";
</style>
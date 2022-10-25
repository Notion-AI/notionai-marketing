<template>
    <div class="sentences">
        <h2 class="sentences__title">
            Sentence here about articles Notion publishes. <span class="text-gradient-yellow">Find what you’re looking for.</span>
        </h2>

        <div class="sentences__choose">
            <p class="choose-text">Choose a from these categories</p>
            <div class="flex flex-wrap">
                <app-button 
                nuxt to=""
                style="width: 74px"
                >Press</app-button>

                <app-button 
                    nuxt to=""
                    style="width: 74px"
                >Blog</app-button>

                <app-button 
                    nuxt to=""
                    style="width: 74px"
                >Social</app-button>

                <app-button 
                    nuxt to=""
                    style="width: 74px"
                >Events</app-button>

                <app-button 
                    nuxt to=""
                    style="width: 110px"
                >Resources</app-button>

                <app-button 
                    nuxt to=""
                    style="width: 100px; background: #000000; color: #fff"
                >All Topics</app-button>
            </div>
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
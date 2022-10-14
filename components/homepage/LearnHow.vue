<template>
  <div class="learn-how">
    <div class="container mx-auto">
        <div class="learn-how__title">
            <p>Learn how much depth</p>
            <p>you can go into with our products?</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 md: gap-5">
            <div class="learn-how__item">
                <h2 class="item-title">Stream</h2>

                <div class="item-text">
                    <p>Quick analysis via daily briefings</p>
                    <p>and personlised analysis</p>
                </div>

                <div class="item-btn">
                    <app-button
                        class="mx-auto"
                        nuxt
                        to=""
                        color="gradient-yellow"
                        style="width: 128px"
                    >Learn More</app-button>
                </div>

                <div class="item-border-yellow"></div>
            </div>

            <div class="learn-how__item">
                <h2 class="item-title">AiR</h2>

                <div class="item-text">
                    <p>Detailed synthesis, thematics</p>
                    <p>and trends on global topics</p>
                </div>

                <div class="item-btn">
                    <app-button
                        class="mx-auto"
                        nuxt
                        to=""
                        color="gradient-violet"
                        style="width: 128px"
                    >Learn More</app-button>
                </div>

                <div class="item-border-violet"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_learn-how.scss";
</style>
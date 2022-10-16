<template>
    <div class="slogan">
        <div class="container mx-auto">
            <h2 v-if="type === 'air'" class="slogan__title air">
                <p><span>AiR,</span></p>
                <p>AI Research for teams</p>
            </h2>

            <h2 v-if="type === 'stream'" class="slogan__title stream">
                <p><span>Stream,</span> dynamically</p>
                <p>personalised briefing for you.</p>
            </h2>

            <div v-if="type === 'air'" class="slogan__sub">
                <p>Radically improve your research process with</p>
                <p>an AI-augmented research workflow.</p>
            </div>

            <div v-if="type === 'stream'" class="slogan__sub">
                <p>A platform designed to give you direct access to a global source of content and</p>
                <p>help you synthsise the themes, trends and changes affecting your organisation.</p>
            </div>

            <div class="slogan__btn">
                <app-button
                    class="mx-auto"
                    color="outline-white"
                    style="width: 190px;"
                >Sign up for free trial</app-button>
            </div>

            <div class="slogan__img">
                <img v-if="type === 'air'" src="~assets/images/air/ai.png" alt="" class="mx-auto" />
                <img v-if="type === 'stream'" src="~assets/images/stream/stream-dynamic-1.png" alt="" class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'air'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_slogan.scss";
</style>
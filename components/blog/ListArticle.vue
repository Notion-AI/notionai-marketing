<template>
    <div class="list-article">
        <div class="grid grid-cols-1 lg:grid-cols-5">
            <div>
                <n-link to="">Latest</n-link>
                <n-link to="">From Notion Ai</n-link>
                <n-link to="">Community</n-link>
                <n-link to="">Events</n-link>
                <n-link to="">Resources</n-link>
            </div>

            <div class="col-span-2">
                <img src="images/blog/blog-1.png" alt="">
                <app-button>Social</app-button>

                <h3>Build a team dashboard to measure your startup team’s performance</h3>
                <p>Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.</p>

                <div>
                    <img src="~assets/images/logo-mini.png" alt="">
                    <span>Notion Ai</span>
                    <span>01 OCT 2022</span>
                </div>
            </div>

            <div class="cols-span-2">
                <img src="images/blog/blog-2.png" alt="">
                <app-button>Social</app-button>

                <h3>Build a team dashboard to measure your startup team’s performance</h3>
                <p>Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.</p>

                <div>
                    <img src="~assets/images/logo-mini.png" alt="">
                    <span>Notion Ai</span>
                    <span>01 OCT 2022</span>
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
@import "~/assets/scss/components/blog/_list-article.scss";
</style>
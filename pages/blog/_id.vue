<template>
    <div>
        <div class="blog-detail">
            <h2 class="blog-detail__title">
                <span class="text-gradient-yellow">Article title goes here.</span> 
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
            </h2>
    
            <div class="blog-detail__img">
                <img src="~assets/images/blog/blog-detail-1.png" alt="" class="mx-auto">
            </div>
    
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div></div>
                <div class="col-span-2">
                    <div class="detail-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
    
                    <div class="detail-img">
                        <img src="~assets/images/blog/blog-detail-2.png" alt="" class="mx-auto">
                    </div>
    
                    <div class="detail-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
    
                    <h3 class="detail-title lg:hidden">
                        <p>Pull qoute/breakout text goes here.
                        Lorem ipsum dolor sit amet, consect
                        adipiscing elit,sed do eiusmod tempor
                        incididunt ut labore et dolore magna.</p>
                    </h3>
    
                    <h3 class="detail-title hidden xl:block">
                        <p>Pull qoute/breakout text goes here.</p>
                        <p>Lorem ipsum dolor sit amet, consect</p>
                        <p>adipiscing elit,sed do eiusmod tempor</p>
                        <p>incididunt ut labore et dolore magna.</p>
                    </h3>
    
                    <div class="detail-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
    
                    <div class="detail-infor">
                        <div class="flex items-center mb-4 md:mb-0">
                            <img src="~assets/images/logo-mini.png" alt="">
                            <p class="detail-infor__name-logo ml-4 mr-3">Notion Ai</p>
                        </div>
                        <p class="detail-infor__time">Article published on XX Month, 2022</p>
                    </div>
    
                    <div class="detail-divide"></div>
    
                    <div class="detail-note">
                        <h4 class="detail-note__title">Footnote</h4>
    
                        <ol type="1" class="detail-note__list">
                            <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <Explore :data="dataExplore"/>
    </div>
</template>

<script>
import Explore from '~/components/blog/Explore.vue';
export default {
    components: { Explore },
    data() {
        return {
            dataExplore: [
                {
                    img: '/images/blog-5.png', 
                    textBtn: 'Press', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                },

                {
                    img: '/images/blog-6.png', 
                    textBtn: 'Social', 
                    title: 'Save senior leaders time by providing fit-for-person media monitoring.',
                    text: "Sentence here that speaks to product feature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },

                {
                    img: '/images/blog-1.png', 
                    textBtn: 'Social', 
                    title: 'Build a team dashboard to measure your startup team’s performance',
                    text: "Having a dashboard helps keep your team aligned, and driving toward your goals. Here's how to build one.",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/_blog-detail.scss";
</style>
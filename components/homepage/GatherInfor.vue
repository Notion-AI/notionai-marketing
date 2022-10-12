<template>
    <div class="gather-infor">
       <div class="container mx-auto">
            <h2 class="gather-infor__title">
                <p>Gather information</p>
                <p>faster, cheaper and better.</p>
            </h2>

            <div class="gather-infor__sub">
                <p>A platform that gives you AI-curated access to global sources of</p>
                <p>content and helps you synthesise themes, trends and brands affecting</p>
                <p>the reputation, risk and revenues of your organisation.</p>
            </div>

            <div class="gather-infor_btn">
                <app-button
                    class="mx-auto" 
                    color="outline-white"
                    style="height: 2.375rem; width: 13.875rem"
                >Start your free trial today</app-button>
            </div>

            <div class="gather-infor__img">
                <img src="~assets/images/home/gather-infor-1.png" alt="" class="mx-auto">
            </div>
       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_gather-infor.scss";
</style>

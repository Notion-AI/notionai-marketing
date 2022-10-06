<template>
    <div class="header">
        <div class="header__logo">
            <img src="~assets/images/logo.png" alt="">
        </div>

        <div class="header__menu">
            <n-link to="">Stream</n-link>
            <n-link to="">AiR</n-link>
            <n-link to="">Enterprise</n-link>
            <n-link to="">Plans</n-link>
            <n-link to="">Blog</n-link>
            <n-link to="">About</n-link>
            <app-button color="outline-white">
                Login
            </app-button>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_header.scss";
</style>
<template>
    <div class="package-item">

    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/plans/package-item";
</style>
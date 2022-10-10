<template>
    <div 
        class="fringer-data" 
        :style="{paddingTop: paddingTop + 'px' , paddingBottom: paddingBottom + 'px'}"
    >
        <div class="container mx-auto">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        paddingTop: {
            type: String,
            default: ''
        },

        paddingBottom: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>
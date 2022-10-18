<template>
    <div class="blog">
        <Sentences />
        <ListArticle />
    </div>
</template>

<script>
import Sentences from '~/components/blog/Sentences.vue';
import ListArticle from '../components/blog/ListArticle.vue';
export default {
    components: { Sentences, ListArticle }
}
</script>

<style>

</style>
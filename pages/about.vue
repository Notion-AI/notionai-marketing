<template>
    <div class="about">
        <Intro />
        <ThreePillar :data="data"/>
        <Trusted />
    </div>
</template>

<script>
import Intro from '~/components/about/Intro.vue';
import ThreePillar from '../components/about/ThreePillar.vue';
import Trusted from '~/components/Trusted.vue';

export default {
    components: { Intro, ThreePillar, Trusted },

    data() {
        return {
            data: [
                {img: "/images/three-pillar-1.png", name: 'Vinesh Prasad', position: 'Founder & CEO'},
                {img: "/images/three-pillar-2.png", name: 'Snow', position: 'Chief Technology Officer'},
                {img: "/images/three-pillar-3.png", name: 'Jeremy Walker', position: 'Chief Design Officer'}
            ]
        }
    }
}
</script>

<style>

</style>
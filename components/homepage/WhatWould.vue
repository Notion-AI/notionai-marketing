<template>
  <div class="what-would">
    <div class="container mx-auto">
        <h2 class="what-would__title">
            <p>What would you like to</p>
            <p>better <span>understand today?</span></p>
        </h2>

        <p class="what-would__sub">Top 50 trending topics</p>

        <div class="what-would__content">
            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in data1" 
                    :key="idx"
                >
                    {{ i }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>

            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in data2" 
                    :key="idx"
                >
                    {{ i }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>

            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in data3" 
                    :key="idx"
                >
                    {{ i }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>

            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in data4" 
                    :key="idx"
                >
                    {{ i }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>

            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in data5" 
                    :key="idx"
                >
                    {{ i }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>
        </div>

        <app-button
            nuxt
            to=""
            color="gradient-yellow"
            style="width: 228px"
        >Start your free trial today</app-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data1: [
                'Bill Murray',
                'Joan of Arc',
                'Cuba Godding Jr.',
                'Steve Jobs',
                'Jesus Christ',
                'Aretha Franklin', 
            ],

            data2: [
                'Xi Jinping',
                'Winston Churchill',
                'ASX',
                'The Pope',
                'Elvis Presley',
                'Baz Luhrmann',
                'Tesla',
                'Spotify',
            ],

            data3: [
                'Google Trends',
                'Elon Musk',
                'Nasa',
                'Central Banks',
                'Father Christmas',
                'Bill Murray',
                'Joan of Arc',
            ],

            data4: [
                'Cuba Godding Jr.',
                'Tesla',
                'Google Trends',
                'Steve Jobs',
                'Jesus Christ',
                'Father Christmas',
                'The Pope',
            ],

            data5: [
                'Aretha Franklin',
                'Xi Jinping',
                'Cryptocurrency',
                'Elvis Presley',
                'Baz Luhrmann',
                'The Big Four'
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_what-would.scss";
</style>
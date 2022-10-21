<template>
  <div class="what-would">
    <div class="container mx-auto">
        <h2 class="what-would__title" style="max-width: 600px;">
            <p>{{data.section_12_title_normal}} <span>{{data.section_12_title_highlight}}</span></p>
        </h2>

        <p class="what-would__sub">{{data.section_12_sub_title}}</p>

        <div class="what-would__content">
            <div class="content-item">
                <n-link 
                    to="" 
                    v-for="(i, idx) in listTopics" 
                    :key="idx"
                >
                    {{ i.name }}
                    <span class="what-would__dot"></span>
                </n-link>
            </div>

            <!-- <div class="content-item">
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
            </div> -->
        </div>

        <app-button
          color="gradient-yellow"
          style="width: 228px"
        >
          <a :href="data.section_12_btn_link" target="_blank">{{data.section_12_btn_text}}</a>
        </app-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
  },
  computed: {
    ...mapState('home', ['data']),

    listTopics() {
      return this.data.section_12_list_topics || []
    }
  },
}
</script>


<style lang="scss" scoped>
@import "~/assets/scss/components/homepage/_what-would.scss";
</style>
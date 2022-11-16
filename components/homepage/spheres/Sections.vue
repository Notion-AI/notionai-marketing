<template>
  <div
    ref="sections"
    v-section-progress="{ onProgress }"
    class="sections"
  >
    <client-only>
      <HomepageSpheresAnimation :progress="progress" :style="animationStyle" />
    </client-only>
    <HomepageSpheresSection
      v-for="(item, i) in sections"
      :key="`section-${i}-`"
      v-bind="item"
      :style="sectionStyle(i)"
    />
  </div>
</template>

<script>
/**
 * Spheres Animation Sections
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
import { mapState } from 'vuex'

export default {
  data () {
    return {
      progress: 0,
      sectionsProgress: []
    }
  },
  computed: {
    ...mapState('home', ['data']),
    sections () {
      return [
        {
          titleLeft: this.data.section_5_bottom_left_text,
          titleRight: this.data.section_5_bottom_right_text,
          titleRightBold: this.data.section_5_bottom_right_text_bold
        },
        {
          subtitle: this.data.section_6_sources_number
        },
        {
          subtitle: 'Analysed to discover themes...'
        },
        {
          subtitle: '...and draw connections between them'
        },
        {
          subtitle: this.data.section_8_title_normal + ' ' + this.data.section_8_title_highlight
        },
        {
          subtitle: this.data.section_9_title_normal + ' ' + this.data.section_9_title_highlight
        },
        {
          titleLeft: this.data.section_11_left_title,
          titleRight: this.data.section_11_right_title,
          image: require('~/assets/images/home/ranking-4.png')
        }
      ]
    },
    animationStyle () {
      return {
        display: (this.progress === 1) ? 'none' : 'block'
      }
    }
  },
  created () {
    for (let i = 0; i < this.sections.length; i++) {
      this.sectionsProgress[i] = 0
    }
  },
  methods: {
    sectionStyle (i) {
      const style = {}
      const p = this.sectionsProgress[i]
      if (p !== undefined) {
        if (!((i === this.sections.length - 1 && p > 0.5) || p === 1)) {
          style.position = 'fixed'
          style.top = 0
          style.opacity = Math.sin(Math.max(0, Math.min(1, p * 2 - 0.5)) * Math.PI)
        }
      }
      return style
    },
    onProgress (e) {
      this.progress = e.progress

      const sectionsProgress = this.progress * (this.sections.length + 1)
      for (let i = 0; i < this.sections.length; i++) {
        this.sectionsProgress[i] = Math.max(0, Math.min(1, -0.5 * i + sectionsProgress / 2))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$section-height: 100vh;
.sections {
  height: $section-height * 7;
}
section {
  width: 100%;
  height: $section-height;
}
</style>

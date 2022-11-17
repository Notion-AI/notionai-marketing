<template>
  <section class="flex flex-col justify-center">
    <div v-if="image" class="bg flex flex-col justify-bottom">
      <img :src="image">
    </div>

    <div>
      <div v-if="layout==='default'" class="flex flex-col justify-center">
        <div class="flex flex-col items-center">
          <h2 v-if="title" class="mb-4">
            {{ title }}
          </h2>
          <h3 v-if="subtitle" class="mb-4 sub">
            {{ subtitle }}
          </h3>
          <h3 v-if="highlight" class="mb-4 hl">
            {{ highlight }}
          </h3>
          <p v-if="description" class="mb-4 text-center">
            {{ description }}
          </p>
          <app-button
            v-if="btnLink && btnText"
            class="mx-auto mt-2"
            color="outline-white"
          >
            <a :href="btnLink.url" :target="btnLink.target">{{ btnText }}</a>
          </app-button>
        </div>
      </div>

      <div v-else-if="layout==='columns'" class="flex flex-col justify-center">
        <div class="flex flex-row">
          <div class="left-col flex flex-col justify-center">
            <h2>{{ titleLeft }}</h2>
          </div>
          <div class="right-col flex flex-col justify-center">
            <h2>
              {{ titleRight }}
              <span v-if="titleRightBold">{{ titleRightBold }}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * Spheres Animation Section
 * @author Kevin Levron <kevin.levron@gmail.com>
 */
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    highlight: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    btnLink: {
      type: Object,
      default: null
    },
    btnText: {
      type: String,
      default: null
    },
    titleLeft: {
      type: String,
      default: null
    },
    titleRight: {
      type: String,
      default: null
    },
    titleRightBold: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    opacity: {
      type: Number,
      default: 1
    }
  },
  // data () {
  //   return {
  //     opacity: 1
  //   }
  // },
  computed: {
    layout () {
      if (this.titleLeft && this.titleRight) {
        return 'columns'
      }
      return 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
}
h2, h3 {
  font-size: 4.125rem;
  font-weight: bold;
  line-height: 4.375rem;
  text-align: center;
  text-shadow: 1px 1px 1px #000;
}
h3.sub {
  font-size: 2.5rem;
  line-height: 100%;
}
h3.hl {
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
p {
  color: #BEBEBE;
  font-size: 1.25rem;
  line-height: 1.625rem;
}
.left-col, .right-col {
  width: 50%;
  h2, h2 span {
    font-size: 1.875rem;
    // line-height: 3.375rem;
    // letter-spacing: -0.02em;
  }
}
.left-col {
  margin-left: 10%;
  margin-right: 20%;
}
.right-col {
  margin-left: 20%;
  margin-right: 10%;
}
.bg {
  position: absolute;
  bottom: 0;
  width: 100%;
  img {
    margin: auto;
  }
}
</style>

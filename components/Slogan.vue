<template>
    <div class="slogan">
        <div class="container mx-auto">
            <h2 :class="`slogan__title ${type}`">
                <p
                  v-for="(title, idx) in slogan_title"
                  :key="idx"
                  v-html="$textConvert(title, '', 'highlight')"
                >
                </p>
            </h2>

            <div class="slogan__sub">
                <p>{{slogan_text_description}}</p>
            </div>
          
            <div class="slogan__btn">
                <app-button
                  class="mx-auto"
                  color="outline-white"
                  style="width: 190px;"
                >
                  <a :href="slogan_btn_link.url" :target="slogan_btn_link.target">
                    {{slogan_text_btn}}
                  </a>
                </app-button>
            </div>

            <div class="slogan__img">
                <!-- <img :src="slogan_image.url" :alt="slogan_image.alt" class="mx-auto" /> -->
                <client-only>
                  <video autoplay loop playsinline muted>
                    <source :src="slogan_media?.url" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'air'
        },
        slogan_title: {
          type: Array,
          default: () => []
        },
        slogan_text_description: {
          type: String,
          default: '',
        },
        slogan_text_btn: {
          type: String,
          default: '',
        },
        slogan_btn_link: {
          type: Object,
          default: {
            url: 'https://app.notion.ai/login',
            target: '_blank'
          }
        },
        slogan_image: {
          type: Object,
          default: () => {
            return {
              url: '',
              alt: null,
            }
          }
        },
        slogan_media: {
          type: Object,
          default: () => {
            return {
              url: '',
              alt: null,
            }
          }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_slogan.scss";
</style>

<style scoped>
.slogan__title p :deep(span),
.slogan__title p :deep(.highlight) {
  font-weight: 500;
  font-size: 4.6rem;
  line-height: 5rem;

  @screen lg {
      font-size: 4.125rem;
      line-height: 4.375rem;
  }
}

.slogan__title.stream p :deep(.highlight) {
  background: linear-gradient(253.64deg, #F2B59C 6.02%, #FFE26E 117.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slogan__title.air p :deep(.highlight) {
  background: -webkit-linear-gradient(247.69deg, #F5C0BE -4.24%, #A3A5EF 191.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
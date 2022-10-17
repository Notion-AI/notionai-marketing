<template>
    <div class="slogan">
        <div class="container mx-auto">
            <h2 :class="`slogan__title ${type}`">
                <p><span>{{slogan_text_line_1_highlight}}</span>{{slogan_text_line_1_normal}}</p>
                <p>{{slogan_text_line_2_normal}}</p>
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
                <img :src="slogan_image.url" :alt="slogan_image.alt" class="mx-auto" />
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
        slogan_text_line_1_highlight: {
          type: String,
          default: ''
        },
        slogan_text_line_1_normal: {
          type: String,
          default: ''
        },
        slogan_text_line_2_normal: {
          type: String,
          default: ''
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
          default: {
            url: '',
            alt: null,
          }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_slogan.scss";
</style>
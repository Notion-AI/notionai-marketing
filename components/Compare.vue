<template>
    <div class="compare">
        <div class="container mx-auto">
            <div class="compare__title" :class="{'compare__title-air': isAir}">
                <p>
                  {{campare_title_normal}}
                  <span>{{campare_title_highlight}}</span>
                </p>
            </div>

            <div class="compare__btn">
                <app-button
                    class="mx-auto"
                    :color="isAir ? 'gradient-pink' : 'gradient-yellow'"
                    style="width: 116px"
                >
                  <a :href="campare_btn_link.url" :target="campare_btn_link.target">{{campare_btn_text}}</a>
                </app-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isAir: {
            type: Boolean,
            default: false
        },
        campare_title_normal: {
          type: String,
          default: ''
        },
        campare_title_highlight: {
          type: String,
          default: ''
        },
        campare_btn_text: {
          type: String,
          default: ''
        },
        campare_btn_link: {
          type: Object || String,
          default: () => {
            return {
              url: 'https://app.notion.ai/login',
              target: '_blank'
            }
          }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/common/_compare.scss";
</style>
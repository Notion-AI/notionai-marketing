<script>
    export default {
      props: {
        nuxt: Boolean,
        flat: Boolean,
        outline: Boolean,
        fullWidth: Boolean,
        tag: {
          type: String,
          default: "button" // 'button', 'a'
        },
        size: {
          type: String,
          default: "md" // 'sm' | 'md' | 'lg'
        },
        color: {
          type: String,
          default: "white" // 'primary' | 'white', ...
        },
        to: {
          type: [String, Object] // Vue-router prop. Denotes the target route of the link.
        },
        exact: {
          type: Boolean // Vue-router prop. Exactly match the link. Without this, '/' will match every route.
        },
        
        border: {
          type: Boolean,
          default: true
        }
      },
    
      computed: {
        classes() {
          const colorClasses = {
            "btn--gray": this.color === "gray",
            "btn--white": this.color === "white",
            "btn--gradient-yellow": this.color === "gradient-yellow",
            "btn--gradient-pink": this.color === "gradient-pink",
            "btn--gradient-violet": this.color === "gradient-violet",
            "btn-outline--white": this.color === "outline-white",
            // "btn-outline--gradient-yellow": this.color === "outline-gradient-yellow",
            // "btn-outline--gradient-pink": this.color === "outline-gradient-pink",
            // "btn-outline--gradient-violet": this.color === "outline-gradient-violet",
          };

          const borderClasses = {
            "border--none": this.border === false
          }

          return { ...colorClasses, ...borderClasses };
        }
      },
    
      render: function(h) {
        return h(
          this.nuxt ? "n-link" : this.tag,
          {
            props: {
              to: this.to,
              exact: this.exact,
            },
            // attrs: this.attrs,
            class: {
              btn: true,
              ...this.classes
            },
            on: this.$listeners
          },
          this.$slots.default
        );
      }
    };
    </script>
    
    <style lang="scss">
    @import "~/assets/scss/components/common/_app-button.scss";
    </style>
    
export default {
  data() {
    return {
      window: {
        width: 0,
      },
    }
  },

  created() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },

  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth
    },
  }
}
import sm from './sm.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    title: 'notionai-marketing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-carousel.js', mode: 'client' },
    { src: '@/plugins/common.js' },
    { src: '@/plugins/vue-scrollto.js' },
    { src: "~/plugins/vue-awesome-swiper.js", mode: "client" },
    { src: '@/plugins/vue-observe-visibility.js'},
    { src: '@/plugins/section-progress.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image'
  ],

  prismic: {
    endpoint: sm.apiEndpoint,
    modern: true,
    apiOptions: {}
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue", "three"],
  },
  image: {
    prismic: {}
  }
}
// export const state = () => ({
//   navigation: {}
// })

// export const mutations = {
//   setNavigation (state, navigation) {
//     state.navigation = navigation
//   }
// }

// export const actions = {
//   async nuxtServerInit(ctx, { store, $prismic }) {
//     const navigation = await $prismic.api.getSingle('navigation')
//     store.commit('setNavigation', navigation)
//   },
// }
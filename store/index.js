const state = () => ({
  layout: {},
  color: 'bg-color-white'
})

const getters = {
  navigator: (state) => state.layout?.data?.navigator?.filter(item => item.is_active) || [],
  alert: (state) => state.layout?.data?.alert?.length > 0 ? state.layout?.data?.alert[0] : {},
  footer: (state) => {
    return {
      location: state.layout?.data?.location || {},
      socials: state.layout?.data?.socials || []
    }
  },
  logo: (state) => state.layout?.data?.logo,
  logoBlack: (state) => state.layout?.data?.logo_black,
  emailContact: (state) => state.layout?.data?.email_contact,
  feedbacks: (state) => state.layout?.data?.feedback || [],
  signUpLink: (state) => state.layout?.data?.sign_up_link
}

const actions = {
  async nuxtServerInit(ctx, { store, $prismic }) {
    const layout = await $prismic.api.getSingle('layout')
    store.commit('SET_LAYOUT', layout)
  },
}

const mutations = {
  SET_LAYOUT (state, layout) {
    state.layout = layout
  },
  SET_HEADER_COLOR (state, color) {
    state.color = color
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
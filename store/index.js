const state = () => ({
  layout: {}
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
  emailContact: (state) => state.layout?.data?.email_contact,
  feedbacks: (state) => state.layout?.data?.feedback || []
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
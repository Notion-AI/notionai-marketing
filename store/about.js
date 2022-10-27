const state = () => ({
  data: {},
})

const getters = {
  introduction: (state) => {
    const getIntroduction = state.data?.slices?.find(item => item.slice_type === 'about_introduction' && item.variation === 'default') || null
    if (!getIntroduction) return {}
    return getIntroduction
  },
  teams: (state) => {
    const getTeams = state.data?.slices?.find(item => item.slice_type === 'about_teams' && item.variation === 'default') || null
    if (!getTeams) return {}
    return getTeams
  },
  contact: (state) => {
    const getContact = state.data?.slices?.find(item => item.slice_type === 'about_contact' && item.variation === 'default') || null
    if (!getContact) return {}
    return getContact
  }
}

const actions = {
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
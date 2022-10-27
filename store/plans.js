const state = () => ({
  data: {},
})

const getters = {
  introduction: (state) => {
    const getIntroduction = state.data?.slices?.find(item => item.slice_type === 'plans_introduction' && item.variation === 'default') || null
    if (!getIntroduction) return {}
    return getIntroduction
  },
  itemsPlan: (state) => {
    const getItemsPlan = state.data?.slices?.find(item => item.slice_type === 'plan_details' && item.variation === 'default') || null
    if (!getItemsPlan) return {}
    return getItemsPlan
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
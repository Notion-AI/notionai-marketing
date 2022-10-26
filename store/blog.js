const state = () => ({
  data: {},
  tags: []
})

const getters = {
}

const actions = {
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  SET_TAGS (state, data) {
    state.tags = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
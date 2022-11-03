const state = () => ({
  data: {},
  dataStream: {}
})

const getters = {
}

const actions = {
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  SET_DATA_STREAM (state, data) {
    state.dataStream = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
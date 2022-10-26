const state = () => ({
  data: {},
  tags: [],
  blogDetail: {}
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
  },
  SET_DATA_DETAIL (state, data) {
    state.blogDetail = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
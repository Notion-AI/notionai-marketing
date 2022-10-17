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
    console.log('product resuslt', data)
    state.data = data
  },
  SET_DATA_STREAM (state, data) {
    console.log('product resuslt', data)
    state.dataStream = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
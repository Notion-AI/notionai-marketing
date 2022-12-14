const state = () => ({
  data: {},
  tags: [],
  blogDetail: {},
  dateExplore: {}
})

const getters = {
  titleDetail: (state) => {
    const title = state.blogDetail?.title_detail
    return title
  },

  banner: (state) => {
    const title = state.blogDetail?.banner
    return title
  },

  content: (state) => {
    const title = state.blogDetail?.content
    return title
  },

  footnote: (state) => {
    const footnote = state.blogDetail?.footnote
    return footnote
  }
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
  },
  SET_DATA_EXPLORE (state, data) {
    state.dateExplore = data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
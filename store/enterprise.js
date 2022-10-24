const state = () => ({
  data: {},
})

const getters = {
  intruduction: (state) => {
    const getIntroduction = state.data?.slices?.find(item => item.slice_type === 'introduction' && item.variation === 'enterprise') || null
    if (!getIntroduction) return {}
    return getIntroduction
  },
  benefitsIntro: (state) => {
    const getBenefitsIntro = state.data?.slices?.find(item => item.slice_type === 'benefits' && item.variation === 'enterprise1') || null
    if (!getBenefitsIntro) return {}
    return getBenefitsIntro
  },
  services: (state) => {
    const getServices = state.data?.slices?.find(item => item.slice_type === 'services' && item.variation === 'enterprise') || null
    if (!getServices) return {}
    return getServices
  },
  benefitsSecurity: (state) => {
    const getbenefitsSecurity = state.data?.slices?.find(item => item.slice_type === 'benefits' && item.variation === 'enterprise2') || null
    if (!getbenefitsSecurity) return {}
    return getbenefitsSecurity
  },
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
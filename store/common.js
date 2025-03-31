export const state = () => ({
  common: {
    headers: undefined,
    url: undefined
  }
})
export const mutations = {
  setHeaders(state, data) {
    state.common.headers = data
  },
  setUrl(state, url) {
    state.common.url = url
  }
}
export const actions = {
  setHeaders({ commit }, data) {
    commit('setHeaders', data)
  },
  setUrl({ commit }, url) {
    commit('setUrl', url)
  }
}
export const getters = {
  getHeaders(state) {
    return state.common.headers
  },
  getUrl(state) {
    return state.common.url
  }
}

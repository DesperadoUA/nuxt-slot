export const state = () => ({
	title: '',
	description: '',
	posts: []
})
export const mutations = {
	setTitle(state, data) {
		state.title = data
	},
	setDescription(state, data) {
		state.description = data
	},
	setPosts(state, data) {
		state.posts = data
	}
}
export const actions = {
	setTitle({ commit }, payload) {
		commit('setTitle', payload)
	},
	setDescription({ commit }, payload) {
		commit('setDescription', payload)
	},
	setPosts({ commit }, payload) {
		commit('setPosts', payload)
	}
}
export const getters = {
	getTitle(state) {
		return state.title
	},
	getDescription(state) {
		return state.description
	},
	getPosts(state) {
		return state.posts
	}
}

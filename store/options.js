import DAL_Options from '~/DAL/options'
import config from '~/config/'

export const state = () => ({
	options: null,
	hrefLang: []
})
export const mutations = {
	setOptions(state, data) {
		state.options = data
	},
	setHrefLang(state, data) {
		state.hrefLang = data
	}
}
export const actions = {
	async setOptions({ commit }, state) {
		if (this.state.options.options === null) {
			const result = await DAL_Options.getOptions()
			commit('setOptions', result.data)
		}
	},
	setHrefLang({ commit }, state) {
		const newState = state
			.filter(item => item.hreflang !== 'x-default')
			.map(item => {
				return {
					title: config.LANG_TITLES[config.LANG][item.hreflang],
					link: item.href
				}
			})
		commit('setHrefLang', newState)
	}
}
export const getters = {
	getOptions(state) {
		return state.options
	},
	getHrefLang(state) {
		return state.hrefLang
	}
}

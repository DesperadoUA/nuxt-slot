import config from '~/config'
export default class Helper {
	static hreflang(arr) {
		const replace = str => {
			if (str.startsWith('https://uk-media.')) {
				const old = new RegExp('https://uk-media.', 'g')
				str = str.replace(old, 'https://uk.')
			} else if (str.startsWith('https://media.')) {
				const old = new RegExp('https://media.', 'g')
				str = str.replace(old, 'https://')
			}
			return str
		}
		const arrSort = config.SORT_REFLANG[config.LANG]
		const adapterLang = {
			'uk-UA': 'UK',
			'ru-UA': 'RU',
			en: 'EN'
		}
		let newArr = []
		arrSort.forEach(item => {
			if (item === 'x-default')
				newArr.push({
					hreflang: 'x-default',
					rel: 'alternate',
					href: config.DEFAULT_REFLANG_DOMAIN
				})
			else {
				const currentItem = arr.filter(langItem => langItem.lang === item)
				if (currentItem.length !== 0) {
					newArr.push({
						hreflang: adapterLang[item].toLowerCase(),
						rel: 'alternate',
						href: replace(currentItem[0].link.trim())
					})
				}
			}
		})
		return newArr
	}
}

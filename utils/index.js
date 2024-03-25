import TRANSLATE from '~/translate/index.js'
import config from '~/config/index.js'
export function getRef(item) {
	if (item.ref.length !== 0) {
		const min = 0
		const max = item.ref.length - 1
		const random = Math.floor(Math.random() * (max - min + 1)) + min
		return item.ref[random].casino_ref
	} else {
		return '#'
	}
}
export function getErrorPageObj() {
	return { statusCode: 404, message: TRANSLATE['TEXT_404'][config.LANG] }
}

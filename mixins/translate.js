import TRANSLATE from '~/translate/index.js'
import config from '~/config/index.js'
export default {
    data: () => {
        return {
            translates: TRANSLATE,
            config: config
        }
    },
}
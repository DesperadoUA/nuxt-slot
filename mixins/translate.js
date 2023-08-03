import TRANSLATE from '~/translate'
import config from '~/config'
export default {
    data: () => {
        return {
            translates: TRANSLATE,
            config: config
        }
    },
}
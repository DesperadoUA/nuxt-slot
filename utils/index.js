import TRANSLATE from '~/translate/index.js'
import config from '~/config/index.js'
export function getRef(item){
    if(item.ref.length !== 0) {
        const min = 0
        const max = item.ref.length - 1
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        return item.ref[random].casino_ref
    } else {
        return '#'
    }
}
export function refActivate(items) {
    if(items.length !== 0) {
        const min = 0
        const max = items.length - 1
        const random = Math.floor(Math.random() * (max - min + 1)) + min
        window.open(items[random].casino_ref, '_blank')
    } 
}

export function getErrorPageObj() {
   return { statusCode: 404, message: TRANSLATE['TEXT_404'][config.LANG] }
}
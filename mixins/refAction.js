import { REFERRAL_MODAL_KEY } from '~/constants'
export default {
	props: ['value'] /* DTO single casino */,
	methods: {
		refAction() {
			if (this.value.relative_casino.length) {
				this.$store.dispatch('modal/setStateModal', { key: REFERRAL_MODAL_KEY, status: true })
				const title = this.value.title_pop_up
					? this.value.title_pop_up
					: this.translates.REFERRAL_MODAL_TITLE[this.config.LANG]
				const description = this.value.description_pop_up
					? this.value.description_pop_up
					: this.translates.REFERRAL_MODAL_DESCRIPTION[this.config.LANG]
				this.$store.dispatch('referralCasinoModal/setTitle', title)
				this.$store.dispatch('referralCasinoModal/setDescription', description)
				this.$store.dispatch('referralCasinoModal/setPosts', this.value.relative_casino)
			} else {
				if (this.value.ref.length !== 0) {
					const min = 0
					const max = this.value.ref.length - 1
					const random = Math.floor(Math.random() * (max - min + 1)) + min
					window.open(this.value.ref[random].casino_ref, '_blank')
				}
			}
		}
	}
}

<template>
	<section class="slick_button">
		<div class="slick_button_wrapper">
			<a class="slick_button_part_left" href="/amp/"></a>
			<a class="slick_button_part_right" :href="getRef({ ref: value.ref })" v-if="!value.relative_casino.length"></a>
			<div class="container slick_button_container">
				<div class="slick_button_left">
					<amp-img src="/img/arrow.png" class="slick_button_arrow left_arrow" width="8" height="12" />
					<NuxtLink no-prefetch to="/amp/">{{ translates.CHOOSE_CASINO[config.LANG] }}</NuxtLink>
				</div>
				<div class="slick_button_right" v-if="value.relative_casino.length">
					<script_amp :src="CasinoSlickButtonPathScript">
						<div
							class="jsReferralPopUp"
							:data-relative-casino="JSON.stringify(value.relative_casino)"
							:data-title="value.title_pop_up ? value.title_pop_up : translates.REFERRAL_MODAL_TITLE[config.LANG]"
							:data-description="
								value.description_pop_up ? value.description_pop_up : translates.REFERRAL_MODAL_DESCRIPTION[config.LANG]
							"
							:data-translate-btn="translates.REFERRAL_MODAL_BTN[config.LANG]"
							:data-translate-go-to="translates.GO_TO[config.LANG]"
							:data-ampPrefix="config.AMP_PREFIX"
						>
							{{ translates.GO_TO[config.LANG] }}
							<amp-img src="/img/arrow.png" class="slick_button_arrow right_arrow" width="8" height="12" />
						</div>
						<div class="referralModalContainer"></div>
					</script_amp>
				</div>
				<div class="slick_button_right" v-else>
					{{ translates.GO_TO[config.LANG] }}
					<amp-img src="/img/arrow.png" class="slick_button_arrow right_arrow" width="8" height="12" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import getRef from '~/mixins/getRef.js'
import script_amp from '~/components/script_amp'
import { CASINO_SLICK_BUTTON as CasinoSlickButtonPathScript } from '~/config/ampPathScript'
export default {
	name: 'app_slick_button_amp',
	props: ['value'],
	mixins: [translateMixin, getRef],
	data: () => {
		return {
			CasinoSlickButtonPathScript
		}
	},
	components: {
		script_amp
	}
}
</script>

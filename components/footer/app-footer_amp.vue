<template>
	<footer>
		<nav class="footer_menu" v-if="options.footer_menu.length !== 0">
			<div class="container">
				<ul>
					<li class="footer_menu_item" v-for="(item, index) in options.footer_menu" :key="index">
						<NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
							{{ item.title }}
						</NuxtLink>
					</li>
				</ul>
			</div>
		</nav>
		<div class="footer_partners">
			<div class="container footer_partners_wrapper">
				<div class="footer_partners_left">
					<a
						href="//www.dmca.com/Protection/Status.aspx?ID=0254cf77-c76d-4013-b771-c48ab480360e"
						title="DMCA.com Protection Status"
						class="dmca-badge"
					>
						<amp-img
							src="https://media.onlinecasino.in.ua/wp-content/uploads/2021/04/dmca_40px.png?ID=0254cf77-c76d-4013-b771-c48ab480360e"
							alt="DMCA.com Protection Status"
							height="40"
							width="100"
						></amp-img>
					</a>
					<a
						v-for="(item, index) in options.partners"
						:key="index"
						:href="item.partners_link"
						target="_blank"
						class="partners_link"
					>
						<amp-img
							:src="item.partners_img"
							:height="configPartnersImg[index].height"
							:width="configPartnersImg[index].width"
						>
						</amp-img>
					</a>
				</div>
				<div class="footer_partners_right">
					<a
						v-for="(item, index) in options.social"
						:key="index"
						:href="item.social_link"
						target="_blank"
						class="partners_link social_link"
					>
						<amp-img :src="item.social_img" height="32" width="32"></amp-img>
					</a>
				</div>
			</div>
		</div>
		<div class="container footer_container">
			<div class="footer_text">
				{{ options.footer_text }}
				<amp-img
					v-if="options.security_logo"
					:src="options.security_logo"
					class="dmca-badge"
					width="120"
					height="25"
					title="DMCA.com Protection Status"
				></amp-img>
			</div>
		</div>
    <div class="modal guard_modal" v-if="showPopUp">
        <GuardPopUpAmp :url="currentUrl" />
    </div>
	</footer>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import GuardPopUpAmp from '~/components/guard_pop_up/amp'
import script_amp from '~/components/script_amp'
import { GUARD_COOKIE_STORAGE_KEY } from '@/constants.js'
export default {
	name: 'app-footer_amp',
	mixins: [translateMixin],
	props: ['options'],
  components: { GuardPopUpAmp, script_amp },
	data() {
		return {
			configPartnersImg: [
				{ width: '188', height: '40' },
				{ width: '85', height: '40' },
				{ width: '96', height: '40' },
				{ width: '42', height: '40' },
				{ width: '85', height: '40' },
				{ width: '48', height: '40' },
				{ width: '48', height: '40' }
			],
		}
	},
  computed: {
    showPopUp() {
      const headers = this.$store.getters['common/getHeaders']
      const cookie = headers.cookie || ''
      return cookie.includes(GUARD_COOKIE_STORAGE_KEY) ? false : true
    },
    currentUrl() {
      return this.$store.getters['common/getUrl']
    }
  }
}
</script>

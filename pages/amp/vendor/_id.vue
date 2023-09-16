<template>
	<div>
		<HeaderAmp :logo="data.options.logo" :menu_links="data.options.menu_link" />
		<main>
			<BannerAmp :value="data.body.h1" />
			<BreadcrumbAmp :value="data.body.title" />
			<TopContentAmp :value="data.body" />
			<script_amp :src="CasinoPathScript" v-if="CasinoNumberPostOnQuery < data.body.casino.length">
				<CasinoLoopAmp :posts="data.body.casino" post_type="vendor" :post_url="data.body.routeParamsId" />
			</script_amp>
			<CasinoLoopAmp
				:posts="data.body.casino"
				post_type="vendor"
				:post_url="data.body.routeParamsId"
				v-if="data.body.casino.length !== 0 && CasinoNumberPostOnQuery >= data.body.casino.length"
			/>
			<FaqAmp :value="data.body.faq" :title="data.body.faq_title" />
		</main>
		<FooterAmp :options="data.options" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import DAL_Options from '~/DAL/options'
import BannerAmp from '~/components/banner/app_banner_casino_amp'
import BreadcrumbAmp from '~/components/breadcrumb/app_breadcrumb_amp'
import CasinoLoopAmp from '~/components/casino_loop/app_casino_loop_amp'
import TopContentAmp from '~/components/top_content/app_top_content_amp'
import FaqAmp from '~/components/faq/app_faq_amp'
import config from '~/config/index.js'
import { getErrorPageObj } from '~/utils/index.js'
import script_amp from '~/components/script_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import { CASINO as CasinoNumberPostOnQuery } from '~/config/postLoader'
import { CASINO as CasinoPathScript } from '~/config/ampPathScript'
export default {
	name: 'app_single_vendor_amp',
	components: {
		BannerAmp,
		BreadcrumbAmp,
		CasinoLoopAmp,
		TopContentAmp,
		FaqAmp,
		script_amp
	},
	mixins: [pageTemplateAmp],
	data: () => {
		return {
			data: {},
			CasinoNumberPostOnQuery,
			CasinoPathScript
		}
	},
	async asyncData({ route, req, error }) {
		const request = {
			type: 'vendor',
			url: route.params.id
		}
		const response = await DAL_Page.getData(request)
		if (response.data.status === '404') {
			error(getErrorPageObj())
		} else {
			const options = await DAL_Options.getOptions()
			const body = response.data
			const data = body
			data.body = data.body
			const faq = []
			data.body.faq.forEach(element => {
				faq.push({
					status: 'close',
					answer: element.answer,
					question: element.question
				})
			})
			data.body.faq = faq
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
			data.options = options.data
			data.body.routeParamsId = route.params.id
			return { data }
		}
	}
}
</script>

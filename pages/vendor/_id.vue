<template>
	<main>
		<app_banner :value="data.body.h1"></app_banner>
		<app_breadcrumb :value="data.body.title"></app_breadcrumb>
		<app_top_content :value="data.body"></app_top_content>
		<app_casino_loop :posts="data.body.casino"></app_casino_loop>
		<app_faq :value="data.body.faq" :title="data.body.faq_title"></app_faq>
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import app_banner from '~/components/banner/app_banner_casino'
import app_breadcrumb from '~/components/breadcrumb/app_breadcrumb'
import app_casino_loop from '~/components/casino_loop/app_casino_loop'
import app_top_content from '~/components/top_content/app_top_content'
import app_faq from '~/components/faq/app_faq'
import config from '~/config'
import { getErrorPageObj } from '~/utils'
import headMixin from '~/mixins/head.js'
import helper from '~/helpers'
export default {
	name: 'app_single_vendor',
	mixins: [headMixin],
	components: { app_banner, app_top_content, app_breadcrumb, app_casino_loop, app_faq },
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, req, error, store }) {
		const request = {
			type: 'vendor',
			url: route.params.id
		}
		const response = await DAL_Page.getData(request)
		if (response.data.status === '404') {
			error(getErrorPageObj())
		} else {
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
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path
			data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
			data.body.headerLinks = helper.hreflang(data.body.hreflang)
			store.dispatch('options/setHrefLang', data.body.headerLinks)
			return { data }
		}
	}
}
</script>

<style scoped></style>

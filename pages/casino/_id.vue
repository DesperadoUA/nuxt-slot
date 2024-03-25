<template>
	<main>
		<Banner :value="data.body.h1" />
		<Breadcrumb :value="data.body.title" />
		<CasinoTop :value="data.body" />
		<Events :value="data.body" />
		<HowTo :value="data.body.how_to" />
		<Video :banner_src="data.body.video_banner" :video_src="data.body.video_iframe" />
		<Content :value="data.body.content" />
		<Faq :value="data.body.faq" :title="data.body.faq_title" />
		<Reviews :value="data.body.reviews" :title="data.body.title" />
		<FormReview :id="data.body.id" />
		<SlickButton :value="data.body" />
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import Banner from '~/components/banner/app_banner_casino'
import Breadcrumb from '~/components/breadcrumb/app_breadcrumb'
import CasinoTop from '~/components/casino_top/app_casino_top'
import Events from '~/components/events/app_bonuses.vue'
import HowTo from '~/components/how_to/app_how_to.vue'
import Content from '~/components/content/app-content'
import Faq from '~/components/faq/app_faq'
import Reviews from '~/components/reviews/app_reviews'
import FormReview from '~/components/form_review/app_form_review'
import Video from '~/components/video/app_video'
import SlickButton from '~/components/slick_button/app_slick_button'
import config from '~/config'
import { getErrorPageObj } from '~/utils'
import headMixin from '~/mixins/head.js'
import helper from '~/helpers'
export default {
	name: 'app_single_casino',
	mixins: [headMixin],
	components: {
		Banner,
		Content,
		Breadcrumb,
		CasinoTop,
		Reviews,
		FormReview,
		Faq,
		Video,
		SlickButton,
		Events,
		HowTo
	},
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, error, store }) {
		const request = {
			type: 'casino',
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
			const event = []
			data.body.faq.forEach(element => {
				faq.push({
					status: 'close',
					answer: element.answer,
					question: element.question
				})
			})
			data.body.event.forEach(element => {
				let ref = []
				if (element.event_ref.length === 0) ref = data.body.ref
				else {
					element.event_ref.forEach(element => {
						ref.push({
							casino_ref: element.event_ref.length === 0 ? data.body.ref : element.event_ref
						})
					})
				}

				event.push({
					status: 'close',
					title: element.event_title,
					description: element.event_description,
					start: element.event_start,
					end: element.event_end,
					name: element.event_name,
					site: element.event_site,
					ref: ref,
					thumbnail: data.body.thumbnail
				})
			})

			data.body.faq = faq
			data.body.event = event
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path
			data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
			data.body.headerLinks = helper.hreflang(data.body.hreflang)
			store.dispatch('options/setHrefLang', data.body.headerLinks)
			return { data }
		}
	}
}
</script>

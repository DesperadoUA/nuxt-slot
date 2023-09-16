<template>
	<main>
		<app_banner :value="data.body.h1" />
		<app_breadcrumb :value="data.body.title" />
		<app_casino_top :value="data.body" />
		<app_bonuses :value="data.body.event" />
		<app_how_to :value="data.body.how_to" />
		<app_video :banner_src="data.body.video_banner" :video_src="data.body.video_iframe" />
		<Content :value="data.body.content" />
		<app_faq :value="data.body.faq" :title="data.body.faq_title" />
		<app_reviews :value="data.body.reviews" :title="data.body.title" />
		<app_form_review :id="data.body.id" />
		<app_slick_button :referal="data.body.ref" />
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import app_banner from '~/components/banner/app_banner_casino'
import app_breadcrumb from '~/components/breadcrumb/app_breadcrumb'
import app_casino_top from '~/components/casino_top/app_casino_top'
import app_bonuses from '~/components/bonuses/app_bonuses.vue'
import app_how_to from '~/components/how_to/app_how_to.vue'
import Content from '~/components/content/app-content'
import app_faq from '~/components/faq/app_faq'
import app_reviews from '~/components/reviews/app_reviews'
import app_form_review from '~/components/form_review/app_form_review'
import app_video from '~/components/video/app_video'
import app_slick_button from '~/components/slick_button/app_slick_button'
import config from '~/config'
import { getErrorPageObj } from '~/utils'
import headMixin from '~/mixins/head.js'
import helper from '~/helpers'
export default {
	name: 'app_single_casino',
	mixins: [headMixin],
	components: {
		app_banner,
		Content,
		app_breadcrumb,
		app_casino_top,
		app_reviews,
		app_form_review,
		app_faq,
		app_video,
		app_slick_button,
		app_bonuses,
		app_how_to
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

<style scoped></style>

<template>
	<div>
		<app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
		<main>
			<BannerAmp :value="data.body.h1" />
			<BreadcrumbAmp :value="data.body.title" />
			<app_casino_top_amp :value="data.body" />
			<app_bonuses_amp :value="data.body.event" />
			<app_how_to_amp :value="data.body.how_to" />
			<app_video_amp :video_src="data.body.video_iframe" />
			<ContentAmp :value="data.body.amp_content" />
			<app_faq_amp :value="data.body.faq" :title="data.body.faq_title" />
			<script_amp :src="ReviewPathScript" v-if="ReviewNumberPostOnQuery < data.body.reviews.length">
				<app_reviews_amp
					:value="data.body.reviews"
					:title="data.body.title"
					post_type="casino"
					:post_url="data.body.routeParamsId"
				/>
			</script_amp>
			<app_reviews_amp
				v-if="data.body.reviews.length !== 0 && ReviewNumberPostOnQuery >= data.body.reviews.length"
				:value="data.body.reviews"
				:title="data.body.title"
				post_type="casino"
				:post_url="data.body.routeParamsId"
			/>
			<app_form_review_amp :id="data.body.id" />
			<app_slick_button_amp :referal="{ ref: data.body.ref }" />
		</main>
		<app_footer_amp :options="data.options" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import DAL_Options from '~/DAL/options'
import BannerAmp from '~/components/banner/app_banner_casino_amp'
import BreadcrumbAmp from '~/components/breadcrumb/app_breadcrumb_amp'
import app_casino_top_amp from '~/components/casino_top/app_casino_top_amp'
import app_bonuses_amp from '~/components/bonuses/app_bonuses_amp'
import app_how_to_amp from '~/components/how_to/app_how_to_amp'
import app_faq_amp from '~/components/faq/app_faq_amp'
import app_reviews_amp from '~/components/reviews/app_reviews_amp'
import app_form_review_amp from '~/components/form_review/app_form_review_amp'
import app_video_amp from '~/components/video/app_video_amp'
import app_slick_button_amp from '~/components/slick_button/app_slick_button_amp'
import config from '~/config'
import { getErrorPageObj } from '~/utils'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import script_amp from '~/components/script_amp'
import { REVIEW as ReviewNumberPostOnQuery } from '~/config/postLoader'
import { REVIEW as ReviewPathScript } from '~/config/ampPathScript'
export default {
	name: 'app_single_casino_amp',
	mixins: [pageTemplateAmp],
	components: {
		BannerAmp,
		BreadcrumbAmp,
		app_casino_top_amp,
		app_reviews_amp,
		app_form_review_amp,
		app_faq_amp,
		app_video_amp,
		app_slick_button_amp,
		app_bonuses_amp,
		app_how_to_amp,
		script_amp
	},
	data: () => {
		return {
			data: {},
			ReviewNumberPostOnQuery,
			ReviewPathScript
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
			const options = await DAL_Options.getOptions()
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
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
			data.options = options.data
			data.body.routeParamsId = route.params.id
			return { data }
		}
	}
}
</script>

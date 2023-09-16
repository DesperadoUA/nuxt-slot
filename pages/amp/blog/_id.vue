<template>
	<div>
		<app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
		<main>
			<BannerAmp :value="data.body.h1" />
			<BreadcrumbAmp :value="data.body.title" />
			<section>
				<div class="container blog_section">
					<div class="blog_section_left">
						<ContentAmp :value="data.body.amp_content" />
					</div>
					<div class="blog_section_right">
						<app_sidebar_amp :author="data.body.author" :date="data.body.date" />
					</div>
				</div>
			</section>
			<script_amp :src="ReviewPathScript" v-if="ReviewNumberPostOnQuery < data.body.reviews.length">
				<app_reviews_amp
					:value="data.body.reviews"
					:title="data.body.title"
					post_type="blog"
					:post_url="data.body.routeParamsId"
				/>
			</script_amp>
			<app_reviews_amp
				v-if="data.body.reviews.length !== 0 && ReviewNumberPostOnQuery >= data.body.reviews.length"
				:value="data.body.reviews"
				:title="data.body.title"
				post_type="blog"
				:post_url="data.body.routeParamsId"
			/>
			<app_form_review_amp :id="data.body.id" />
		</main>
		<app_footer_amp :options="data.options" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import DAL_Options from '~/DAL/options'
import BannerAmp from '~/components/banner/app_banner_casino_amp'
import BreadcrumbAmp from '~/components/breadcrumb/app_breadcrumb_amp'
import app_reviews_amp from '~/components/reviews/app_reviews_amp'
import app_form_review_amp from '~/components/form_review/app_form_review_amp'
import app_sidebar_amp from '~/components/sidebar/app_sidebar_amp'
import config from '~/config'
import { getErrorPageObj } from '~/utils/index.js'
import script_amp from '~/components/script_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import { REVIEW as ReviewNumberPostOnQuery } from '~/config/postLoader'
import { REVIEW as ReviewPathScript } from '~/config/ampPathScript'
export default {
	name: 'app_single_blog_amp',
	mixins: [pageTemplateAmp],
	components: {
		BannerAmp,
		BreadcrumbAmp,
		app_reviews_amp,
		app_form_review_amp,
		app_sidebar_amp,
		script_amp
	},
	data: () => {
		return {
			data: {},
			ReviewNumberPostOnQuery,
			ReviewPathScript
		}
	},
	async asyncData({ route, error }) {
		const request = {
			type: 'blog',
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
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
			data.options = options.data
			data.body.routeParamsId = route.params.id
			return { data }
		}
	}
}
</script>

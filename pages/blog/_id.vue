<template>
	<main>
		<Banner :value="data.body.h1" />
		<app_breadcrumb :value="data.body.title" />
		<section>
			<div class="container blog_section">
				<div class="blog_section_left">
					<Content :value="data.body.content" />
				</div>
				<div class="blog_section_right">
					<app_sidebar :author="data.body.author" :date="data.body.date" />
				</div>
			</div>
		</section>
		<app_reviews :value="data.body.reviews" :title="data.body.title" />
		<app_form_review :id="data.body.id" />
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import Banner from '~/components/banner/app_banner_casino'
import Content from '~/components/content/app-content'
import app_breadcrumb from '~/components/breadcrumb/app_breadcrumb'
import app_reviews from '~/components/reviews/app_reviews'
import app_form_review from '~/components/form_review/app_form_review'
import app_sidebar from '~/components/sidebar/app_sidebar'
import config from '~/config'
import { getErrorPageObj } from '~/utils'
import headMixin from '~/mixins/head.js'
import helper from '~/helpers'
export default {
	name: 'app_single_blog',
	mixins: [headMixin],
	components: { Banner, Content, app_breadcrumb, app_reviews, app_form_review, app_sidebar },
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, error, store }) {
		const request = {
			type: 'blog',
			url: route.params.id
		}
		const response = await DAL_Page.getData(request)
		if (response.data.status === '404') {
			error(getErrorPageObj())
		} else {
			const body = response.data
			const data = body
			data.body = data.body
			data.body.currentUrl = config.BASE_URL[config.LANG] + route.path
			data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
			data.body.headerLinks = helper.hreflang(data.body.hreflang)
			store.dispatch('options/setHrefLang', data.body.headerLinks)
			return { data }
		}
	}
}
</script>

<style>
.blog_section {
	display: flex;
}
.blog_section .container {
	width: 100%;
	max-width: 100%;
}
.blog_section_left {
	width: 918px;
}
.blog_section_right {
	flex-grow: 1;
}
@media (min-width: 320px) and (max-width: 767px) {
	.blog_section {
		flex-wrap: wrap;
	}
	.blog_section_left,
	.blog_section_right {
		width: 100%;
	}
}
</style>

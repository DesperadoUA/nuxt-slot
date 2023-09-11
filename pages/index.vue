<template>
	<main>
		<app_banner />
		<app_h1 :value="data.body.h1" />
		<app_casino_loop :posts="data.body.casino" />
		<app_content :value="data.body.content" />
		<app_blog_card :posts="data.body.blog" />
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import app_h1 from '~/components/h1/app-h1'
import app_content from '~/components/content/app-content'
import app_casino_loop from '~/components/casino_loop/app_casino_loop'
import app_banner from '~/components/banner/app_banner_main'
import app_blog_card from '~/components/blog_card/app_blog_card'
import config from '~/config'
import helper from '~/helpers'
import headMixin from '~/mixins/head.js'
export default {
	name: 'main-page',
	mixins: [headMixin],
	data: () => {
		return {
			data: {}
		}
	},
	components: { app_h1, app_content, app_casino_loop, app_banner, app_blog_card },
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: '/'
		}
		const response = await DAL_Page.getData(request)
		const body = response.data
		const data = body
		data.body.currentUrl = config.BASE_URL[config.LANG]
		data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
		data.body.headerLinks = helper.hreflang(data.body.hreflang)
		store.dispatch('options/setHrefLang', data.body.headerLinks)
		return { data }
	}
}
</script>

<style></style>

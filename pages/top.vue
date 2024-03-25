<template>
	<main>
		<Banner />
		<H_1 :value="data.body.h1" />
		<CasinoLoop :posts="data.body.casino" />
		<Content :value="data.body.content" />
		<BlogLoop :posts="data.body.blog" />
	</main>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import H_1 from '~/components/h1/app-h1'
import Content from '~/components/content/app-content'
import CasinoLoop from '~/components/casino_loop/app_casino_loop'
import Banner from '~/components/banner/app_banner_main'
import BlogLoop from '~/components/blog_loop/app_blog_card'
import config from '~/config'
import helper from '~/helpers'
import headMixin from '~/mixins/head.js'
export default {
	name: 'top',
	mixins: [headMixin],
	data: () => {
		return {
			data: {}
		}
	},
	components: { H_1, Content, CasinoLoop, Banner, BlogLoop },
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: 'top'
		}
		const response = await DAL_Page.getData(request)
		const body = response.data
		const data = body
		data.body.currentUrl = config.BASE_URL[config.LANG] + route.path
		data.body.ampUrl = config.BASE_URL[config.LANG] + config.AMP_PREFIX + route.path
		data.body.headerLinks = helper.hreflang(data.body.hreflang)
		store.dispatch('options/setHrefLang', data.body.headerLinks)
		return { data }
	}
}
</script>

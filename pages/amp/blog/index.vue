<template>
	<div>
		<app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
		<main>
			<app_banner_amp />
			<app_h1_amp :value="data.body.h1" />
			<script_amp :src="BlogPathScript" v-if="BlogNumberPostOnQuery < data.body.blog.length">
				<BlogLoopAmp :posts="data.body.blog" />
			</script_amp>
			<BlogLoopAmp
				:posts="data.body.blog"
				v-if="data.body.blog.length !== 0 && BlogNumberPostOnQuery >= data.body.blog.length"
			/>
			<ContentAmp :value="data.body.amp_content" />
		</main>
		<app_footer_amp :options="data.options" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import DAL_Options from '~/DAL/options'
import app_h1_amp from '~/components/h1/app-h1_amp'
import app_banner_amp from '~/components/banner/app_banner_main_amp'
import BlogLoopAmp from '~/components/blog_loop/app_blog_card_amp'
import config from '~/config'
import script_amp from '~/components/script_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import { BLOG as BlogNumberPostOnQuery } from '~/config/postLoader'
import { BLOG as BlogPathScript } from '~/config/ampPathScript'
export default {
	name: 'blog_amp',
	data: () => {
		return {
			data: {},
			BlogNumberPostOnQuery,
			BlogPathScript
		}
	},
	mixins: [pageTemplateAmp],
	components: {
		app_h1_amp,
		app_banner_amp,
		BlogLoopAmp,
		script_amp
	},
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: 'blog'
		}
		const response = await DAL_Page.getData(request)
		const options = await DAL_Options.getOptions()
		const body = response.data
		const data = body
		data.body.currentUrl = config.BASE_URL[config.LANG] + route.path.replace(`${config.AMP_PREFIX}`, '')
		data.options = options.data
		return { data }
	}
}
</script>

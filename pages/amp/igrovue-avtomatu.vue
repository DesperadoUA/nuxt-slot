<template>
	<div>
		<app_header_amp :logo="data.options.logo" :menu_links="data.options.menu_link" />
		<main>
			<app_banner_amp />
			<app_h1_amp :value="data.body.h1" />
			<script_amp :src="CasinoPathScript" v-if="CasinoNumberPostOnQuery < data.body.casino.length">
				<CasinoLoopAmp :posts="data.body.casino" />
			</script_amp>
			<CasinoLoopAmp
				:posts="data.body.casino"
				v-if="data.body.casino.length !== 0 && CasinoNumberPostOnQuery >= data.body.casino.length"
			/>
			<ContentAmp :value="data.body.amp_content" />
			<script_amp :src="BlogPathScript" v-if="BlogNumberPostOnQuery < data.body.blog.length">
				<BlogLoopAmp :posts="data.body.blog" />
			</script_amp>
			<BlogLoopAmp
				:posts="data.body.blog"
				v-if="data.body.blog.length !== 0 && BlogNumberPostOnQuery >= data.body.blog.length"
			/>
		</main>
		<app_footer_amp :options="data.options" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import DAL_Options from '~/DAL/options'
import app_h1_amp from '~/components/h1/app-h1_amp'
import CasinoLoopAmp from '~/components/casino_loop/app_casino_loop_amp'
import app_banner_amp from '~/components/banner/app_banner_main_amp'
import BlogLoopAmp from '~/components/blog_loop/app_blog_card_amp'
import config from '~/config'
import script_amp from '~/components/script_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import { CASINO as CasinoNumberPostOnQuery } from '~/config/postLoader'
import { CASINO as CasinoPathScript } from '~/config/ampPathScript'
import { BLOG as BlogNumberPostOnQuery } from '~/config/postLoader'
import { BLOG as BlogPathScript } from '~/config/ampPathScript'
export default {
	name: 'igrovue-avtomatu_amp',
	data: () => {
		return {
			data: {},
			CasinoNumberPostOnQuery,
			CasinoPathScript,
			BlogNumberPostOnQuery,
			BlogPathScript
		}
	},
	mixins: [pageTemplateAmp],
	components: {
		app_h1_amp,
		CasinoLoopAmp,
		app_banner_amp,
		BlogLoopAmp,
		script_amp
	},
	async asyncData({ store, route }) {
		const request = {
			type: 'page',
			url: 'igrovue-avtomatu'
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

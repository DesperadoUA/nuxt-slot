<template>
	<section class="content casino_table_wrapper">
		<div class="container">
			<CasinoItem v-for="item in currentPosts" :key="item.id" :value="item" />
			<div class="casino_table_btn_wrapper" v-if="posts.length > numberPostOnQuery * postCurrentPage">
				<button class="btn_review" @click="postShowMore">{{ translates.DOWNLOAD_MORE[config.LANG] }}</button>
			</div>
		</div>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
import CasinoItem from '@/components/casino_item'
export default {
	name: 'app_casino_loop',
	props: ['posts'],
	mixins: [translateMixin],
	components: { CasinoItem },
	data() {
		return {
			numberPostOnQuery: NumberPostOnQuery,
			postCurrentPage: 1
		}
	},
	computed: {
		currentPosts() {
			return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
		}
	},
	filters: {
		rating(item) {
			return Math.trunc(item / 10)
		}
	},
	methods: {
		postShowMore() {
			this.postCurrentPage += 1
		}
	}
}
</script>

<style scoped>
.casino_table_wrapper {
	padding: 30px 0px;
	background: var(--blue-gradient);
}
</style>

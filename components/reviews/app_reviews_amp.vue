<template>
	<amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/amp-review.js`" class="sample">
		<section class="reviews" v-if="value.length !== 0" itemprop="review" itemscope itemtype="http://schema.org/Review">
			<div itemprop="itemReviewed" itemscope itemtype="https://schema.org/Organization">
				<meta itemprop="name" :content="title" />
			</div>
			<div class="container">
				<div class="reviews_title" itemprop="name">
					{{ translates.PLAYER_REVIEWS_ABOUT_THE_CASINO[config.LANG] }} {{ title }}
				</div>
				<div class="review_item" v-for="(item, index) in currentReviews" :key="index">
					<div class="review_item_title">
						<span itemprop="author">{{ item.review_name }}</span>
						<span itemprop="datePublished">{{ item.review_date }}</span>
					</div>
					<div class="review_item_rating">
						<div class="casino_item_rating_box">
							<div class="casino_item_rating_empty"></div>
							<div class="casino_item_rating_full" v-bind:style="{ width: item.review_rating + '%' }"></div>
						</div>
						<div class="revie_item_box_value">
							<span class="casino_item_ratin_value">{{ item.review_rating | rating }}</span
							>/10
						</div>
					</div>
					<div class="review_item_desc" itemprop="reviewBody">
						{{ item.review_text }}
					</div>
				</div>
				<div class="loadContainer"></div>
				<div class="reviews_show_more" v-if="value.length > numberReviewOnQuery * reviewCurrentPage">
					<span
						class="review_btn_show loadMoreBtn"
						:data-apiUrl="config.API_URL[config.LANG]"
						:data-postsOnQuery="numberReviewOnQuery"
						:data-ampPrefix="config.AMP_PREFIX"
						:data-post-type="post_type"
						:data-post-url="post_url"
						>{{ translates.SHOW_MORE[config.LANG] }}</span
					>
				</div>
			</div>
		</section>
	</amp-script>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import { REVIEW as NumberPostOnQuery } from '~/config/postLoader'
export default {
	name: 'app_reviews_amp',
	props: {
		title: {
			type: String,
			default: ''
		},
		value: {
			default: [],
			type: Array
		},
		post_type: {
			default: 'page',
			type: String
		},
		post_url: {
			default: '/',
			type: String
		}
	},
	mixins: [translateMixin],
	data() {
		return {
			numberReviewOnQuery: NumberPostOnQuery,
			reviewCurrentPage: 1
		}
	},
	computed: {
		currentReviews() {
			return this.value.slice(0, this.numberReviewOnQuery * this.reviewCurrentPage)
		}
	},
	filters: {
		rating(item) {
			return Math.trunc(item / 10)
		}
	}
}
</script>

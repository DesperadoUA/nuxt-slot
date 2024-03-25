<template>
	<section class="casino_table_wrapper">
		<div
			class="container"
			id="casino_loop"
			:data-post-type="post_type"
			:data-post-url="post_url"
			:data-apiUrl="config.API_URL[config.LANG]"
			:data-amp-prefix="config.AMP_PREFIX"
			:data-translate-go-to="translates.GO_TO[config.LANG]"
			:data-translate-referral-modal-btn="translates.REFERRAL_MODAL_BTN[config.LANG]"
			:data-translate-referral-modal-title="translates.REFERRAL_MODAL_TITLE[config.LANG]"
			:data-translate-referral-modal-description="translates.REFERRAL_MODAL_DESCRIPTION[config.LANG]"
		>
			<div class="casino_item" v-for="item in currentPosts" :key="item.id">
				<div class="casino_item_thumbnail">
					<a :href="getRef(item)" v-if="!item.relative_casino.length">
						<amp-img :src="item.thumbnail" width="200" height="100"></amp-img>
					</a>
					<div v-else :data-id="item.id" class="jsReferralPopUp">
						<amp-img :src="item.thumbnail" width="200" height="100"></amp-img>
					</div>
					<amp-img :src="item.marker" class="casino_item_marker" width="38" height="38"></amp-img>
					<div class="casino_item_licensed" v-if="item.licensed.length !== 0">
						<amp-img :src="licensed" v-for="licensed in item.licensed" :key="licensed" width="45" height="45"></amp-img>
					</div>
				</div>
				<div class="casino_item_rating casino_item_column ">
					<div>
						<div class="casino_item_title">{{ item.title }}</div>
						<div class="casino_item_subtitle">{{ item.sub_title }}</div>
						<div class="casino_item_rating_wrapper">
							<div class="casino_item_rating_container">
								<div class="casino_item_rating_box">
									<div class="casino_item_rating_empty"></div>
									<div class="casino_item_rating_full" v-bind:style="{ width: item.rating + '%' }"></div>
								</div>
								<div>
									<span class="casino_item_ratin_value">{{ item.rating | rating }}</span
									>/10
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="casino_item_packet casino_item_column ">
					<div v-if="item.bonuses.length != 0" class="casino_item_packet_item">
						<div class="casino_item_title_packet">{{ item.bonuses[0].bonuses_title }}</div>
						<div class="casino_item_sub_title_packet">{{ item.bonuses[0].bonuses_value }}</div>
						<div class="casino_item_title_packet">{{ item.bonuses[0].bonuses_sub_title }}</div>
					</div>
				</div>
				<div class="casino_item_weiger casino_item_column ">
					<div v-if="item.bonuses.length >= 2" class="casino_item_packet_item">
						<div class="casino_item_title_packet">{{ item.bonuses[1].bonuses_title }}</div>
						<div class="casino_item_sub_title_packet">{{ item.bonuses[1].bonuses_value }}</div>
						<div class="casino_item_title_packet">{{ item.bonuses[1].bonuses_sub_title }}</div>
					</div>
				</div>
				<div class="casino_item_buttons casino_item_column ">
					<div class="casino_item_buttons_box">
						<a class="btn_ref" :href="getRef(item)" v-if="!item.relative_casino.length">
							{{ translates.GO_TO[config.LANG] }}
						</a>
						<div v-else :data-id="item.id" class="btn_ref jsReferralPopUp">{{ translates.GO_TO[config.LANG] }}</div>
						<NuxtLink class="btn_review" no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`">
							{{ translates.REVIEW[config.LANG] }}
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="loadContainer"></div>
			<div class="referralModalContainer"></div>
			<div class="casino_table_btn_wrapper" v-if="posts.length > numberPostOnQuery * postCurrentPage">
				<button
					class="btn_review loadMoreBtn"
					:data-postsOnQuery="numberPostOnQuery"
					:data-translate-review="translates.REVIEW[config.LANG]"
				>
					{{ translates.DOWNLOAD_MORE[config.LANG] }}
				</button>
			</div>
		</div>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import getRef from '~/mixins/getRef.js'
import { CASINO as NumberPostOnQuery } from '~/config/postLoader'
export default {
	name: 'app_casino_loop_amp',
	props: {
		posts: {
			type: Array,
			default: []
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
	mixins: [translateMixin, getRef],
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
	}
}
</script>

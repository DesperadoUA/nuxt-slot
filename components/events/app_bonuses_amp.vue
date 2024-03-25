<template>
	<section class="bonus_card_wrapper" v-if="value.event.length !== 0">
		<div class="container">
			<div
				class="referralModalContainer"
				v-if="value.relative_casino.length"
				:data-relative-casino="JSON.stringify(value.relative_casino)"
				:data-title="value.title_pop_up ? value.title_pop_up : translates.REFERRAL_MODAL_TITLE[config.LANG]"
				:data-description="
					value.description_pop_up ? value.description_pop_up : translates.REFERRAL_MODAL_DESCRIPTION[config.LANG]
				"
				:data-translate-btn="translates.REFERRAL_MODAL_BTN[config.LANG]"
				:data-translate-go-to="translates.GO_TO[config.LANG]"
				:data-ampPrefix="config.AMP_PREFIX"
			></div>
			<div class="bonus_card_ttl">{{ translates.CASINO_BONUSES[config.LANG] }}</div>
			<div class="bonus_item" v-for="(item, i) in value.event" :key="i" itemscope itemtype="http://schema.org/Event">
				<div class="bonus_item_thumbnail">
					<amp-img itemprop="image" :src="item.thumbnail" width="200" height="100"></amp-img>
				</div>
				<div class="bonus_item_action">
					<div class="bonus_item_ttl" v-html="item.title" itemprop="name"></div>
					<div class="bonus_item_time">
						с <time itemprop="startDate" :datetime="item.start">{{ item.start }}</time>
						{{ translates.BEFORE[config.LANG] }}
						<time itemprop="endDate" :datetime="item.end">{{ item.end }}</time>
					</div>
					<div class="bonus_item_button_wrapper">
						<div class="bonus_item_button jsReferralPopUp" v-if="value.relative_casino.length">
							{{ translates.GET[config.LANG] }}
						</div>
						<a v-else class="bonus_item_button" :href="getRef(item)">{{ translates.GET[config.LANG] }}</a>
						<amp-accordion :id="`bonus${i}`" disable-session-states class="bonus_accordion">
							<section class="bonus_section_description">
								<header class="bonus_item_button_description">
									{{ translates.DESCRIPTION[config.LANG] }}
								</header>
								<div class="bonus_item_description">
									<p v-html="item.description" itemprop="description"></p>
								</div>
							</section>
						</amp-accordion>
					</div>
				</div>
				<div class="bonus_item_author" itemprop="performer" itemscope itemtype="http://schema.org/Person">
					<span itemprop="name">{{ translates.AUTHOR[config.LANG] }}: {{ item.name }}</span>
				</div>
				<div style="display:none" itemprop="location" itemscope itemtype="http://schema.org/VirtualLocation">
					Сайт: <span itemprop="url">{{ item.site }}</span>
				</div>
				<meta itemprop="eventStatus" content="https://schema.org/EventScheduled" />
				<meta itemprop="eventAttendanceMode" content="https://schema.org/OnlineEventAttendanceMode" />
				<span itemprop="organizer" itemscope="" itemtype="https://schema.org/Organization">
					<meta itemprop="name" :content="config.DOMAIN[config.LANG]" />
					<meta itemprop="url" :content="config.DOMAIN[config.LANG]" />
				</span>
				<span itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
					<meta itemprop="Price" content="0" />
					<meta itemprop="priceCurrency" content="грн/долл." />
					<meta itemprop="url" :content="item.site" />
					<link itemprop="availability" href="https://schema.org/InStock" />
					<meta itemprop="validFrom" content="2021-08-10 08:00:00+03:00" />
				</span>
			</div>
		</div>
	</section>
</template>

<script>
import translateMixin from '~/mixins/translate.js'
import getRef from '~/mixins/getRef.js'
export default {
	name: 'app_bonuses_loop_amp',
	mixins: [translateMixin, getRef],
	props: ['value'],
	methods: {
		activate(item) {
			item.status === 'close' ? (item.status = 'open') : (item.status = 'close')
		}
	}
}
</script>

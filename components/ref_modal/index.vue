<template>
	<Modal :name="name" @close="close">
		<div class="wrapper">
			<div class="title">{{ title }}</div>
			<div class="description">{{ description }}</div>
			<div class="loop">
				<div class="item" v-for="(item, index) in posts" :key="index">
					<ReferralCard :title="item.title" :src="item.thumbnail" :links="item.ref" />
				</div>
			</div>
			<div class="actions">
				<button class="btn" @click="onClick">{{ translates.REFERRAL_MODAL_BTN[config.LANG] }}</button>
			</div>
		</div>
	</Modal>
</template>
<script>
import translateMixin from '~/mixins/translate.js'
import Modal from '@/components/modal'
import ReferralCard from '@/components/ref_modal/card'
import { REFERRAL_MODAL_KEY } from '@/constants.js'
export default {
	name: 'ref_modal',
	mixins: [translateMixin],
	data() {
		return {
			name: REFERRAL_MODAL_KEY
		}
	},
	components: { Modal, ReferralCard },
	methods: {
		close(name) {
			this.$store.dispatch('modal/setStateModal', { key: name, status: false })
		},
		onClick() {
			this.$router.push('/')
			this.$store.dispatch('modal/setStateModal', { key: this.name, status: false })
		}
	},
	computed: {
		title() {
			return this.$store.getters['referralCasinoModal/getTitle']
		},
		description() {
			return this.$store.getters['referralCasinoModal/getDescription']
		},
		posts() {
			return this.$store.getters['referralCasinoModal/getPosts']
		}
	}
}
</script>
<style scoped>
.wrapper {
	width: 860px;
	max-width: 100%;
	background: white;
	border-radius: 8px;
	padding: 15px;
	box-sizing: border-box;
}
.title {
	text-align: center;
	font-family: var(--font);
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	color: var(--black);
}
.description {
	text-align: center;
	font-family: var(--font);
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	color: var(--black);
}
.btn {
	background: #005c98;
	background: var(--blue);
	border: 1px solid hsla(0, 0%, 100%, 0.2);
	box-sizing: border-box;
	box-shadow: inset 0 0 4px hsla(0, 0%, 100%, 0.25);
	border-radius: 10px;
	display: inline-block;
	font-family: 'Open Sans Bold';
	font-family: var(--font-bold);
	font-style: normal;
	font-size: 17px;
	line-height: 23px;
	text-align: center;
	color: #fff;
	color: var(--white);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	text-decoration: none;
	line-height: 46px;
	cursor: pointer;
	padding: 5px 15px;
}
.actions {
	display: flex;
	justify-content: center;
	padding: 15px 0px;
}
.loop {
	display: flex;
	gap: 20px;
	justify-content: center;
	padding-top: 40px;
	padding-bottom: 20px;
}
@media (min-width: 320px) and (max-width: 767px) {
	.title {
		font-size: 18px;
		line-height: 18px;
	}
	.description {
		margin-top: 10px;
		font-size: 14px;
		line-height: 14px;
	}
	.btn {
		line-height: 18px;
	}
	.loop {
		overflow-x: scroll;
		justify-content: flex-start;
	}
	.loop::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
	.item {
		flex-shrink: 0;
		flex-grow: 1;
	}
}
</style>

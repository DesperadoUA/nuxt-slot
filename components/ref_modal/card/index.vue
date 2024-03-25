<template>
	<div class="card">
		<div class="img_wrapper">
			<img :src="src" />
		</div>
		<div class="title_card">{{ title }}</div>
		<div class="card_action">
			<button class="card_btn" @click="goTo">{{ translates.GO_TO[config.LANG] }}</button>
		</div>
	</div>
</template>
<script>
import translateMixin from '~/mixins/translate.js'
export default {
	name: 'referral_card',
	props: {
		title: {
			type: String,
			default: ''
		},
		links: {
			type: Array,
			default: []
		},
		src: {
			type: String,
			default: ''
		}
	},
	mixins: [translateMixin],
	methods: {
		goTo() {
			if (this.links.length) {
				const min = 0
				const max = this.links.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				window.open(this.links[random].casino_ref, '_blank')
			}
		}
	}
}
</script>
<style scoped>
.card {
	background: var(--white);
	border: 1px solid var(--gray);
	box-sizing: border-box;
	box-shadow: 0 2px 10px rgba(77, 92, 129, 0.25);
	border-radius: 15px;
	padding-top: 5px;
	overflow: hidden;
}
.card img {
	max-width: 100%;
}
.img_wrapper {
	padding: 0px 5px;
}
.title_card {
	text-align: center;
	font-family: var(--font);
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	color: var(--black);
	padding: 5px;
}
.card_btn {
	margin-top: 15px;
	font-family: var(--font);
	width: 100%;
	height: 46px;
	background: var(--green);
	border: 1px solid var(--white-opacity-max);
	box-sizing: border-box;
	display: inline-block;
	font-size: 17px;
	line-height: 23px;
	text-align: center;
	color: var(--white);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	text-decoration: none;
	line-height: 46px;
	cursor: pointer;
}
</style>

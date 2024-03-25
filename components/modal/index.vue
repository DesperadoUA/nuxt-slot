<template>
	<div class="modal">
		<div class="wrapper_modal">
			<div class="close" @click="close"></div>
			<slot />
		</div>
	</div>
</template>

<script>
import './style.css'
export default {
	name: 'modal',
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	methods: {
		close() {
			this.$emit('close', this.name)
		}
	}
}
</script>
<style scoped>
.modal {
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 5;
	background: var(--modal-bg);
	top: 0;
	left: 0;
	padding: 20px;
	align-items: center;
	justify-content: center;
	display: flex;
	box-sizing: border-box;
}
.close {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: url('/img/Close.png');
	position: absolute;
	top: -40px;
	right: -40px;
	cursor: pointer;
}
.wrapper_modal {
	position: relative;
	max-width: 100%;
	box-sizing: border-box;
}
@media (min-width: 320px) and (max-width: 767px) {
	.close {
		right: 0%;
	}
}
</style>

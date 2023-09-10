<template>
	<amp-script layout="container" :src="src" class="sample">
		<slot></slot>
	</amp-script>
</template>
<script>
export default {
	name: 'script_amp',
	props: {
		src: {
			require: true,
			type: String
		}
	}
}
</script>

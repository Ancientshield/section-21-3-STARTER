<template>
	<div v-if="!flag" style="color: red">Name Changed!</div>
</template>
<script>
	import { computed } from 'vue';
	export default {
		props: ['user'],
		// 因為 setup 會在 props 前就執行，
		// 所以要用預設 props 參數傳入
		setup(props) {
			const flag = computed(() => {
				return props.user.name === 'John';
			});
			return {
				flag,
			};
		},
	};
</script>

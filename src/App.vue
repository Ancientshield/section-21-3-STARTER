<template>
	<div>
		<p>{{ num }}</p>
		<button @click.prevent="increment">Click Me</button>
	</div>
</template>

<script>
	export default {
		name: 'App',
		setup() {
			let num = 0;

			const increment = () => {
				num++;
			};

			return {
				num,
				increment,
			};
		},
	};
</script>

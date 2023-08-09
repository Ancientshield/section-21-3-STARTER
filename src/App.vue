<template>
	<div>
		<p>{{ num }}</p>
		<button @click.prevent="increment">Click Me</button>
		<p>{{ name }}</p>
		<p>
			<label>Input: <input type="text" v-model="phrase" /> </label>
		</p>
		<label
			>Reverse:
			<p style="display: inline">{{ reversePhrase }}</p>
		</label>
	</div>
</template>

<script>
	import { ref, reactive, toRefs, watchEffect } from 'vue';

	export default {
		name: 'App',
		setup() {
			let num = ref(0);

			const increment = () => {
				num.value++;
			};

			const user = reactive({
				name: 'John',
				age: 20,
			});

			setTimeout(() => {
				user.name = 'Luis';
			}, 3000);

			const phrase = ref('');
			const reversePhrase = ref('');

			watchEffect(() => {
				reversePhrase.value = phrase.value.split('').reverse().join('');
			});

			return {
				num,
				increment,
				...toRefs(user),
				phrase,
				reversePhrase,
			};
		},
	};
</script>

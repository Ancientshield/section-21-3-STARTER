<template>
	<div>
		<p>{{ num }}</p>
		<p>{{ double }}</p>
		<button type="button" @click.prevent="increment">Click Me</button>
		<p>{{ name }}</p>
		<p>
			<label>Input: <input type="text" v-model="phrase" /> </label>
		</p>
		<label
			>Reverse:
			<p style="display: inline">{{ reversePhrase }}</p>
		</label>
		<app-alert :user="user" />

		<button type="button" ref="btn">Button</button>
	</div>
</template>

<script setup>
	import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue';

	import AppAlert from './components/Alert.vue';
	import { useNumber } from './hooks/number.js';
	import { usePhrase } from './hooks/phrase.js';

	const btn = ref(null);
	onBeforeMount(() => {
		console.log('onBeforeMount()');
	});

	onMounted(() => {
		btn.value.addEventListener('click', () => {
			console.log('button clicked');
		});
	});

	const user = reactive({
		name: 'John',
		age: 20,
	});

	setTimeout(() => {
		user.name = 'Luis';
	}, 3000);

	const { num, increment, double } = useNumber();
	const { phrase, reversePhrase, num: phraseNum } = usePhrase();

	const { name } = toRefs(user);
</script>

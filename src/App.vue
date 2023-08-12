<template>
	<div>
		<p>{{ num }}</p>
		<p>{{ double }}</p>
		<button @click.prevent="increment">Click Me</button>
		<p>{{ name }}</p>
		<p>
			<label>Input: <input type="text" v-model="phrase" /> </label>
		</p>
		<label
			>Reverse:
			<p style="display: inline">{{ reversePhrase }}</p>
		</label>
		<app-alert :user="user" />
	</div>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs,
		watchEffect,
		computed,
		onBeforeMount,
		onMounted,
	} from 'vue';

	import AppAlert from './components/Alert.vue';

	export default {
		name: 'App',
		// 記得加s
		components: {
			// 不用 return
			AppAlert,
		},
		setup() {
			onBeforeMount(() => {
				console.log('onBeforeMount()');
			});

			onMounted(() => {
				console.log('onMounted()');
			});

			let num = ref(0);

			const increment = () => {
				num.value++;
			};

			const double = computed(() => {
				return num.value * 2;
			});

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
				double,
				user,
			};
		},
	};
</script>

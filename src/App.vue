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
			// ref 會創建在 setup 之前，若直接賦值會報錯
			// 故給 null
			const btn = ref(null);
			onBeforeMount(() => {
				console.log('onBeforeMount()');
			});

			onMounted(() => {
				console.log('onMounted()');
				// addEventListener 要在 Vue 實例創建後再掛載
				// 否則就會回傳 null
				btn.value.addEventListener('click', () => {
					console.log('button clicked');
				});
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
				btn,
			};
		},
	};
</script>

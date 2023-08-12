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

	export default {
		name: 'App',
		setup() {
			// 作者建議這兩個鉤子放 setup() 下面
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

			// computed function 會 return reactive reference，
			// 但 watch function 不會。
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

			// 方法一：使用 watchEffect，較簡潔
			watchEffect(() => {
				reversePhrase.value = phrase.value.split('').reverse().join('');
			});

			// 方法二：使用 watch
			// watch([phrase], ([newVal, oldVal]) => {
			// 	reversePhrase.value = phrase.value.split('').reverse().join('');
			// });

			return {
				num,
				increment,
				...toRefs(user),
				phrase,
				reversePhrase,
				double,
			};
		},
	};
</script>

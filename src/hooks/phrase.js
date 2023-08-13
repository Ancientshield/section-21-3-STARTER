import { ref, watchEffect } from 'vue';

export const usePhrase = () => {
	const phrase = ref('');
	const reversePhrase = ref('');
	const num = ref('');
	watchEffect(() => {
		reversePhrase.value = phrase.value.split('').reverse().join('');
	});
	return {
		phrase,
		reversePhrase,
		num,
	};
};

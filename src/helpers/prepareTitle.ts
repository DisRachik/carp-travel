export const prepareTitle: (str: string) => [string | null, string | null] = str => {
	if (str.trim() === '') {
		return [null, null];
	}
	const words = str.split(' ');
	if (words.length === 1) {
		return [words[0], null];
	} else {
		const restOfWords = words.slice(1).join(' ');
		return [words[0], restOfWords];
	}
};

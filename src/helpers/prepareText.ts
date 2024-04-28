type IPrepareText = (str: string, highlightedWords?: number) => [string | null, string | null];

export const prepareText: IPrepareText = (str, number = 1) => {
	if (str.trim() === '') {
		return [null, null];
	}

	const words = str.trim().split(' ');
	if (words.length === 1) {
		return [words[0], null];
	} else {
		const numberOfWords = Math.min(number, words.length);
		const restOfWords = words.slice(numberOfWords).join(' ');

		return [words.slice(0, numberOfWords).join(' '), restOfWords || null];
	}
};

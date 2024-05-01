type ITransformPhoneNumber = (tel: string) => string;

export const transformPhoneNumber: ITransformPhoneNumber = tel => {
	let result = '';

	for (let i = 0; i < tel.length; i++) {
		const char = tel.charAt(i);
		if ('0123456789'.includes(char)) {
			result += char;
		}
	}
	return result;
};

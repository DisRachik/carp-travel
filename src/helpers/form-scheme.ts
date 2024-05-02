export enum FieldType {
	NAME = 'name',
	EMAIL = 'email',
	MESSAGE = 'message',
}

export type IFormSchema = {
	required?: string;
	pattern?: {
		value: RegExp;
		message: string;
	};
	minLength?: {
		value: number;
		message: string;
	};
};

export const formSchemas: Record<FieldType, IFormSchema> = {
	[FieldType.NAME]: {
		required: 'Required',
		pattern: {
			value: /^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$/i,
			message: 'Incorrect name',
		},
		minLength: {
			value: 2,
			message: 'Incorrect name',
		},
	},
	[FieldType.EMAIL]: {
		required: 'Required',
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: 'Invalid email',
		},
	},
	[FieldType.MESSAGE]: {},
};

export enum FieldType {
	NAME = 'name',
	EMAIL = 'email',
	POSITION = 'position',
	PHONE = 'phone',
	MESSAGE = 'message',
	APPROVAL = 'approval',
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
			value: /^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$/,
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
	[FieldType.POSITION]: {},
	[FieldType.PHONE]: {
		required: 'Required',
		pattern: {
			value: /^[(]\d{3}[)](\s\d{2}){3}[\d]$/,
			message: 'Incorrect phone',
		},
	},
	[FieldType.MESSAGE]: {},
	[FieldType.APPROVAL]: {
		required: 'Required',
	},
};

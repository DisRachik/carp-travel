'use client';

import { useForm } from 'react-hook-form';
import { FormButton, CustomInput, CustomTextarea } from '@/components';
import { formSchemas } from '@/helpers';
import { FieldType } from '@/helpers/form-scheme';

type Form = {
	name: string;
	email: string;
	message: string;
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Form>();

	const onSubmit = (data: Form) => {
		console.log(data);
		reset();
	};

	return (
		<form
			name='contact'
			onSubmit={handleSubmit(onSubmit)}
			className='grid gap-5 md:grid-cols-3 md:gap-y-7 xl:grid-cols-2 xl:gap-x-7 xl:gap-y-10'
		>
			<CustomInput
				{...register(FieldType.NAME, formSchemas[FieldType.NAME])}
				label='Full name'
				placeholder='John Smith'
				errorMessage={errors.name?.message}
				className=''
			/>

			<CustomInput
				{...register(FieldType.EMAIL, formSchemas[FieldType.EMAIL])}
				label='E-mail'
				placeholder='johnsmith@email.com'
				errorMessage={errors.email?.message}
				className=''
			/>

			<CustomTextarea
				{...register(FieldType.MESSAGE)}
				label='Message'
				className='h-[221px] md:col-span-2 md:col-start-2 md:row-start-1 md:row-end-4 md:h-[249px] xl:col-start-1 xl:row-auto xl:h-[202px]'
			/>

			<FormButton className='md:col-start-3 xl:col-start-2 xl:mt-[-16px]'>SEND</FormButton>
		</form>
	);
};

export default ContactForm;

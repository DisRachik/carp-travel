'use client';

import { useForm } from 'react-hook-form';
import { FormButton, CustomInput } from '@/components';
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
		formState: { errors, isValid, isSubmitting },
	} = useForm<Form>();

	const onSubmit = (values: Form) => {
		console.log(values);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
			<CustomInput
				{...register(FieldType.NAME, formSchemas[FieldType.NAME])}
				label='Full name'
				placeholder='John Smith'
			/>

			<CustomInput
				{...register(FieldType.EMAIL, formSchemas[FieldType.EMAIL])}
				label='E-mail'
				placeholder='johnsmith@email.com'
			/>

			<label htmlFor='message' className='mb-1 text-xs/6 font-extralight'>
				<span>Message</span>
				<textarea
					{...register(FieldType.MESSAGE)}
					name='message'
					id='message'
					className='w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white'
				></textarea>
			</label>

			<FormButton>SEND</FormButton>
			{/* <FormButton disabled={isValid || isSubmitting}>SEND</FormButton> */}
		</form>
	);
};

export default ContactForm;

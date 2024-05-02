'use client';

import { useForm } from 'react-hook-form';
import { FormButton } from '@/components';

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
			<label htmlFor='name' className='mb-1 text-xs/6 font-extralight'>
				<span>Full name</span>
				<input
					{...register('name', {
						required: 'Required',
						pattern: {
							value: /^[a-zA-Z]+(([' \-][a-zA-Z])?[a-zA-Z]*)*$/i,
							message: 'Incorrect name',
						},
						minLength: {
							value: 2,
							message: 'Incorrect name',
						},
					})}
					type='text'
					id='name'
					placeholder='John Smith'
					className='w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white'
				/>
				<span>{errors.name?.message}</span>
			</label>

			<label htmlFor='email' className='mb-1 text-xs/6 font-extralight'>
				<span>E-mail</span>
				<input
					{...register('email', {
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email',
						},
					})}
					type='email'
					id='email'
					placeholder='johnsmith@email.com'
					className='w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white'
				/>
				<span>{errors.email?.message}</span>
			</label>

			<label htmlFor='message' className='mb-1 text-xs/6 font-extralight'>
				<span>Message</span>
				<textarea
					{...register('message')}
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

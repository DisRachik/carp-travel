'use client';

import { useForm, useFormState } from 'react-hook-form';
import { FormButton, CustomInput, CustomTextarea, CustomCheckbox } from '@/components';
import { formSchemas } from '@/helpers';
import { FieldType } from '@/helpers/form-scheme';
import { useEffect } from 'react';

type Form = {
	name: string;
	email: string;
	position: string;
	phone: string;
	message: string;
};

const CareerForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		watch,
		setValue,
		control,
	} = useForm<Form>({
		defaultValues: {
			phone: '',
		},
	});
	const { dirtyFields } = useFormState({
		control,
	});

	const observe = watch('phone');

	useEffect(() => {
		const watchPhone = watch('phone');
		const x = watchPhone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})$/) || [];
		let b = x[1] && watchPhone.length > 4 ? '(' + x[1] + ') ' + x[2] + ' ' + x[3] + ' ' + x[4] : '';
		setValue('phone', b.length > watchPhone.length ? b.trim() : watchPhone.trim());
	}, [setValue, watch, observe]);

	const onSubmit = (data: Form) => {
		console.log(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=''>
			<CustomInput
				label='Full name'
				{...register(FieldType.NAME, formSchemas[FieldType.NAME])}
				placeholder='John Smith'
				errorMessage={errors.name?.message}
				className=''
			/>
			<CustomInput
				label='E-mail'
				{...register(FieldType.EMAIL, formSchemas[FieldType.EMAIL])}
				placeholder='johnsmith@email.com'
				errorMessage={errors.email?.message}
				className=''
			/>
			<CustomInput
				label='Position'
				{...register(FieldType.POSITION, formSchemas[FieldType.POSITION])}
				placeholder='Movie maker'
				errorMessage={errors.position?.message}
				className=''
			/>
			<CustomInput
				label='Phone'
				{...register(FieldType.PHONE, formSchemas[FieldType.PHONE])}
				placeholder='(097) 12 34 567'
				errorMessage={errors.phone?.message}
				textToStartInput='+ 38'
				className=''
				controlUser={dirtyFields.phone}
			/>

			<CustomTextarea {...register(FieldType.MESSAGE)} label='Message' className='' />

			<CustomCheckbox />

			<FormButton className='md:col-start-3 xl:col-start-2 xl:mt-[-16px]'>SEND</FormButton>
		</form>
	);
};

export default CareerForm;

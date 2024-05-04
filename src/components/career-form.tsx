'use client';

import { useEffect } from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';
import clsx from 'clsx';
import { formSchemas } from '@/helpers';
import { FieldType } from '@/helpers/form-scheme';
import { FormButton, CustomInput, CustomTextarea, CustomCheckbox } from '@/components';

type Form = {
	name: string;
	email: string;
	position: string;
	phone: string;
	message: string;
	approval: boolean;
};

const defaultValues: Form = {
	name: '',
	email: '',
	position: '',
	phone: '',
	message: '',
	approval: false,
};

const CareerForm = ({ className }: { className: string }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		watch,
		setValue,
		control,
	} = useForm<Form>({
		defaultValues,
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
		<form
			name='career'
			onSubmit={handleSubmit(onSubmit)}
			className={clsx('grid gap-4 md:grid-cols-2 md:gap-x-5', className)}
		>
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
				type='number'
				{...register(FieldType.PHONE, formSchemas[FieldType.PHONE])}
				placeholder='(097) 12 34 567'
				errorMessage={errors.phone?.message}
				textToStartInput='+ 38'
				className=''
				controlUser={dirtyFields.phone}
			/>

			<CustomTextarea
				{...register(FieldType.MESSAGE)}
				label='Message'
				className='h-56 md:col-start-2 md:row-span-4 md:row-start-1 md:h-64 xl:h-[268px] xl:w-[292px]'
			/>

			<Controller
				name='approval'
				control={control}
				render={({ field }) => <CustomCheckbox checked={field.value} onChange={field.onChange} />}
			/>

			<FormButton className=''>SEND</FormButton>
		</form>
	);
};

export default CareerForm;

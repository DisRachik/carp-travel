'use client';

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

export interface ICustomInputProps extends ComponentPropsWithoutRef<'input'> {
	label?: string;
	placeholder?: string;
	errorMessage?: string;
}

const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
	({ label, placeholder, errorMessage, ...rest }, ref) => {
		const id = useId();
		return (
			<div>
				{label ? (
					<label htmlFor={id} className='mb-1 text-xs/6 font-extralight'>
						{label}
					</label>
				) : null}
				<input
					{...rest}
					ref={ref}
					id={id}
					placeholder={placeholder}
					className='w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white'
				/>
				{errorMessage ? <span>{errorMessage}</span> : null}
			</div>
		);
	},
);

CustomInput.displayName = 'Input';
export default CustomInput;

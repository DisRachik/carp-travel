'use client';

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';
import styles from '@/styles/custom-input.module.css';
import clsx from 'clsx';

export interface ICustomInputProps extends ComponentPropsWithoutRef<'input'> {
	label?: string;
	errorMessage?: string;
	className?: string;
	textToStartInput?: string;
	controlUser?: boolean | undefined;
}

const CustomInput = forwardRef<HTMLInputElement, ICustomInputProps>(
	({ label, errorMessage, className, textToStartInput, controlUser, ...rest }, ref) => {
		const id = useId();

		return (
			<div className={clsx(className, 'relative')}>
				{label ? (
					<label
						htmlFor={id}
						className={clsx('mb-1 text-xs/6 font-extralight tracking-[2.4px]', errorMessage && 'text-errorColor')}
					>
						{label}
					</label>
				) : null}
				<input
					{...rest}
					ref={ref}
					id={id}
					className={clsx(
						'w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white xl:text-xl/6',
						errorMessage && 'text-errorColor',
						textToStartInput && 'pl-11 xl:pl-[58px]',
						controlUser && 'pl-[52px] xl:pl-[66px]',
					)}
				/>
				{errorMessage ? (
					<div
						className={clsx(
							styles['error-message'],
							'absolute bottom-0 right-0 flex translate-y-full items-center justify-end gap-1',
						)}
					>
						<span className=' text-errorColor text-xs/6 font-extralight'>{errorMessage}</span>
					</div>
				) : null}
				{textToStartInput ? (
					<span
						className={clsx(
							'absolute bottom-0 left-0 px-2 py-[6px] text-[13px]/6 font-extralight text-white xl:text-xl/6',
							controlUser && ' translate-x-[8px]',
						)}
					>
						{textToStartInput}
					</span>
				) : null}
			</div>
		);
	},
);

CustomInput.displayName = 'Input';
export default CustomInput;
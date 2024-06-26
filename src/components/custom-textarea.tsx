'use client';

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';
import clsx from 'clsx';

export interface ICustomTextareaProps extends ComponentPropsWithoutRef<'textarea'> {
	label: string;
	className?: string;
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, ICustomTextareaProps>(({ label, className, ...rest }, ref) => {
	const id = useId();

	return (
		<div className={clsx('flex flex-col', className)}>
			{label ? (
				<label htmlFor={id} className='mb-1 text-xs/6 font-extralight tracking-[2.4px]'>
					{label}
				</label>
			) : null}
			<textarea
				{...rest}
				ref={ref}
				id={id}
				className='h-full w-full resize-none bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white xl:text-xl/6'
			/>
		</div>
	);
});

CustomTextarea.displayName = 'Textarea';
export default CustomTextarea;

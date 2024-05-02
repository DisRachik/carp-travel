'use client';

import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

export interface ICustomTextareaProps extends ComponentPropsWithoutRef<'textarea'> {
	label: string;
	className?: string;
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, ICustomTextareaProps>(({ label, className, ...rest }, ref) => {
	const id = useId();
	return (
		<div className={className}>
			{label ? (
				<label htmlFor={id} className='mb-1 text-xs/6 font-extralight tracking-[2.4px]'>
					{label}
				</label>
			) : null}
			<textarea
				{...rest}
				ref={ref}
				id={id}
				className='h-[193px] w-full bg-white/5 px-2 py-[6px] text-[13px]/6 font-extralight text-white md:h-[221px] xl:h-[174px] xl:text-xl/6'
			/>
		</div>
	);
});

CustomTextarea.displayName = 'Textarea';
export default CustomTextarea;

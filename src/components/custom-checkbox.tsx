export interface ICustomCheckboxProps {
	checked: boolean;
	onChange: (val: boolean) => void;
}

const CustomCheckbox = ({ checked, onChange }: ICustomCheckboxProps) => {
	return (
		<label className='inline-flex cursor-pointer items-start gap-2' htmlFor='checkbox'>
			<input
				id='checkbox'
				type='checkbox'
				checked={checked}
				required
				onChange={e => onChange(e.target.checked)}
				className="before:content[''] peer flex h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none border-2 p-[3px] before:block before:h-full before:w-full before:bg-white/10 before:transition-colors checked:before:bg-white/100"
			/>
			<span className='text-xs font-extralight leading-[1.834] xl:leading-6'>
				I confirm my consent to the processing of personal data.
			</span>
		</label>
	);
};

export default CustomCheckbox;

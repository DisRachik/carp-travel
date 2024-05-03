export interface ICustomCheckboxProps {}

const CustomCheckbox = ({}: ICustomCheckboxProps) => {
	return (
		<label className='inline-flex cursor-pointer items-center gap-2' htmlFor='checkbox'>
			<input
				type='checkbox'
				className="before:content[''] peer flex h-[22px] w-[22px] cursor-pointer appearance-none border-2 p-[3px] before:block before:h-full before:w-full before:bg-white/10 before:transition-colors checked:before:bg-white/100"
				id='checkbox'
			/>
			<span>I confirm my consent to the processing of personal data.</span>
		</label>
	);
};

export default CustomCheckbox;

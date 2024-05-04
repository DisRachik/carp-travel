import clsx from 'clsx';

export interface ISliderNavButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	className?: string;
	children: string;
}

const SliderNavButton: React.FC<ISliderNavButtonsProps> = ({ onClick, className, children }) => {
	return (
		<div className={clsx('text-[33px] font-thin uppercase', className)}>
			<button
				type='button'
				onClick={onClick}
				className='hover:animate-bounce hover:font-light focus:animate-bounce focus:font-light'
			>
				{children}
			</button>
		</div>
	);
};

export default SliderNavButton;

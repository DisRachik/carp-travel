import clsx from 'clsx';

export interface ISliderNavButtonsProps {
	onClick: () => void;
	className?: string;
	children: string;
}

const SliderNavButton: React.FC<ISliderNavButtonsProps> = ({ onClick, className, children }) => {
	return (
		<div className={clsx('text-[33px] font-thin uppercase', className)}>
			<button type='button' onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default SliderNavButton;

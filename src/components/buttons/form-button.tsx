import clsx from 'clsx';

export interface IFormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	className?: string;
}

const FormButton: React.FC<IFormButtonProps> = ({ disabled, className, ...rest }) => {
	return (
		<button
			{...rest}
			type='submit'
			className={clsx(
				'inline-block justify-self-end text-3xl font-medium hover:animate-bounce focus:animate-bounce xl:text-[32px]',
				className,
				disabled && '',
			)}
		/>
	);
};

export default FormButton;

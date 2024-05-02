import clsx from 'clsx';

export interface IFormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

const FormButton: React.FC<IFormButtonProps> = ({ disabled, ...rest }) => {
	return (
		<button
			{...rest}
			type='submit'
			className={clsx('inline-block justify-self-end text-3xl font-medium xl:text-[32px]', disabled && '')}
		/>
	);
};

export default FormButton;

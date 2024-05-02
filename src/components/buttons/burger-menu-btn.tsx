import clsx from 'clsx';

export interface IBurgerMenuBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isOpen: boolean;
}

const BurgerMenuBtn = ({ isOpen, onClick }: IBurgerMenuBtnProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			aria-label={isOpen ? 'close Menu' : 'open Menu'}
			className={clsx('text-sm uppercase leading-normal tracking-widest md:hidden', !isOpen && 'h-full')}
		>
			{isOpen ? 'CLOSE' : 'MENU'}
		</button>
	);
};

export default BurgerMenuBtn;

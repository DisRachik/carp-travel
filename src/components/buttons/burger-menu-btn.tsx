export interface IBurgerMenuBtnProps {
	isOpen: boolean;
	onClick: () => void;
}

const BurgerMenuBtn = ({ isOpen, onClick }: IBurgerMenuBtnProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			aria-label={isOpen ? 'close Menu' : 'open Menu'}
			className='text-sm uppercase leading-normal tracking-widest'
		>
			{isOpen ? 'CLOSE' : 'MENU'}
		</button>
	);
};

export default BurgerMenuBtn;

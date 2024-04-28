'use client';

import { Button } from 'react-scroll';
import { section } from '../section';
import clsx from 'clsx';

import styles from './button-scroll.module.css';

export interface IButtonScrollProps {
	scrollTo: section;
	className?: string;
	children: React.ReactNode;
}

const ButtonScroll: React.FC<IButtonScrollProps> = ({ scrollTo, className, children }) => {
	return (
		<Button
			to={scrollTo}
			smooth={true}
			duration={500}
			type='button'
			className={clsx(
				'flex h-[53px] items-center justify-between bg-white/10 text-lg uppercase leading-[2.67] hover:bg-white/20 md:h-[50px] xl:h-[71px]',
				styles['hero-button'],
				className,
			)}
		>
			{children}
		</Button>
	);
};

export default ButtonScroll;

import { FC, ReactNode } from 'react';
import clsx from 'clsx';

export interface IContainerProps {
	children: ReactNode;
	className?: string;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
	return <div className={clsx('container', className)}>{children}</div>;
};

export default Container;

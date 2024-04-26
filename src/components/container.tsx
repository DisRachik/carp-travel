// import styles from "./Container.module.css"

import clsx from 'clsx';

export interface IContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
	return <div className={clsx('sm:container', className)}>{children}</div>;
};

export default Container;

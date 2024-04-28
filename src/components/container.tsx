import clsx from 'clsx';

export interface IContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<IContainerProps> = ({ className, children }) => {
	return <div className={clsx('container', className)}>{children}</div>;
};

export default Container;

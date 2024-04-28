import { prepareTitle } from '@/helpers';
import { section } from './section';
import clsx from 'clsx';

export interface ITitleProps {
	sectionName: section;
	elementName: string;
	className?: string;
	children: string;
}

interface IHtmlElementFactoryProps {
	el: string;
	className: string;
	children: React.ReactNode;
}

const HtmlElementFactory = ({ el, className, children }: IHtmlElementFactoryProps) => {
	switch (el) {
		case 'h1':
			return <h1 className={className}>{children}</h1>;
		case 'h2':
			return <h2 className={className}>{children}</h2>;
		case 'h3':
			return <h3 className={className}>{children}</h3>;
		case 'span':
			return (
				<span
					className={clsx(
						className,
						'text-[37px] uppercase leading-normal tracking-[1.665px] md:tracking-[8.71px] xl:tracking-normal',
					)}
				>
					{children}
				</span>
			);

		default:
			return null;
	}
};

const Title: React.FC<ITitleProps> = ({ sectionName, elementName = 'h2', className, children }) => {
	const [firstWordOfTitle, nextTitle] = prepareTitle(children);

	return (
		<HtmlElementFactory
			el={elementName}
			className={clsx(
				'text-[40px] font-thin uppercase leading-[1.4] tracking-[-1.6px] md:text-[67px] md:leading-tight md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]',
				className,
			)}
		>
			<>
				{firstWordOfTitle && (
					<span className={clsx(sectionName === section.Hero && 'font-medium')}>{firstWordOfTitle}</span>
				)}
				{nextTitle && (
					<>
						{' '}
						<span className={clsx(sectionName !== section.Hero && 'font-medium')}>{nextTitle}</span>
					</>
				)}
			</>
		</HtmlElementFactory>
	);
};

export default Title;

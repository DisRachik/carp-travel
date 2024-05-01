import clsx from 'clsx';
import { prepareText } from '@/helpers';
import { section } from '@/components/section';
import { IHtmlElFactoryProps } from '@/components/html-el-factory';
import { HtmlElFactory } from '@/components/';

export interface ITitleProps extends IHtmlElFactoryProps {
	sectionName: section;
	children: string;
}

const Title: React.FC<ITitleProps> = ({ sectionName, elementName, className, children }) => {
	const [firstWordOfTitle, nextTitle] = prepareText(children);

	return (
		<HtmlElFactory
			elementName={elementName}
			className={clsx(
				'font-thin uppercase md:text-[67px] xl:text-[98px]',
				(elementName === 'h1' || elementName === 'h2') &&
					'text-[40px]  leading-[1.4] tracking-[-1.6px] md:leading-tight md:tracking-[-2.68px] xl:tracking-[-3.92px]',
				elementName === 'span' &&
					'text-[37px] leading-normal tracking-[1.665px] md:tracking-[8.71px] xl:tracking-normal',
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
		</HtmlElFactory>
	);
};

export default Title;

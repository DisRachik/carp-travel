import { FC } from 'react';
import clsx from 'clsx';
import { prepareText } from '@/helpers';

export interface IInfoAboutUsProps {
	numberHighlightedWords?: number;
	children: string;
	className?: string;
}

const InfoAboutUs: FC<IInfoAboutUsProps> = ({ numberHighlightedWords, children, className }) => {
	const [highlightedPhrase, nextPhrase] = prepareText(children, numberHighlightedWords);
	return (
		<p className={clsx('text-sm font-extralight md:text-base/5 xl:text-lg/6', className)}>
			<span className='font-normal'>{highlightedPhrase} </span>
			{nextPhrase}
		</p>
	);
};

export default InfoAboutUs;

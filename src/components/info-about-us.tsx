// import styles from "./InfoAboutUs.module.css"

import { prepareText } from '@/helpers';
import clsx from 'clsx';

export interface IInfoAboutUsProps {
	numberHighlightedWords?: number;
	children: string;
	className?: string;
}

const InfoAboutUs: React.FC<IInfoAboutUsProps> = ({ numberHighlightedWords, children, className }) => {
	const [highlightedPhrase, nextPhrase] = prepareText(children, numberHighlightedWords);
	return (
		<p className={clsx('text-sm font-extralight md:text-base/5 xl:text-lg/6', className)}>
			<span className='font-normal'>{highlightedPhrase} </span>
			{nextPhrase}
		</p>
	);
};

export default InfoAboutUs;

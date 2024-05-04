import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from '@/styles/section.module.css';
import { HtmlElFactory } from '@/components/';

export enum section {
	Hero = 'hero',
	About = 'about',
	Services = 'services',
	Career = 'career',
	Gallery = 'gallery',
	Contacts = 'contacts',
}

export interface ISectionProps {
	sectionTitle: section;
	className?: string;
	elementName?: string;
	children: ReactNode;
}

const Section: FC<ISectionProps> = ({ sectionTitle, elementName = 'section', className, children }) => {
	return (
		<HtmlElFactory
			idAnchor={sectionTitle}
			elementName={elementName}
			className={clsx('bg-bgColor/50 py-14 md:py-16 xl:py-20', styles[`bg-${sectionTitle}`], className)}
		>
			{children}
		</HtmlElFactory>
	);
};

export default Section;

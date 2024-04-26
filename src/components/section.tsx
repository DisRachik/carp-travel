import clsx from 'clsx';
import styles from './section.module.css';

export enum section {
	Hero = 'hero',
	About = 'about',
	Services = 'services',
	Career = 'career',
	Gallery = 'gallery',
	Contacts = 'contacts',
}

export interface ISectionProps {
	className?: string;
	sectionTitle: section;
	children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ sectionTitle, className, children }) => {
	return (
		<section
			id={sectionTitle}
			className={clsx('bg-bgColor/50 py-14 md:py-16 xl:py-20', styles[`bg-${sectionTitle}`], className)}
		>
			{children}
		</section>
	);
};

export default Section;

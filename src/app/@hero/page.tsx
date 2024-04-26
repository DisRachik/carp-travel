import { Container } from '@/components';
import Section, { section } from '@/components/section';
import Image from 'next/image';
// import styles from './heroSection.module.css';
import content from '@/data/content.json';

const HeroSection = () => {
	return (
		<Section sectionTitle={section.Hero}>
			<Container className=''>
				<Image src={content.gallery.cards[1].image} alt='test' width={500} height={400} />
				<h1>{content.hero.title}</h1>
			</Container>
		</Section>
	);
};

export default HeroSection;

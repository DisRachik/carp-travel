import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

import content from '@/data/content.json';
const { title, cards } = content.gallery;

const GallerySection = () => {
	return (
		<Section sectionTitle={section.Gallery} className=''>
			<Container className=''>
				<Title sectionName={section.Gallery} elementName='h2' className=''>
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default GallerySection;

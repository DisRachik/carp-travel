import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

import content from '@/data/content.json';
const { title, cards } = content.services;

const ServicesSection = () => {
	return (
		<Section sectionTitle={section.Services} className=''>
			<Container className=''>
				<Title sectionName={section.Services} elementName='h2' className=''>
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default ServicesSection;

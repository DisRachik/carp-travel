import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

import content from '@/data/content.json';
const { title, text, motto } = content.about;

const AboutSection = () => {
	return (
		<Section sectionTitle={section.About} className=''>
			<Container className='grid grid-cols-2'>
				<Title sectionName={section.About} elementName='h2' className='col-start-1 col-end-3'>
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default AboutSection;

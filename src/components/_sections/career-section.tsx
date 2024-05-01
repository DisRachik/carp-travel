import content from '@/data/content.json';
import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

const { title, subtitle, text, theses } = content.career;

const CareerSection = () => {
	return (
		<Section sectionTitle={section.Career} className=''>
			<Container className=''>
				<Title sectionName={section.Career} elementName='h2' className=''>
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default CareerSection;

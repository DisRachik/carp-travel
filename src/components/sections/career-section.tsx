import content from '@/data/content.json';
import { Section, Container, Title, QASession, CareerForm } from '@/components';
import { section } from '@/components/section';

const { title, subtitle, text, theses } = content.career;

const CareerSection = () => {
	return (
		<Section sectionTitle={section.Career}>
			<Container className=''>
				<Title sectionName={section.Career} elementName='h2'>
					{title}
				</Title>

				{text.map((item, i) => (
					<p key={i}>{item}</p>
				))}
				<p>{subtitle}</p>

				<ul>
					{theses.map((item, i) => (
						<li key={i}>
							<QASession issue={item} />
						</li>
					))}
				</ul>

				<CareerForm />
			</Container>
		</Section>
	);
};

export default CareerSection;

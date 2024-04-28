import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

import content from '@/data/content.json';
const { title, contacts, socials } = content.contacts;

const ContactsSection = () => {
	return (
		<Section sectionTitle={section.Contacts} elementName='footer' className=''>
			<Container className='grid grid-cols-2'>
				<Title sectionName={section.Contacts} elementName='h2' className='col-start-1 col-end-3'>
					{title}
				</Title>
			</Container>
		</Section>
	);
};

export default ContactsSection;

import content from '@/data/content.json';
import { Section, Container, Title, ContactsBlock, ContactForm } from '@/components';
import { section } from '@/components/section';
import { contactsValue } from '@/components/contacts-block';

const { title, contacts } = content.contacts;

const ContactsSection = () => {
	return (
		<Section sectionTitle={section.Contacts} elementName='footer'>
			<Container className='xl:grid xl:grid-cols-2'>
				<Title sectionName={section.Contacts} elementName='h2' className='mb-9 xl:col-span-2'>
					{title}
				</Title>
				<div className='mb-3 flex flex-col items-end gap-6 md:mb-16 md:h-24 md:flex-wrap md:items-start md:pl-[34px] xl:m-0 xl:mr-auto xl:h-full xl:gap-16 xl:pl-[100px]'>
					<ContactsBlock type={contactsValue.Phone} data={contacts.phones} />
					<ContactsBlock type={contactsValue.Email} data={contacts.emails} />
					<ContactsBlock type={contactsValue.Link} data={contacts.socials} alignLabelLeft />
				</div>
				<ContactForm />
			</Container>
		</Section>
	);
};

export default ContactsSection;

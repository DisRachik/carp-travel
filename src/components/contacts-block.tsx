import { FC } from 'react';
import clsx from 'clsx';
import { transformPhoneNumber } from '@/helpers';

export const enum contactsValue {
	Phone = 'phone',
	Email = 'email',
	Link = 'link',
}

interface ContactList {
	list: string[];
	listTitle: string;
}

interface SocialList {
	list: { text: string; href: string }[];
	listTitle: string;
}

export interface ILinkElProps {
	type: contactsValue;
	value: string | { text: string; href: string };
	className?: string;
}

const LinkEl: FC<ILinkElProps> = ({ value, type, className }) => {
	return (
		<>
			{typeof value === 'string' && type === contactsValue.Phone && (
				<a href={`tel:+${transformPhoneNumber(value)}`} className={className}>
					{value}
				</a>
			)}
			{typeof value === 'string' && type === contactsValue.Email && (
				<a href={`mailto:${value}`} className={className}>
					{value}
				</a>
			)}
			{typeof value === 'object' && type === contactsValue.Link && (
				<a href={`${value.href}`} target='_blank' rel='noopener nofollow noreferrer' className={className}>
					{value.text}
				</a>
			)}
		</>
	);
};

export interface IContactsBlockProps {
	type: contactsValue;
	data: ContactList | SocialList;
	className?: string;
	alignLabelLeft?: boolean;
}

const ContactsBlock = ({ type, data, alignLabelLeft = false }: IContactsBlockProps) => {
	return (
		<div
			className={clsx(
				'flex justify-center gap-5 xl:justify-end xl:self-end',
				!alignLabelLeft && 'flex-row-reverse',
				alignLabelLeft && 'md:self-start xl:mt-auto xl:flex-row-reverse',
			)}
		>
			<p className={clsx('pt-1 text-xs/5 font-extralight xl:min-w-20', !alignLabelLeft && 'min-w-20')}>
				{data.listTitle}
			</p>
			<ul className='min-w-20'>
				{data.list.map((item, el) => (
					<li key={el}>
						<LinkEl
							value={item}
							type={type}
							className='text-sm/6 hover:underline focus:underline md:text-base xl:text-lg/6'
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactsBlock;

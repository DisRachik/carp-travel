import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';
import { ContactsSection } from '@/app/_sections';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CarpTravel',
	description:
		'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<ContactsSection />
			</body>
		</html>
	);
}

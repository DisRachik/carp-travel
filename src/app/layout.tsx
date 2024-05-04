import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { ContactsSection } from '@/components/sections';
import { Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://carp-travel-ef2xydnby-rachiks-projects.vercel.app/'),
	title: 'CarpTravel',
	description:
		'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
	openGraph: {
		images: '/opg-image.png',
	},
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
				<Toaster position='bottom-left' />
			</body>
		</html>
	);
}

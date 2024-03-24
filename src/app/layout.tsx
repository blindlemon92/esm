import type, { Metadata } from 'next';

import { MantineProvider } from '@mantine/core';
import { Cabin } from 'next/font/google';

import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
	title: 'Erin Stoll | Home',
	description: 'Official Home Page for Erin Stoll',
};

const cabin = Cabin({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cabin.className}>
				<MantineProvider>
					<div className='bg-gradient-to-r from-[rgb(3,10,28)] from-20% via-[rgb(2,14,33)] via-30% to-[rgb(0,18,38)];'>
						{children}
					</div>
				</MantineProvider>
				<ToastContainer />
			</body>
		</html>
	);
}

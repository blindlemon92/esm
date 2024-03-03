import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cabin } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });
const cabin = Cabin({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Erin Stoll | Home',
	description: 'Official Home Page for Erin Stoll',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cabin.className}>
				<div className='bg-gradient-to-r from-[rgb(3,10,28)] from-20% via-[rgb(2,14,33)] via-30% to-[rgb(0,18,38)];'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}

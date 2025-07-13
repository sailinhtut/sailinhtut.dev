import { Toaster } from '@/components/shadcn/components/ui/sonner';
import '../css/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sai Lin Htut',
	description: 'Software Engineer',
	keywords:
		'software development,website development,web application development,mobile development,yangon,myanmar,hire developer,professional software developer',
	icons: {
		icon: '/favicon.svg',
	},
	openGraph: {
		title: 'Sai Lin Htut - Software Engineer',
		description:
			'Professional software developer specializing in web and mobile applications.',
		url: 'https://sailinhtut.dev',
		siteName: 'Sai Lin Htut',
		images: [
			{
				url: '/sailinhtut.png',
				width: 1200,
				height: 630,
				alt: 'Sai Lin Htut - Software Engineer',
			},
		],
		type: 'website',
	},
	other: {
		'google-site-verification': 'prrzpWS2QzbwVpGbSN5iagu0uIOpL3XE8F8UWjxPMRo',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				{children}
				<Toaster theme='dark' position='bottom-right' />
			</body>
		</html>
	);
}

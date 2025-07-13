import Footer from '../components/footer';
import NavBar from '../components/navbar';
import { Metadata } from 'next';
import MouseEffect from '../components/mouse_effect';
import HomeSectionOne from './section_one';
import HomeSectionTwo from './section_two';
import HomeSectionThree from './section_three';
import HomeSectionFour from './section_four';
import ProjectPreviewSection from './section_five';

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

export default function HomePage() {
	return (
		<>
			<NavBar />

			<main className='bg-background relative'>
				<div className='w-1/2 h-[500px] bg-blue-500 absolute right-0  opacity-100 -z-10'></div>
				<div className='w-1/2 h-[500px] bg-blue-500 absolute bottom-0 left-0 opacity-100 -z-10'></div>

				<HomeSectionOne />
				<HomeSectionTwo />
				<HomeSectionThree />
				<HomeSectionFour />
				<ProjectPreviewSection/>

			
			</main>

			<Footer />
		</>
	);
}

import Link from 'next/link';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import TypingEffect from '../components/typing_effect';
import prayer from '../../public/prayer.png';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Available Services',
	description: 'Software Service Plan and Development Plan',
	keywords:
		'software development,website development,web application development,mobile development,yangon,myanmar,hire developer,professional software developer',
	icons: {
		icon: '/favicon.svg',
	},
	openGraph: {
		title: 'Sai Lin Htut - Available Software Service',
		description: 'Software Service Plan and Development Plan.',
		url: 'https://sailinhtut.dev',
		siteName: 'Sai Lin Htut',
		images: [
			{
				url: 'https://sailinhtut.dev/burma.png',
				width: 1200,
				height: 630,
				alt: 'Sai Lin Htut - Software Engineer',
			},
		],
		type: 'website',
	},
};

export default function ServicePage() {
	return (
		<>
			<NavBar active={1} />
			<main className='relative bg-[#091923]'>
				<div className='w-1/2 h-[500px] bg-purple-500 absolute right-0 blur-[200px] opacity-10'></div>
				<div className='w-1/2 h-[500px] bg-blue-500 absolute blur-[200px] bottom-0 left-0 opacity-20'></div>
				<section className='min-h-screen pt-[60px] p-5 text-white flex flex-col-reverse md:flex-row justify-end'>
					<div className='w-full md:w-1/2 relative'>
						<div className='w-auto md:w-[500px] md:absolute md:bottom-1/3 md:left-32 md:text-2xl text-normal mt-5 text'>
							<h1 className='text-2xl font-medium text-primary gradient-text'>
								Software Services
							</h1>
							<TypingEffect
								text='We are working on progress. Thank for your patience and we will come back with best services for you. Stay tunned...'
								speed={100}
							/>
						</div>
					</div>
					<div className='w-full md:w-1/2 relative'>
						<div className='md:absolute md:top-32 md:left-1/2 md:-translate-x-1/2 md:size-[300px] size-[200px] relative flex justify-center items-end overflow-hidden md:overflow-visible mt-5 md:mt-0'>
							<Image
								src={prayer}
								alt='Sai Lin Htut'
								className='rounded-3xl md:rounded-[60px] md:border-2 border border-white/5 md:border-white/20  md:w-[300px] md:h-[300px]  w-[200px] h-[200px] relative hover:border-blue-500 object-cover'
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

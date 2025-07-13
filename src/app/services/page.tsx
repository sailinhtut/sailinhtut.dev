'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/components/ui/card';
import { Button } from '@/components/shadcn/components/ui/button';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import Footer from '@/components/footer';

const services = [
	{
		title: 'Frontend Website',
		price: '$799',
		description: 'Responsive, fast, and SEO-friendly modern website UI',
		features: [
			'Tailored UI with Tailwind CSS & ShadCN',
			'Responsive design (mobile, tablet, desktop)',
			'Landing, About, Services, Contact pages',
			'Animations using Framer Motion',
			'SEO optimization & performance tuning',
		],
	},
	{
		title: 'Mobile App Development',
		price: '$1499',
		description: 'Cross-platform Flutter apps for Android & iOS',
		features: [
			'Flutter-based Android & iOS support',
			'Modern UI/UX and smooth animations',
			'REST API or Firebase integration',
			'Authentication and push notifications',
			'App Store & Google Play submission support',
		],
	},
	{
		title: 'Full Stack Website',
		price: '$2199',
		description: 'Complete web solution with backend and CMS support',
		features: [
			'Next.js + Tailwind + ShadCN frontend',
			'Laravel/Express/Nest/Spring Boot',
			'REST API backend & GraphQL',
			'Authentication & role management',
			'Admin dashboard with CRUD support',
			'Deployment & domain configuration',
		],
	},
];

export default function ServicesPage() {
	return (
		<div>
			<NavBar active={3}/>
			<div className='mt-[60px] min-h-screen max-w-6xl mx-auto px-4 py-12'>
				<div className='text-center mb-12'>
					<h1 className='text-xl lg:text-4xl font-bold mb-2 text-white'>
						Personal Development Services
					</h1>
					<p className='text-gray-400 text-base'>
						Choose the best plan that suits your digital product vision
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, idx) => (
						<Card
							key={idx}
							className='flex flex-col justify-start shadow-xl bg-gray-900 border-gray-700'>
							<CardHeader>
								<CardTitle className='text-white text-lg  lg:text-2xl'>
									{service.title}
								</CardTitle>
								<p className='text-gray-400 mt-2'>{service.description}</p>
							</CardHeader>
							<CardContent className='h-full flex flex-col justify-between'>
								<ul className='text-sm text-gray-300 list-disc list-inside space-y-1 mb-4'>
									{service.features.map((feature, i) => (
										<li key={i}>{feature}</li>
									))}
								</ul>
								<div className='flex items-center justify-between'>
									<span className='text-white font-bold text-xl'>
										{service.price}
									</span>
									<Link href='/contact'>
										<Button className='text-sm'>Get Started</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

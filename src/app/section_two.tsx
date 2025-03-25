'use client';

import { Button } from '@/components/ui/button';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import ShadeOrbitContainer from './components/shade_orbit';
import { motion } from 'framer-motion';
import kotlin from '../../public/kotlin.svg';
import react_js from '../../public/react_js.svg';
import next_js from '../../public/next_js.svg';
import laravel from '../../public/laravel.svg';
import node_js from '../../public/node_js.svg';
import mysql from '../../public/mysql.svg';
import firebase from '../../public/firebase.svg';
import flutter from '../../public/flutter.svg';
import express_js from '../../public/express_js.svg';
import mongoDB from '../../public/mongodb.svg';
import nginx from '../../public/nginx.svg';
import vps from '../../public/vps.svg';
import socket_io from '../../public/socket_io.svg';
import apache_server from '../../public/apache_server.svg';

import Image from 'next/image';
import TypingEffect from './components/typing_effect';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronRight } from 'lucide-react';

export default function HomeSectionTwo() {
	const [contentIndex, setContentIndex] = useState(1);

	const [typed, setTyped] = useState<number | undefined>(undefined);
	const markedTyped = (index: number) => {
		setTyped(index);
		// setTimeout(() => {
		// 	let nextIndex = index >= 4 ? 1 : index + 1;
		// 	console.log(nextIndex);
		// 	setContentIndex(nextIndex);
		// }, 10000);
	};

	return (
		<section className='w-full min-h-scree lg:py-[100px] pt-[30px] '>
			<motion.div
				initial={{ opacity: 0, y: '100%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				<h2 className='lg:ml-[100px] ml-3 lg:text-3xl text-lg text-white font-medium'>
					Technologies Under The Hook
				</h2>
			</motion.div>
			<div className='flex lg:flex-row flex-col lg:justify-start'>
				<div className='w-full lg:w-2/5  lg:pl-[100px] lg:pt-[50px] p-3'>
					<div className='flex flex-col items-center lg:items-start'>
						{contentIndex === 1 && (
							<motion.div
								className='mt-3 lg:w-[400px] lg:h-[400px] w-[300px] h-[350px] relative'
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<TechStackIcon
									image={react_js}
									name='React JS'
									link='https://react.dev'
									className='left-[120px] top-[0] lg:left-[160px] lg:top-[0]'
								/>
								<TechStackIcon
									image={next_js}
									name='Next JS'
									link='https://nextjs.org'
									className='left-[10px] top-[100px] lg:left-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									image={node_js}
									name='Node JS'
									link='https://nodejs.org'
									className='right-[10px] top-[100px] lg:right-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									image={laravel}
									name='Laravel'
									link='https://laravel.com'
									className='left-[10px] top-[220px] lg:left-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									image={mysql}
									name='MySQL'
									link='https://www.mysql.com'
									className='right-[10px] top-[220px] lg:right-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									image={apache_server}
									name='Apache Server'
									link='https://httpd.apache.org'
									className='left-[115px] top-[150px] lg:left-[160px] lg:top-[150px]'
								/>
							</motion.div>
						)}

						{contentIndex === 2 && (
							<motion.div
								className='mt-3 lg:w-[400px] lg:h-[400px] w-[300px] h-[350px] relative'
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<TechStackIcon
									image={flutter}
									name='Flutter'
									link='https://flutter.dev'
									className='left-[120px] top-[0] lg:left-[160px] lg:top-[0]'
								/>
								<TechStackIcon
									image={firebase}
									name='Firebase'
									link='https://nextjs.org'
									className='left-[10px] top-[100px] lg:left-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									image={express_js}
									name='Express JS'
									link='https://expressjs.com'
									className='right-[10px] top-[100px] lg:right-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									image={laravel}
									name='Laravel'
									link='https://laravel.com'
									className='left-[10px] top-[220px] lg:left-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									name='MongoDB'
									image={mongoDB}
									link='https://www.mongodb.com'
									className='right-[10px] top-[220px] lg:right-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									name='MySQL'
									image={mysql}
									link='https://www.mysql.com'
									className='left-[115px] top-[150px] lg:left-[160px] lg:top-[150px]'
								/>
							</motion.div>
						)}

						{contentIndex === 3 && (
							<motion.div
								className='mt-3 lg:w-[400px] lg:h-[400px] w-[300px] h-[350px] relative'
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<TechStackIcon
									name='React JS'
									image={react_js}
									link='https://react.dev'
									className='left-[120px] top-[0] lg:left-[160px] lg:top-[0]'
								/>
								<TechStackIcon
									name='Next.JS'
									image={flutter}
									link='https://nextjs.org'
									className='left-[10px] top-[100px] lg:left-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									name='Express JS'
									image={express_js}
									link='https://expressjs.com'
									className='right-[10px] top-[100px] lg:right-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									name='Socket IO'
									image={socket_io}
									link='https://socket.io'
									className='left-[10px] top-[220px] lg:left-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									name='Nginx'
									image={nginx}
									link='https://nginx.org'
									className='right-[10px] top-[220px] lg:right-[0px] lg:top-[250px]'
								/>
							</motion.div>
						)}

						{contentIndex === 4 && (
							<motion.div
								className='mt-3 lg:w-[400px] lg:h-[400px] w-[300px] h-[350px] relative'
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<TechStackIcon
									name='Kotlin'
									image={kotlin}
									link='https://kotlinlang.org'
									className='left-[120px] top-[0] lg:left-[160px] lg:top-[0]'
								/>
								<TechStackIcon
									name='Flutter'
									image={flutter}
									link='https://flutter.dev'
									className='left-[10px] top-[100px] lg:left-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									name='Firebase'
									image={firebase}
									link='https://firebase.google.com'
									className='right-[10px] top-[100px] lg:right-[0px] lg:top-[100]'
								/>
								<TechStackIcon
									name='Nginx'
									image={nginx}
									link='https://nginx.org'
									className='left-[10px] top-[220px] lg:left-[0px] lg:top-[250px]'
								/>
								<TechStackIcon
									className='right-[10px] top-[220px] lg:right-[0px] lg:top-[250px]'
									name='Socket IO'
									image={socket_io}
									link='https://socket.io'
								/>
							</motion.div>
						)}
					</div>
				</div>
				<div className='w-full lg:w-3/5  flex flex-col justify-start items-center  pt-[30px] lg:pt-[50px] pb-[30px] p-3 overflow-hidden'>
					{contentIndex === 1 && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}>
							<ShadeOrbitContainer borderRadius={22} borderWidth={3}>
								<div className='w-full max-w-[600px] lg:w-[600px] p-5 bg-card text-card-foreground rounded-[20px] border border-border'>
									<h2 className='text-lg lg:text-xl mb-3 font-medium'>
										Full-Stack Web Development
									</h2>
									<div className='flex flex-row gap-3 flex-wrap'>
										<TechStack
											name='React JS'
											image={react_js}
											link='https://react.dev'
										/>
										<TechStack
											name='Next JS'
											image={next_js}
											link='https://nextjs.org'
										/>
										<TechStack
											name='Node JS'
											image={node_js}
											link='https://nodejs.org'
										/>
										<TechStack
											name='Laravel'
											image={laravel}
											link='https://laravel.com'
										/>
										<TechStack
											name='MySQL'
											image={mysql}
											link='https://www.mysql.com'
										/>
										<TechStack
											name='Apache Server - C Panel'
											image={apache_server}
											link='https://httpd.apache.org'
										/>
									</div>

									<TypingEffect
										text='This stack is perfect for building dynamic and scalable web applications. React.js and Next.js handle the frontend, providing a fast, SEO-friendly environment with server-side rendering (SSR) and static site generation (SSG). The backend is powered by Laravel, a robust PHP framework, with MySQL as the relational database for data storage. This stack is ideal for building web applications with complex user interactions and a powerful backend.'
										speed={10}
										onTyped={() => markedTyped(1)}
										className='mt-5'
									/>
									<div className='w-full flex flex-gap justify-between'>
										<Link href='/service'>
											<Button
												className={`mt-5 lg:px-3 transition-all duration-300 ${
													typed === 1
														? 'opacity-100 translate-y-0'
														: 'opacity-0 translate-y-full'
												}`}>
												Learn More
											</Button>
										</Link>

										<Button
											variant={'outline'}
											className={`mt-5 lg:px-3 border-primary transition-all duration-300 text-primary ${
												typed === 1
													? 'opacity-100 translate-y-0'
													: 'opacity-0 translate-y-full'
											}`}
											onClick={() => setContentIndex(2)}>
											<ChevronRight strokeWidth={3} size={100} />
										</Button>
									</div>
								</div>
							</ShadeOrbitContainer>
						</motion.div>
					)}

					{contentIndex === 2 && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}>
							<ShadeOrbitContainer borderRadius={22} borderWidth={3}>
								<div className='w-full max-w-[600px] lg:w-[600px] p-5 bg-card text-card-foreground rounded-[20px] border border-border'>
									<h2 className='text-lg lg:text-xl mb-3 font-medium'>
										Mobile & Web Application
									</h2>

									<div className='flex flex-row gap-3 flex-wrap'>
										<TechStack
											name='Flutter'
											image={flutter}
											link='https://flutter.dev'
										/>
										<TechStack
											name='Firebase'
											image={firebase}
											link='https://nextjs.org'
										/>
										<TechStack
											name='Express JS'
											image={express_js}
											link='https://expressjs.com'
										/>
										<TechStack
											name='Laravel'
											image={laravel}
											link='https://laravel.com'
										/>
										<TechStack
											name='MongoDB'
											image={mongoDB}
											link='https://www.mongodb.com'
										/>
										<TechStack
											name='MySQL'
											image={mysql}
											link='https://www.mysql.com'
										/>
									</div>

									<TypingEffect
										text='This stack is suitable for building both mobile and web applications. Flutter provides a unified framework for cross-platform mobile apps (iOS/Android). Firebase handles backend services like authentication, real-time databases, and cloud storage. The Express.js server runs on Node.js, providing API routes for mobile and web clients, while MongoDB serves as a flexible NoSQL database for unstructured data storage, making it a perfect choice for mobile apps that need real-time syncing and cloud capabilities.'
										speed={10}
										onTyped={() => markedTyped(2)}
										className='mt-5'
									/>

									<div className='w-full flex flex-gap justify-between'>
										<Link href='/service'>
											<Button
												className={`mt-5 lg:px-3 transition-all duration-300 ${
													typed === 2
														? 'opacity-100 translate-y-0'
														: 'opacity-0 translate-y-full'
												}`}>
												Learn More
											</Button>
										</Link>

										<Button
											variant={'outline'}
											className={`mt-5 lg:px-3 border-primary transition-all duration-300 text-primary ${
												typed === 2
													? 'opacity-100 translate-y-0'
													: 'opacity-0 translate-y-full'
											}`}
											onClick={() => setContentIndex(3)}>
											<ChevronRight strokeWidth={3} size={100} />
										</Button>
									</div>
								</div>
							</ShadeOrbitContainer>
						</motion.div>
					)}

					{contentIndex === 3 && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}>
							<ShadeOrbitContainer borderRadius={22} borderWidth={3}>
								<div className='w-full max-w-[600px] lg:w-[600px] p-5 bg-card text-card-foreground rounded-[20px] border border-border'>
									<h2 className='text-lg lg:text-xl mb-3 font-medium'>
										Backend API with Real-Time Features
									</h2>

									<div className='flex flex-row gap-3 flex-wrap'>
										<TechStack
											name='React JS'
											image={react_js}
											link='https://react.dev'
										/>
										<TechStack
											name='Next.JS'
											image={flutter}
											link='https://nextjs.org'
										/>
										<TechStack
											name='Express JS'
											image={express_js}
											link='https://expressjs.com'
										/>
										<TechStack
											name='Socket IO'
											image={socket_io}
											link='https://socket.io'
										/>
										<TechStack
											name='Nginx'
											image={nginx}
											link='https://nginx.org'
										/>
									</div>

									<TypingEffect
										text='This stack is focused on building efficient backend APIs. Express.js handles fast, lightweight server-side logic with Node.js. Laravel can be used to manage complex backend logic, perform authentication, and serve powerful APIs. The stack is powered by MySQL for relational data storage, while Nginx serves as a reverse proxy and load balancer for optimal performance, ensuring scalability and fast response times.'
										speed={10}
										onTyped={() => markedTyped(3)}
										className='mt-5'
									/>
									<div className='w-full flex flex-gap justify-between'>
										<Link href='/service'>
											<Button
												className={`mt-5 lg:px-3 transition-all duration-300 ${
													typed === 3
														? 'opacity-100 translate-y-0'
														: 'opacity-0 translate-y-full'
												}`}>
												Learn More
											</Button>
										</Link>

										<Button
											variant={'outline'}
											className={`mt-5 lg:px-3 border-primary transition-all duration-300 text-primary ${
												typed === 3
													? 'opacity-100 translate-y-0'
													: 'opacity-0 translate-y-full'
											}`}
											onClick={() => setContentIndex(4)}>
											<ChevronRight strokeWidth={3} size={100} />
										</Button>
									</div>
								</div>
							</ShadeOrbitContainer>
						</motion.div>
					)}

					{contentIndex === 4 && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}>
							<ShadeOrbitContainer borderRadius={22} borderWidth={3}>
								<div className='w-full max-w-[600px] lg:w-[600px] p-5 bg-card text-card-foreground rounded-[20px] border border-border'>
									<h2 className='text-lg lg:text-xl mb-3 font-medium'>
										Cloud & Mobile Backend
									</h2>

									<div className='flex flex-row gap-3 flex-wrap'>
										<TechStack
											name='Kotlin'
											image={kotlin}
											link='https://kotlinlang.org'
										/>
										<TechStack
											name='Flutter'
											image={flutter}
											link='https://flutter.dev'
										/>
										<TechStack
											name='Firebase'
											image={firebase}
											link='https://firebase.google.com'
										/>
										<TechStack
											name='Nginx'
											image={nginx}
											link='https://nginx.org'
										/>
										<TechStack name='VPS' image={vps} link='#' />
									</div>

									<TypingEffect
										text='This stack is ideal for mobile-first apps with Kotlin as the native Android development language. Firebase provides cloud services such as real-time databases, authentication, and notifications. The backend can be deployed using Nginx on a VPS for efficient handling of requests and scaling. This stack is well-suited for cloud-based apps, providing fast mobile interactions with real-time data sync and excellent scalability.'
										speed={10}
										onTyped={() => markedTyped(4)}
										className='mt-5'
									/>
									<div className='w-full flex flex-gap justify-between'>
										<Link href='/service'>
											<Button
												className={`mt-5 lg:px-3 transition-all duration-300 ${
													typed === 4
														? 'opacity-100 translate-y-0'
														: 'opacity-0 translate-y-full'
												}`}>
												Learn More
											</Button>
										</Link>

										<Button
											variant={'outline'}
											className={`mt-5 lg:px-3  border-primary transition-all duration-300 text-primary ${
												typed === 4
													? 'opacity-100 translate-y-0'
													: 'opacity-0 translate-y-full'
											}`}
											onClick={() => setContentIndex(1)}>
											<ChevronRight strokeWidth={3} size={100} />
										</Button>
									</div>
								</div>
							</ShadeOrbitContainer>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
}

function TechStack({ name, image, link }: { name: string; image: string; link: string }) {
	return (
		<a href={link} target='_blank'>
			<div className='px-3 py-1 border-primary bg-background rounded-lg shadow-sm text-primary border font-medium flex flex-row items-center group hover:bg-primary hover:text-white cursor-auto transition-all active:scale-95'>
				<Image src={image} alt='Kotlin' className='inline-block size-[20px] mr-2' />
				<span className='pointer-events-none'>{name}</span>
			</div>
		</a>
	);
}
function TechStackIcon({
	name,
	image,
	link,
	className,
}: {
	name: string;
	image: string;
	link: string;
	className?: string;
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className='relative'>
						<a href={link} target='_blank' className='bg-amber-500'>
							<Image
								src={image}
								alt={name}
								className={`transition-all duration-200 hover:scale-105 size-[60px] lg:size-[80px] active:scale-95 absolute animate-pulse ${className}`}
								style={{ animationDuration: '5s' }}
							/>
						</a>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

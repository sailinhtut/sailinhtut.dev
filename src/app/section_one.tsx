'use client';
import TypingEffect from '../components/typing_effect';
import Image from 'next/image';

// import sailinhtut from '../../public/sailinhtut.png';
import webDev from '../../public/web_dev.png';
import mobileDev from '../../public/mobile_dev.png';
import desktopDev from '../../public/desktop_dev.png';
import electron from '../../public/electron.svg';
import flutter from '../../public/flutter.svg';
import nodeJs from '../../public/node_js.svg';
import reactJs from '../../public/react_js.svg';
import nextJs from '../../public/next_js.svg';
import kotlin from '../../public/kotlin.svg';
import xcode from '../../public/xcode.svg';
import swift from '../../public/swift.svg';
import socket_io from '../../public/socket_io.svg';
import laravel from '../../public/laravel.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/shadcn/components/ui/button';

export default function HomeSectionOne() {
	const [contentIndex, setContentIndex] = useState(1);
	const [typed, setTyped] = useState<number | undefined>(undefined);

	const markedTyped = (index: number) => {
		setTyped(index);

		setTimeout(() => {
			let nextIndex = index >= 4 ? 1 : index + 1;
			setContentIndex(nextIndex);
		}, 5000);
	};

	return (
		<section className='lg:min-h-screen pt-[60px] text-white flex flex-col-reverse lg:flex-row justify-end'>
			<div className='w-full lg:w-1/2 relative p-3 '>
				{contentIndex === 1 && (
					<div className='w-auto lg:w-[500px] lg:absolute lg:bottom-1/3 lg:left-[100px] lg:text-xl text-normal mt-10'>
						<motion.div
							className='mt-3'
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<h2 className='text-lg lg:text-3xl mb-3 font-medium  '>
								Nice To Meet You
							</h2>
						</motion.div>

						<TypingEffect
							text='Innovate your streamline indea and deliver your cutting-edge
						software globally with Sai Lin Htut. I am grateful to be
						apart of your dream journey.'
							speed={15}
							onTyped={() => markedTyped(1)}
						/>
						<Link href='/service'>
							<Button
								className={`mt-5 lg:px-3 transition-all duration-300 ${
									typed === 1
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-full'
								}`}>
								Choose Best Fit Solution
							</Button>
						</Link>
					</div>
				)}

				{contentIndex === 2 && (
					<div className='w-auto lg:w-[500px] lg:absolute lg:bottom-1/3 lg:left-32 lg:text-xl text-normal mt-10'>
						<motion.div
							className='mt-3'
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}></motion.div>
						<h2 className='text-lg lg:text-3xl mb-3 font-medium  '>
							Mobile Application Development
						</h2>

						<TypingEffect
							text='Innovative, streamlined mobile solutions designed to elevate your brand globally. Let’s turn your vision into cutting-edge software for a successful future.'
							speed={15}
							onTyped={() => markedTyped(2)}
						/>
						<Link href='/service'>
							<Button
								className={`mt-5 lg:px-3 transition-all duration-300 ${
									typed === 2
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-full'
								}`}>
								Mobile Application Developoment
							</Button>
						</Link>
					</div>
				)}
				{contentIndex === 3 && (
					<div className='w-auto lg:w-[500px] lg:absolute lg:bottom-1/3 lg:left-32 lg:text-xl text-normal mt-10'>
						<motion.div
							className='mt-3'
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<h2 className='text-lg lg:text-3xl mb-3 font-medium  '>
								Website and Web Application Development
							</h2>
						</motion.div>

						<TypingEffect
							text='Delivering modern, responsive web solutions that engage users and grow your business. Let’s create seamless experiences that make an impact globally.'
							speed={15}
							onTyped={() => markedTyped(3)}
						/>
						<Link href='/service'>
							<Button
								className={`mt-5 lg:px-3 transition-all duration-300 ${
									typed === 3
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-full'
								}`}>
								Website and Web Application Development
							</Button>
						</Link>
					</div>
				)}
				{contentIndex === 4 && (
					<div className='w-auto lg:w-[500px] lg:absolute lg:bottom-1/3 lg:left-32 lg:text-xl text-normal mt-10'>
						<motion.div
							className='mt-3'
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<h2 className='text-lg lg:text-3xl mb-3 font-medium  '>
								Desktop Application Development
							</h2>
						</motion.div>

						<TypingEffect
							text='Crafting efficient, user-friendly desktop applications that enhance productivity and streamline workflows. Let’s build software that works seamlessly across platforms.'
							speed={15}
							onTyped={() => markedTyped(4)}
						/>
						<Link href='/service'>
							<Button
								className={`mt-5 lg:px-3 transition-all duration-300 ${
									typed === 4
										? 'opacity-100 translate-y-0'
										: 'opacity-0 translate-y-full'
								}`}>
								Desktop Application Development
							</Button>
						</Link>
					</div>
				)}
			</div>
			<div className='w-full lg:w-1/2 relative p-3 '>
				{contentIndex === 1 && (
					<div className='mx-auto lg:absolute lg:top-32 lg:left-1/2 lg:-translate-x-1/2 lg:size-[300px] size-[200px] relative flex justify-center items-end mt-5 lg:mt-0 user-select-none'>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-blue-500 animate-spin blur-sm lg:blur-lg'
							style={{ animationDuration: '20s' }}></div>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-white animate-spin blur-sm lg:blur-lg'
							style={{
								animationDuration: '20s',
								animationDirection: 'reverse',
							}}></div>
						<Image
							src='/sailinhtut.png'
							alt='Sai Lin Htut'
							width={200}
							height={210}
							className=' rounded-full lg:rounded-full lg:border-2 border-none border:border lg:border-white/20 lg:w-[280px] lg:h-[300px]  relative hover:border-blue-500  '
						/>
					</div>
				)}

				{contentIndex === 2 && (
					<div className='mx-auto lg:absolute lg:top-32 lg:left-1/2 lg:-translate-x-1/2 lg:size-[300px] size-[200px] relative flex justify-center items-end mt-5 lg:mt-0 user-select-none'>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-green-500 animate-spin blur-sm lg:blur-md'
							style={{ animationDuration: '20s' }}></div>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-amber-500 animate-spin blur-sm lg:blur-md'
							style={{
								animationDuration: '20s',
								animationDirection: 'reverse',
							}}></div>
						<Image
							src={flutter}
							alt='Flutter'
							className={`absolute top-0 -right-[50px] size-[50px] lg:-top-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 2
									? 'opacity-100 translate-y-0'
									: 'opacity-0 -translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={kotlin}
							alt='Kotlin'
							className={`absolute bottom-0 -right-[30px] size-[30px] lg:-bottom-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 2
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={swift}
							alt='Swift'
							className={`absolute -top-[30px] -left-[30px] lg:-top-[50px] lg:-left-[100px] size-[50px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 2
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 -translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={xcode}
							alt='XCode'
							className={`absolute -bottom-[10px] -left-[30px]  size-[30px] lg:-bottom-[50px] lg:-left-[150px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 2
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={mobileDev}
							alt='Sai Lin Htut'
							className=' rounded-full lg:rounded-[60px] lg:border-2 border-none border:border lg:border-white/20  lg:w-[280px] lg:h-[300px]  w-[200px] h-[210px] relative hover:border-blue-500  '
						/>
					</div>
				)}

				{contentIndex === 3 && (
					<div className='mx-auto lg:absolute lg:top-32 lg:left-1/2 lg:-translate-x-1/2 lg:size-[300px] size-[200px] relative flex justify-center items-end mt-5 lg:mt-0 user-select-none'>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-blue-500 animate-spin blur-sm lg:blur-lg'
							style={{ animationDuration: '20s' }}></div>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-white-500 animate-spin blur-sm lg:blur-lg'
							style={{
								animationDuration: '20s',
								animationDirection: 'reverse',
							}}></div>

						<Image
							src={reactJs}
							alt='React JS'
							className={`absolute top-0 -right-[50px] size-[50px] lg:-top-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 3
									? 'opacity-100 translate-y-0'
									: 'opacity-0 -translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={nextJs}
							alt='Next JS'
							className={`absolute bottom-0 -right-[30px] size-[30px] lg:-bottom-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 3
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={socket_io}
							alt='Socket IO'
							className={`absolute -top-[30px] -left-[30px] lg:-top-[50px] lg:-left-[100px] size-[50px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 3
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 -translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={laravel}
							alt='Laravel'
							className={`absolute -bottom-[10px] -left-[30px] size-[30px] lg:-bottom-[50px] lg:-left-[150px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 3
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>

						<Image
							src={webDev}
							alt='Sai Lin Htut'
							className=' lg:border-2 border-none border:border lg:border-white/20  lg:w-[350px] lg:h-[300px]  w-[230px] h-[200px] relative hover:border-blue-500  '
						/>
					</div>
				)}
				{contentIndex === 4 && (
					<div className='mx-auto lg:absolute lg:top-32 lg:left-1/2 lg:-translate-x-1/2 lg:size-[300px] size-[200px] relative flex justify-center items-end mt-5 lg:mt-0 user-select-none'>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-purple-500 animate-spin blur-sm lg:blur-lg'
							style={{ animationDuration: '20s' }}></div>
						<div
							className='lg:size-[280px] size-[200px] absolute lg:border-8 border-2 rounded-[70px] lg:rounded-[90px] border-red-500 animate-spin blur-sm lg:blur-lg'
							style={{
								animationDuration: '20s',
								animationDirection: 'reverse',
							}}></div>

						<Image
							src={reactJs}
							alt='React JS'
							className={`absolute top-0 -right-[50px] size-[50px] lg:-top-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 4
									? 'opacity-100 translate-y-0'
									: 'opacity-0 -translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={nodeJs}
							alt='Node JS'
							className={`absolute bottom-0 -right-[30px] size-[30px] lg:-bottom-[100px] lg:-right-[100px]  lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 4
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-full translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={electron}
							alt='Electron'
							className={`absolute -top-[30px] -left-[30px] lg:-top-[50px] lg:-left-[100px] size-[50px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 4
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 -translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>
						<Image
							src={flutter}
							alt='Flutter'
							className={`absolute -bottom-[10px] -left-[30px] size-[30px] lg:-bottom-[50px] lg:-left-[150px] lg:size-[100px]  mt-5 lg:px-3 transition-all duration-300 animate-bounce ${
								typed === 4
									? 'opacity-100 translate-x-0 translate-y-0'
									: 'opacity-0 translate-y-full -translate-x-full'
							}`}
							style={{ animationDuration: '10s' }}></Image>

						<Image
							src={desktopDev}
							alt='Sai Lin Htut'
							className=' lg:border-2 border-none border:border lg:border-white/20  lg:w-[280px] lg:h-[300px]  w-[200px] h-[200px] relative hover:border-blue-500'
						/>
					</div>
				)}
			</div>
		</section>
	);
}

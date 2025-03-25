'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import passed_exam from '../../public/passed_exam.png';
import steel_welder from '../../public/steel_welder.png';
import coding_experience from '../../public/coding_experience.png';
import mobile_app from '../../public/mobile_app.png';
import mobile_app_developer from '../../public/mobile_app_developer.png';
import web_app_developer from '../../public/web_app_developer.png';
import Image from 'next/image';

export default function HomeSectionThree() {
	const timelines = [
		{
			id: 1,
			year: 2019,
			title: 'Pass Matriculation (IGCSE 0)',
			description:
				'I passed matriculation exam with 1 distinction (Biology). After that, I started majoring in English for distancy in East Yangon University, Myanmar.',
		},
		{
			id: 2,
			year: 2020,
			title: 'Steel Welding & Construction Worker',
			description:
				'While majoring English, I used to involve in my father work as steel welder and construction affair for 1 year. I can relate construction related issue and passionated the field.',
		},
		{
			id: 3,
			year: 2021,
			title: 'Entering Programming',
			description:
				'In start of 2021 during Covid-19 Pandemic, I was wandering around technology from YouTube platform and found myself enjoying at Coding. The former languages of C# and Java touched my sense first coding experience. I visited around C, C#, Java and Python and tried to figure out what is Programming.',
		},
		{
			id: 4,
			year: 2022,
			title: 'Mobile Application Is My Dream',
			description:
				'The bunch of learning OOPs and Syntax of many languages taugth me but I still lost what is purpose of Programming. Then I found "Application matters People Life" and started to dive into Android Development with Java. I developed a bunch of demo applications. Once I realized Java could be able to launch Android only and fortunately migrated to Google Flutter framework for cross-platform development.',
		},
		{
			id: 5,
			year: 2023,
			title: 'Mobile Application Developer',
			description:
				'I contributed and developed a couple of real world applications using Flutter and started to apply for a job with tirelessly acquired Flutter experiences. Xlance Collective, my first dear family, welcomed me at Jaunary 1st week of 2023 and I flied a diverse of local and international projects and gained treasurous experiences of social media, logistic and game applications. Thank You Xlance !',
		},
		{
			id: 6,
			year: 2024,
			title: 'Web Application Developer',
			description:
				'After recognising mobile is not sufficient for entire system development, I found my pitfalls for web technology and started diving again from scratch into Web Technologies. HTML, CSS, Javascript and React took me to vast colorful realm of Web. The second dear family, Kanbawza App Studio, offered me chance to show my web experience through POS softwares and client business websites using React. I started diving into backend with PHP using Apache Web Server and C Panel and served PHP projects for my clients. I started to take advantages of Laravel and Flutter with my first entire full-stack of "Noun Magazine Platform". Moreover, Kanbawza favoured me to show off desktop versions of POS products with Electron.JS. I have successfully launched POS Desktop Apps and delivered ease to company customers. Grateful Kanbawza !',
		},
	];

	const [currentStep, setCurrentStep] = useState(0);

	return (
		<section className='w-full min-h-screen lg:py-[100px] pt-[50px] lg:px-[100px] '>
			<motion.div
				initial={{ opacity: 0, y: '100%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				<h2 className='ml-3 lg:text-3xl text-lg text-white font-medium '>
					Timelines Across Journey
				</h2>
			</motion.div>

			<div className='flex lg:flex-row flex-col-reverse justify-end mt-5 items-center'>
				<div className='w-full lg:w-1/2 lg:pt-[30px] p-3 '>
					<StepGenerator
						steps={timelines}
						onStepChanged={(step) => {
							setCurrentStep(step);
						}}
					/>
				</div>
				<div className='w-full lg:w-1/2 h-[300px] mt-[40px] lg:mt-0 p-3 flex flex-col justify-center items-center '>
					{currentStep === 0 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[30px] lg:-top-[20px] lg:-left-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									IGCSE O Level
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[50px] -right-[30px] lg:-top-[50px] lg:-right-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Distinction Biology +1
								</p>
							</motion.div>
							<Image
								src={passed_exam}
								alt='Passed Matriculation Exam'
								className='size-[200px] lg:size-[300px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2019
									</span>
									Passed Matriculation
								</p>
							</motion.div>
						</motion.div>
					)}
					{currentStep === 1 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[30px] lg:-top-[20px] lg:-left-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Hand-craft Material
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[50px] -right-[30px] lg:-top-[50px] lg:-right-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Building
								</p>
							</motion.div>
							<Image
								src={steel_welder}
								alt='Passed Matriculation Exam'
								className='size-[200px] lg:size-[300px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2020
									</span>
									Steel Welder
								</p>
							</motion.div>
						</motion.div>
					)}
					{currentStep === 2 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[20px] lg:-top-[20px] lg:-left-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Java, Python, Android
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[60px] -right-[25px] lg:-top-[50px] lg:-right-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									HTML, CSS, Javascript
								</p>
							</motion.div>
							<Image
								src={coding_experience}
								alt='Entering Programming'
								className='w-[220px] h-[200px] lg:w-[330px] lg:h-[280px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2021
									</span>
									Entering Programming
								</p>
							</motion.div>
						</motion.div>
					)}
					{currentStep === 3 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[0px] lg:-top-[20px] lg:-left-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Android to Flutter
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[50px] -right-[0px] lg:-top-[50px] lg:-right-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Projects++
								</p>
							</motion.div>
							<Image
								src={mobile_app}
								alt='Mobile Application Is My Dream'
								className='size-[200px] lg:size-[300px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2022
									</span>
									Mobile Application Is My Dream
								</p>
							</motion.div>
						</motion.div>
					)}
					{currentStep === 4 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[0px] lg:-top-[20px] lg:-left-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Vue.JS
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[50px] -right-[0px] lg:-top-[50px] lg:-right-[100px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Flutter
								</p>
							</motion.div>
							<Image
								src={mobile_app_developer}
								alt='Mobile Application Developer'
								className='size-[200px] lg:size-[300px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2023
									</span>
									Mobile Application Developer
								</p>
							</motion.div>
						</motion.div>
					)}
					{currentStep === 5 && (
						<motion.div
							className='flex flex-col justify-center items-center relative'
							initial={{ opacity: 0, y: '100%' }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}>
							<motion.div
								initial={{ opacity: 0, x: '100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[30px] -left-[0px] lg:-top-[20px] lg:-left-[50px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									React.JS
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: '-100%' }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								className='absolute -top-[50px] -right-[0px] lg:-top-[50px] lg:-right-[50px] animate-bounce'
								style={{ animationDuration: '3s' }}>
								<p className='text-sm lg:text-normal text-primary  duration-300'>
									Eletron.JS
								</p>
							</motion.div>
							<Image
								src={web_app_developer}
								alt='Web Application Developer'
								className='w-[220px] h-[170px] lg:w-[350px] lg:h-[260px]'
							/>
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								<p className='mt-5 text-white'>
									<span className='px-2 py-0.5 text-sm bg-primary border-border rounded-lg mr-3'>
										2024
									</span>
									Web Application Developer
								</p>
							</motion.div>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
}

function StepGenerator({
	steps,
	onStepChanged,
}: {
	steps: { id: number; year: number; title: string; description: string }[];
	onStepChanged?: (stepNumber: number) => void;
}) {
	const container = useRef<HTMLDivElement>(null);
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [finishedSteps, setFinishedSteps] = useState<number[]>([]);
	let underFocus = false;

	useEffect(() => {
		let scrollUpdateInterval: any = undefined;

		const calculateCurrentStep = () => {
			if (container.current) {
				const containerHeight = container.current.clientHeight;
				const containerScrollTop = container.current.scrollTop;

				let closestStepIndex = -1;
				let closestDistance = Infinity;

				stepRefs.current.forEach((step, index) => {
					if (step) {
						const stepTop = step.offsetTop;
						const stepCenter = stepTop + step.clientHeight / 2;
						const distanceToCenter = Math.abs(
							stepCenter - (containerScrollTop + containerHeight / 2)
						);

						if (distanceToCenter < closestDistance) {
							closestDistance = distanceToCenter;
							closestStepIndex = index;
						}
					}
				});

				setCurrentIndex(closestStepIndex);
				onStepChanged?.(closestStepIndex);
				setFinishedSteps((prevFinishedSteps) => {
					if (!prevFinishedSteps.includes(closestStepIndex)) {
						const updatedSteps = [...prevFinishedSteps, closestStepIndex];
						return updatedSteps;
					}

					return prevFinishedSteps;
				});
			}
		};

		scrollUpdateInterval = setInterval(() => {
			if (container.current) {
				if (underFocus) return;
				container.current.scrollTop += 1;

				if (
					container.current!.scrollTop >=
					container.current!.scrollHeight - container.current!.clientHeight
				) {
					container.current!.scrollTop = 0;
					setFinishedSteps([]);
					onStepChanged?.(1);
				}
			}
		}, 30);

		const handleMouseOver = () => (underFocus = true);
		const handleMouseLeave = () => (underFocus = false);

		container.current?.addEventListener('mousedown', handleMouseOver);
		container.current?.addEventListener('mouseup', handleMouseLeave);
		container.current?.addEventListener('scroll', calculateCurrentStep);

		return () => {
			clearInterval(scrollUpdateInterval);

			container.current?.removeEventListener('mousedown', handleMouseOver);
			container.current?.removeEventListener('mouseup', handleMouseLeave);
			container.current?.removeEventListener('scroll', calculateCurrentStep);
		};
	}, []);

	return (
		<div className='w-full h-[300px] lg:h-[500px] relative overflow-hidden'>
			<div
				className='w-full h-full overflow-hidden hide-scrollbar pt-[200px] pb-[300px]'
				ref={container}>
				{steps.map((timeline, index) => (
					<div
						key={timeline.id}
						ref={(el) => (stepRefs.current[index] = el)}
						className='flex flex-col relative mt-5'>
						<div className='flex flex-row gap-x-3 flex-nowrap items-start'>
							<p className='w-[30px] text-sm lg:w-[50px] lg:text-lg text-white font-medium'>
								{timeline.year}
							</p>
							<div className='flex flex-col items-center'>
								<div
									className={`size-[20px] lg:size-[30px] rounded-full grid place-content-center ${
										finishedSteps.includes(index)
											? 'bg-primary'
											: 'bg-border'
									}`}>
									<div
										className={`size-[10px] lg:size-[20px] bg-white rounded-full transition-all duration-300 hover:scale-90 ${
											finishedSteps.includes(index)
												? 'scale-100'
												: 'scale-0'
										}`}></div>
								</div>
								{index !== steps.length - 1 && (
									<div
										className={`h-[100%] mt-[20px] lg:mt-[30px] w-[3px]  absolute ${
											finishedSteps.includes(index + 1)
												? 'bg-primary'
												: 'bg-border'
										}`}></div>
								)}
							</div>
							<div className='w-full bg-card px-3 py-2 border-border text-card-foreground rounded-lg shadow-sm'>
								<p className='font-medium'>{timeline.title}</p>
								<p>{timeline.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div
				className='w-full h-full absolute top-0 right-0 pointer-events-none'
				style={{
					background:
						'linear-gradient(to bottom,hsl(var(--background)),transparent,transparent,hsl(var(--background)))',
				}}></div>
		</div>
	);
}

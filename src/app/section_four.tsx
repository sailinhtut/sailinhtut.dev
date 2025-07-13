/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
'use client';
import { motion } from 'framer-motion';
import React, { useEffect,  useState } from 'react';

import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { GiGraduateCap, GiWorld } from 'react-icons/gi';
import { LuLanguages } from 'react-icons/lu';
import { BiNetworkChart } from 'react-icons/bi';
import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from 'recharts';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip } from '@/components/shadcn/components/ui/chart';


export default function HomeSectionFour() {
	const webDevelopmentChartData = [
		{ skill: 'Next JS', experience: 0.4 },
		{ skill: 'React JS', experience: 1.5 },
		{ skill: 'Express JS', experience: 0.4 },
		{ skill: 'Laravel (PHP)', experience: 2.2 },
		{ skill: 'Vue JS', experience: 0.3 },
		{ skill: 'Flutter Web', experience: 1.3 },
		{ skill: 'Apache Server', experience: 1.5 },
		{ skill: 'Nginx Server', experience: 0.3 },
		{ skill: 'MySQL', experience: 2 },
		{ skill: 'MongoDB', experience: 0.4 },
		{ skill: 'Socket.io', experience: 0.3 },
		{ skill: 'Amazon S3', experience: 0.3 },
		{ skill: 'Google Cloud', experience: 0.8 },
		{ skill: 'Z.com (Domain & Hosting)', experience: 1.5 },
		{ skill: 'Digital Ocean (Domain & Hosting)', experience: 0.5 },
		{ skill: 'Stripe Payment API', experience: 0.3 },
	];
	const mobileDevelopmentChartData = [
		{ skill: 'Android (Java)', experience: 0.5 },
		{ skill: 'Flutter Android', experience: 3 },
		{ skill: 'Material Design', experience: 2.8 },
		{ skill: 'Fluent Design', experience: 2.8 },
		{ skill: 'Firebase', experience: 2.3 },
		{ skill: 'GetX', experience: 2.3 },
	];
	const desktopChartData = [
		{ skill: 'Electron JS', experience: 1 },
		{ skill: 'Flutter Desktop', experience: 0.8 },
		{ skill: 'Python Tkinter and QT', experience: 0.3 },
	];
	const educationChartData = [
		{ skill: 'IGCSE (1 Distinction)', experience: 1 },
		{ skill: 'Diploma of Computer with Business Management (UK)', experience: 1 },
	];
	const languagesChartData = [
		{ skill: 'Burmese', experience: 4 },
		{ skill: 'English', experience: 3 },
	];
	const softSkillChartData = [
		{ skill: 'Fast Learning', experience: 8 },
		{ skill: 'Team Work', experience: 7 },
		{ skill: 'Project Leadership', experience: 6.5 },
		{ skill: 'Problem Solving', experience: 7 },
		{ skill: 'Patience', experience: 6 },
		{ skill: 'Responsibility', experience: 8 },
		{ skill: 'Socialization', experience: 5 },
		{ skill: 'Flexibility', experience: 7 },
		{ skill: 'Corporative', experience: 7 },
	];
	const chartConfig = {
		experience: {
			label: 'Experience',
			color: 'hsl(var(--primary))',
		},
		label: {
			color: 'white',
		},
	} satisfies ChartConfig;

	const CustomTooltip = ({ active, payload }: { active: any; payload: any }) => {
		if (!active || !payload || !payload.length) return null;

		return (
			<div className='p-2 bg-slate-900 border-border shadow-md rounded-md flex flex-row items-center gap-3'>
				<p className='text-white'>{payload[0].payload.skill}</p>
				<p className='text-blue-500 font-bold'>
					{payload[0].value} {unitSelector(activeMenu)}
				</p>
			</div>
		);
	};

	const unitSelector = (menuName: string | undefined) => {
		switch (menuName) {
			case 'web-development':
				return 'Year';
			case 'mobile-development':
				return 'Year';
			case 'desktop-development':
				return 'Year';
			case 'education':
				return '';
			case 'spoken-languages':
				return '';
			case 'soft-skills':
				return '';
			default:
				return '';
		}
	};
	const titleSelector = (menuName: string | undefined) => {
		switch (menuName) {
			case 'web-development':
				return 'Web Development';
			case 'mobile-development':
				return 'Mobile Development';
			case 'desktop-development':
				return 'Desktop Development';
			case 'education':
				return 'Education';
			case 'spoken-languages':
				return 'Spoken Languages';
			case 'soft-skills':
				return 'Soft Skills';
			default:
				return 'Web Development';
		}
	};
	const descriptionSelector = (menuName: string | undefined) => {
		switch (menuName) {
			case 'web-development':
				return 'Experience In Year';
			case 'mobile-development':
				return 'Experience In Year';
			case 'desktop-development':
				return 'Experience In Year';
			case 'education':
				return '';
			case 'spoken-languages':
				return 'Language Proficiency Level';
			case 'soft-skills':
				return 'Performance Level';
			default:
				return 'Web Development';
		}
	};
	const menuSelector = (menuName: string | undefined) => {
		if (!menuName) return webDevelopmentChartData;
		switch (menuName) {
			case 'web-development':
				return webDevelopmentChartData;
			case 'mobile-development':
				return mobileDevelopmentChartData;
			case 'desktop-development':
				return desktopChartData;
			case 'education':
				return educationChartData;
			case 'spoken-languages':
				return languagesChartData;
			case 'soft-skills':
				return softSkillChartData;
			default:
				return webDevelopmentChartData;
		}
	};
	const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
	const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

	const updateMenuItem = (value: string) => {
		if (activeMenu === value) {
			setActiveMenu(undefined);
		} else {
			setActiveMenu(value);
		}
	};
	const updateActiveItem = (value: string) => {
		if (activeItem === value) {
			setActiveItem(undefined);
		} else {
			setActiveItem(value);
		}
	};

	return (
		<div className='w-full min-h-screen lg:p-[100px] pt-[50px]'>
			<motion.div
				className='block lg:ml-0 ml-3'
				initial={{ opacity: 0, y: '100%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				<h2 className='lg:text-3xl text-lg text-white font-medium '>
					Skills & Experiences
				</h2>
			</motion.div>
			<div className='pt-5 flex flex-col-reverse justify-start lg:flex-row lg:justify-between text-white'>
				<div className='w-full max-w-[400px] lg:w-1/2 p-3'>
					<div className='lg:mt-3 w-full max-w-[400px]border-green-500'>
						<Accordion
							icon={<GiWorld />}
							title='Web Development'
							groupValue={activeMenu}
							value='web-development'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{webDevelopmentChartData.map((entry, index) =>
									webDevelopmentChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>
						<Accordion
							icon={<HiOutlineDevicePhoneMobile />}
							title='Mobile Development'
							groupValue={activeMenu}
							value='mobile-development'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{mobileDevelopmentChartData.map((entry, index) =>
									mobileDevelopmentChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>
						<Accordion
							icon={<TbDeviceDesktopAnalytics />}
							title='Desktop Development'
							groupValue={activeMenu}
							value='desktop-development'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{desktopChartData.map((entry, index) =>
									desktopChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>

						<Accordion
							icon={<GiGraduateCap />}
							title='Education'
							groupValue={activeMenu}
							value='education'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{educationChartData.map((entry, index) =>
									educationChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>

						<Accordion
							icon={<LuLanguages />}
							title='Spoken Languages'
							groupValue={activeMenu}
							value='spoken-languages'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{languagesChartData.map((entry, index) =>
									languagesChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>

						<Accordion
							icon={<BiNetworkChart />}
							title='Soft Skills'
							groupValue={activeMenu}
							value='soft-skills'
							onTap={(value) => updateMenuItem(value)}>
							<div className={`flex flex-col transition-all duration-300 `}>
								{softSkillChartData.map((entry, index) =>
									softSkillChartData.length - 1 == index ? (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											nodeType='leaf'
											onTap={() => updateActiveItem(entry.skill)}
										/>
									) : (
										<TreeItem
											serial={index + 1}
											title={entry.skill}
											isActive={activeItem === entry.skill}
											onTap={() => updateActiveItem(entry.skill)}
										/>
									)
								)}
							</div>
						</Accordion>
					</div>
				</div>
				<div className='w-full lg:w-1/2 p-3'>
					<Card className='sticky top-[100px]'>
						<CardHeader>
							<CardTitle className='text-white  font-medium'>
								{titleSelector(activeMenu)} Quantification
							</CardTitle>
							<CardDescription className='text-slate-400 text-xs'>
								{descriptionSelector(activeMenu)}
							</CardDescription>
						</CardHeader>
						<CardContent>
							{activeMenu === 'spoken-languages' ||
							activeMenu === 'soft-skills' ? (
								<ChartContainer config={chartConfig} className='w-full'>
									<RadarChart data={menuSelector(activeMenu)}>
										<ChartTooltip
											cursor={false}
											content={
												<CustomTooltip
													active={undefined}
													payload={undefined}
												/>
											}
										/>
										<PolarAngleAxis dataKey='skill' />
										<PolarGrid />
										<Radar
											dataKey='experience'
											fill='var(--primary)'
											fillOpacity={0.6}
											dot={(dotProps) => {
												const { cx, cy, payload } = dotProps;
												const isActive =
													payload.name === activeItem;
												return (
													<circle
														cx={cx}
														cy={cy}
														r={isActive ? 6 : 4}
														fill={
															isActive
																? '#f59e0b'
																: 'var(--primary)'
														}
														cursor='pointer'
														onClick={() =>
															setActiveItem(
																payload.skill
															)
														}
													/>
												);
											}}
										/>
									</RadarChart>
								</ChartContainer>
							) : (
								<ChartContainer
									config={chartConfig}
									className={`w-full`}
									style={{
										height: menuSelector(activeMenu).length * 50,
									}}>
									<BarChart
										accessibilityLayer
										data={menuSelector(activeMenu)}
										layout='vertical'
										margin={{
											right: 30,
										}}>
										<CartesianGrid horizontal={false} />
										<YAxis
											dataKey='skill'
											type='category'
											tickLine={false}
											tickMargin={10}
											axisLine={false}
											tickFormatter={(value) => value.slice(0, 3)}
											hide
										/>
										<XAxis dataKey='experience' type='number' hide />
										<ChartTooltip
											cursor={false}
											content={
												<CustomTooltip
													active={undefined}
													payload={undefined}
												/>
											}
										/>
										<Bar
											dataKey='experience'
											layout='vertical'
											radius={4}
											className='overflow-visible bg-amber-500'
											onClick={(barData) => {
												setActiveItem(barData.skill);
												console.log(barData.skill);
											}}>
											{menuSelector(activeMenu).map(
												(entry, index) => (
													<Cell
														key={`cell-${index}`}
														fill={
															entry.skill ===
															activeItem
																? `#F59E0B`
																: `var(--primary)`
														}
													/>
												)
											)}
											<LabelList
												dataKey='skill'
												position='insideLeft'
												offset={8}
												className='fill-white'
												fontSize={12}
												formatter={(value: string) =>
													value.length > 20
														? value.slice(0, 20) + '...'
														: value
												}
											/>
											<LabelList
												dataKey='experience'
												position='right'
												offset={10}
												className='fill-card-foreground'
												fontSize={15}
											/>
										</Bar>
									</BarChart>
								</ChartContainer>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

function Accordion({
	icon,
	title,
	value,
	groupValue,
	children,
	onTap,
}: {
	icon: React.ReactNode;
	title: string;
	value: string;
	groupValue?: string;
	onTap?: (value: string) => void;
	children: React.ReactNode;
}) {
	const isActive = groupValue && groupValue === value;
	useEffect(() => {}, [groupValue]);

	return (
		<div>
			<div
				className={`py-3 flex gap-3 text-white cursor-pointer   justify-between items-center transition-all ${
					isActive
						? 'bg-primary rounded-lg shadow-md px-2'
						: 'bg-none hover:text-primary'
				}`}
				onClick={() => onTap?.(value)}>
				<div className='flex gap-3 items-center'>
					{icon} <div className='text-nowrap whitespace-nowrap'>{title}</div>
				</div>
				<ChevronDown
					className={`size-4 transition-all duration-300 ${
						isActive ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</div>
			{isActive && (
				<div
					className={` pl-5 lg:pl-8 overflow-hidden transition-all duration-300 ${
						isActive ? 'h-fit scale-y-100' : 'h-0 scale-y-0'
					}`}>
					{children}
				</div>
			)}
		</div>
	);
}

function TreeItem({
	serial,
	title,
	isActive = false,
	nodeType = 'node',
	onTap,
}: {
	serial?: number;
	title: string;
	isActive?: boolean;
	nodeType?: 'leaf' | 'node';
	onTap?: () => void;
}) {
	return (
		<div
			className='flex flex-row items-center relative pt-[7px] group select-none'
			onClick={onTap}>
			<div
				className={`flex-shrink-0 w-[1px] bg-border absolute left-0 top-0 ${
					nodeType === 'leaf' ? 'h-[calc(58%)]' : 'h-[calc(100%)]'
				}`}></div>
			<div
				className={`flex-shrink-0 h-[1px] w-[10px] bg-border transition-all duration-100 group-hover:w-[20px] group-hover:bg-primary ${
					isActive && 'w-[20px] bg-primary'
				}`}></div>
			<div
				className={`px-3 py-2 bg-card text-card-foreground border-border rounded-lg hover:text-primary flex flex-row gap-3 items-center select-none group ${
					isActive && 'border-primary text-primary'
				}`}>
				{serial && (
					<div
						className={`h-5 min-w-5 px-1 text-center rounded-md text-xs grid place-content-center group-hover:bg-primary group-hover:text-white ${
							isActive ? 'bg-primary text-white' : 'bg-white text-black'
						}`}>
						{serial}
					</div>
				)}
				<div className='w-[250px] overflow-auto hide-scrollbar text-nowrap whitespace-nowrap text-ellipsis'>
					{title}
				</div>
			</div>
		</div>
	);
}

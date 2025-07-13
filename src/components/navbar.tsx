'use client';
import { AlignRight, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar({ active }: { active?: number }) {
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = () => {
		setShowDrawer(!showDrawer);
	};

	return (
		<>
			<header className={`z-50 fixed top-0 left-0 right-0`}>
				<nav
					className={`h-[60px] px-3 md:px-5 backdrop-blur-sm flex justify-between items-center ${
						showDrawer && 'bg-black'
					}`}>
					<Link href='/'>
						<p
							className='text-lg font-bold '
							style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
							Sai Lin Htut
						</p>
					</Link>
					<div className='flex flex-row justify-center items-center gap-5'>
						<a href='https://github.com/sailinhtut' target='_blank'>
							<Github size={20} className='text-white hover:text-primary' />
						</a>
						<Link
							href='/insights'
							className={`hidden md:block hover:text-primary ${
								active === 1 ? 'text-primary' : 'text-white'
							}`}>
							Insights
						</Link>
						<Link
							href='/projects'
							className={`hidden md:block  hover:text-primary ${
								active === 2 ? 'text-primary' : 'text-white'
							}`}>
							Projects
						</Link>
						<Link
							href='/services'
							className={`hidden md:block  hover:text-primary ${
								active === 3 ? 'text-primary' : 'text-white'
							}`}>
							Services
						</Link>
						<button
							className='block md:hidden p-1 rounded-lg hover:bg-white/20 active:bg-white/20'
							onClick={toggleDrawer}>
							<AlignRight className='text-white' />
						</button>
					</div>
				</nav>
				<div
					className={`block md:hidden w-full py-3 bg-black text-white relative transition-all duration-700`}
					style={{
						height: showDrawer ? 'auto' : 0,
						overflow: 'hidden',
						transform: showDrawer ? 'translateY(0)' : 'translateY(-100px)',
						zIndex: showDrawer ? 20 : -50,
					}}>
					<Link href='/insights'>
						<p
							className={`px-3 py-3 ${
								active == 1 ? 'text-primary' : 'text-white'
							}`}>
							Insights
						</p>
					</Link>
					<Link href='/projects'>
						<p
							className={`px-3 py-3 ${
								active == 2 ? 'text-primary' : 'text-white'
							}`}>
							Projects
						</p>
					</Link>
					<Link href='/services'>
						<p
							className={`px-3 py-3 ${
								active == 3 ? 'text-primary' : 'text-white'
							}`}>
							Services
						</p>
					</Link>
				</div>
			</header>
		</>
	);
}

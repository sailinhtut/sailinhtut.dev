'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimationFrame } from 'framer-motion';
import { Card, CardContent } from '@/components/shadcn/components/ui/card';
import { Button } from '@/components/shadcn/components/ui/button';

export default function ProjectPreviewSection() {
	const [projects, setProjects] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const containerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const x = useRef(0);

	// Scroll control
	useAnimationFrame((_, delta) => {
		if (!containerRef.current || !innerRef.current) return;
		const containerWidth = containerRef.current.offsetWidth;
		const contentWidth = innerRef.current.scrollWidth;

		// Move to left continuously
		x.current -= delta * 0.05; // speed

		// Reset scroll position when fully out of view
		if (Math.abs(x.current) >= contentWidth / 2) {
			x.current = 0;
		}

		innerRef.current.style.transform = `translateX(${x.current}px)`;
	});

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch('/api/projects?page=1');
				if (!res.ok) throw new Error('Failed to fetch');
				const data = (await res.json()).projects ?? [];
				setProjects(data.slice(0, 5));
			} catch {
				setProjects([]);
			} finally {
				setLoading(false);
			}
		};
		fetchProjects();
	}, []);

	if (loading || projects.length === 0) return null;

	const duplicatedProjects = [...projects, ...projects];

	return (
		<section className='px-5 py-20 max-w-7xl mx-auto text-white space-y-12 overflow-hidden'>
			<h2 className='text-lg lg:text-4xl font-bold text-center'>Featured Projects</h2>

			<div ref={containerRef} className='relative w-full overflow-hidden p-3'>
				<div ref={innerRef} className='flex gap-6 w-max'>
					{duplicatedProjects.map((project, idx) => (
						<Link href={`/projects/${project._id}`} key={`${project._id}-${idx}`}>
							<Card className='w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-white/10 border border-white/10 backdrop-blur-md rounded-xl hover:scale-[1.03] hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out cursor-pointer h-full py-3 lg:py-3'>
								<CardContent className='p-3 lg:p-6 flex flex-col justify-between h-full'>
									<div className='space-y-3'>
										<h3 className='text-lg lg:text-xl font-semibold'>
											{project.title}
										</h3>
										<p className='text-sm text-white/80 line-clamp-4'>
											{project.description}
										</p>
									</div>
									<div className='flex flex-wrap gap-2 pt-4'>
										{project.tags?.map((tag: string) => (
											<span
												key={tag}
												className='bg-primary/30 text-xs px-2 py-1 rounded-md border border-primary/30 text-white'>
												{tag}
											</span>
										))}
									</div>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>

			<div className='text-center'>
				<Link href='/projects'>
					<Button variant='secondary' className='mt-6'>
						See More Projects →
					</Button>
				</Link>
			</div>
		</section>
	);
}

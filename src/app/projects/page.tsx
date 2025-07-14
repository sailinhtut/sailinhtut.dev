'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/shadcn/components/ui/button';
import { Card, CardContent } from '@/components/shadcn/components/ui/card';
import { Input } from '@/components/shadcn/components/ui/input';
import Link from 'next/link';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { markdownComponents } from '@/components/markdown_style';
import ReactMarkdown from 'react-markdown';

export default function ProjectsPage() {
	const [projects, setProjects] = useState<any[]>([]);
	const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [search, setSearch] = useState('');
	const [selectedTag, setSelectedTag] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchProjects = async (page: number) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/projects?page=${page}`);
			if (!res.ok) throw new Error('Failed to fetch projects');
			const data = await res.json();
			setProjects(data.projects);
			setTotalPages(data.totalPages);
		} catch (err: any) {
			setError(err.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProjects(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [page]);

	useEffect(() => {
		let filtered = [...projects];
		if (search) {
			filtered = filtered.filter((p) =>
				(p.title + p.description).toLowerCase().includes(search.toLowerCase())
			);
		}
		if (selectedTag) {
			filtered = filtered.filter((p) => p.tags?.includes(selectedTag));
		}
		setFilteredProjects(filtered);
	}, [search, selectedTag, projects]);

	const allTags = Array.from(new Set(projects.flatMap((p) => p.tags || []))).sort();

	return (
		<div>
			<NavBar active={2} />
			<div className='min-h-screen space-y-4'>
				<div className='w-full pt-[60px] px-5 bg-background  z-30 space-y-4 pb-3'>
					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<Input
							type='text'
							placeholder='Search projects...'
							className='w-full sm:w-1/2'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						{selectedTag && (
							<Button
								variant='outline'
								onClick={() => setSelectedTag('')}
								className='w-full sm:w-auto'>
								Clear Filter:{' '}
								<strong className='ml-1'>{selectedTag}</strong>
							</Button>
						)}
					</div>

					<div className='flex flex-wrap gap-2'>
						{allTags.map((tag) => (
							<Button
								key={tag}
								variant={selectedTag === tag ? 'default' : 'outline'}
								onClick={() => setSelectedTag(tag)}
								className='text-sm px-3 py-1'>
								{tag}
							</Button>
						))}
					</div>
				</div>

				{loading && <p className='p-5'>Loading projects...</p>}

				{error && <p className='text-red-500 p-5'>Error: {error}</p>}

				{!loading && (
					<>
						<div className='p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{filteredProjects.map((project) => (
								<Link key={project._id} href={`/projects/${project._id}`}>
									<Card
										className='
										bg-white/5 text-white transition-all duration-300 ease-in-out
										hover:scale-[1.03] hover:shadow-lg hover:bg-white/10 cursor-pointer py-5'>
										<CardContent className='p-5 space-y-3 py-0'>
											<p className='text-lg md:text-xl font-semibold'>
												{project.title}
											</p>
											<div className='h-[180px] flex flex-col justify-center'>
												<p className='text-sm opacity-70 line-clamp-3'>
													{project.description}
												</p>
												<div>
													<div className='mt-2 flex flex-wrap gap-2 items-center mb-2'>
														{project.tags?.map(
															(tag: string) => (
																<span
																	key={tag}
																	className='px-2 py-1 bg-primary/20 border-primary text-sm rounded-md'>
																	{tag}
																</span>
															)
														)}
													</div>
													<Link
														href={project.githubUrl}
														target='_blank'>
														<Button>
															View on GitHub
														</Button>
													</Link>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>

						{/* Pagination */}
						<div className='my-5 flex justify-center items-center gap-2 mt-5'>
							<Button
								variant='outline'
								size='sm'
								disabled={page === 1}
								onClick={() => setPage((p) => Math.max(1, p - 1))}>
								Previous
							</Button>
							<span className='text-sm'>
								Page {page} of {totalPages}
							</span>
							<Button
								variant='outline'
								size='sm'
								disabled={page === totalPages}
								onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
								Next
							</Button>
						</div>
					</>
				)}
			</div>
			<Footer />
		</div>
	);
}

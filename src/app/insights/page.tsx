/* eslint-disable @next/next/no-img-element */
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

export default function InsightsPage() {
	const [insights, setInsights] = useState<any[]>([]);
	const [filteredInsights, setFilteredInsights] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [search, setSearch] = useState('');
	const [selectedTag, setSelectedTag] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchInsights = async (page: number) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/insights?page=${page}`);
			if (!res.ok) throw new Error('Failed to fetch insights');
			const data = await res.json();
			setInsights(data.insights);
			setTotalPages(data.totalPages);
		} catch (err: any) {
			setError(err.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchInsights(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [page]);

	useEffect(() => {
		let filtered = [...insights];
		if (search) {
			filtered = filtered.filter((i) =>
				(i.title + i.content).toLowerCase().includes(search.toLowerCase())
			);
		}
		if (selectedTag) {
			filtered = filtered.filter((i) => i.tags?.includes(selectedTag));
		}
		setFilteredInsights(filtered);
	}, [search, selectedTag, insights]);

	const allTags = Array.from(new Set(insights.flatMap((i) => i.tags || []))).sort();

	return (
		<div>
			<NavBar active={1} />
			<div className='min-h-screen space-y-4'>
				<div className='w-full pt-[60px]  px-5 bg-background z-30 space-y-4 pb-3'>
					<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
						<Input
							type='text'
							placeholder='Search insights...'
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

				{loading && <p className='p-5'>Loading insights...</p>}
				{error && <p className='text-red-500 p-5'>Error: {error}</p>}

				{!loading && (
					<>
						<div className='p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start justify-start'>
							{filteredInsights.map((insight) => (
								<Link key={insight._id} href={`/insights/${insight._id}`}>
									<Card className='bg-white/5 text-white transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:bg-white/10 cursor-pointer py-5 '>
										<CardContent className='p-5 space-y-3 py-0'>
											<img
												src={insight.heading_image_url}
												alt={insight.title}
												className='w-full h-[130px] object-cover'
											/>
											<p className='text-lg md:text-2xl font-semibold line-clamp-1'>
												{insight.title}
											</p>
											<div className='h-[180px] flex flex-col justify-center'>
												<div className='text-sm line-clamp-3 min-h-[60px]'>
													{insight.description}
												</div>
												<div>
													<div className='max-h-[70px] overflow-hidden mt-3 flex flex-wrap gap-2 items-center mb-3'>
														{insight.tags?.map(
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
														href={`/insights/${insight.id}`}
														target='_blank'>
														<Button>Read More</Button>
													</Link>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
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

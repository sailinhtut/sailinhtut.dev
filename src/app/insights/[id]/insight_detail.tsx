'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/shadcn/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { markdownComponents } from '@/components/markdown_style';

export default function InsightDetail({ id }: { id: string }) {
	const [insight, setInsight] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchInsight = async () => {
			try {
				const res = await fetch(`/api/insights/${id}`);
				if (!res.ok) throw new Error('Failed to fetch insight');
				const data = await res.json();
				if (!data || data.error) throw new Error(data.error || 'Not found');
				setInsight(data);
			} catch (err: any) {
				setError(err.message || 'Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		fetchInsight();
	}, [id]);

	return (
		<div>
			<NavBar />
			<div className='min-h-screen pt-[60px] px-5 pb-10 max-w-4xl mx-auto text-white space-y-6'>
				<Button
					variant='outline'
					onClick={() => router.push('/insights')}
					className='mb-4'>
					&larr; Back
				</Button>

				{loading && <p>Loading insight...</p>}
				{error && <p className='text-red-500'>Error: {error}</p>}

				{!loading && !error && insight && (
					<>
						{insight.heading_image_url && (
							<img
								src={insight.heading_image_url}
								alt={insight.title}
								className='rounded-md w-full object-cover cursor-pointer'
								onClick={() => setSelectedImage(img.imageUrl)}
							/>
						)}
						<p className='text-3xl font-bold text-left'>{insight.title}</p>

						<div className='flex flex-wrap gap-2 justify-start text-left'>
							{insight.tags?.map((tag: string) => (
								<span
									key={tag}
									className='px-2 py-1 bg-primary/20 border-primary text-sm rounded-md cursor-default'>
									{tag}
								</span>
							))}
						</div>
						<ReactMarkdown components={markdownComponents}>
							{insight.content}
						</ReactMarkdown>

						<div className='mt-10 text-sm '>Written by {insight.writer}</div>
					</>
				)}
			</div>
			<Footer />

			{/* Image Preview Modal */}
			{selectedImage && (
				<div
					className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4'
					onClick={() => setSelectedImage(null)}>
					<div
						className='relative max-w-3xl w-full'
						onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setSelectedImage(null)}
							className='absolute top-2 right-2 text-white text-xl bg-black/40 rounded-full p-2 hover:bg-black/60'>
							<X className='size-4' />
						</button>
						<img
							src={selectedImage}
							alt='Preview'
							className='w-full rounded-lg object-contain max-h-[80vh]'
						/>
					</div>
				</div>
			)}
		</div>
	);
}

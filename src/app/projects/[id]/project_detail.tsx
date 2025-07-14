/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
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

export default function ProjectDetail({ id }: { id: string }) {
	const [project, setProject] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [selectedImage, setSelectedImage] = useState<string | null>(null); // modal control
	const router = useRouter();

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const res = await fetch(`/api/projects/${id}`);
				if (!res.ok) throw new Error('Failed to fetch project');
				const data = await res.json();
				if (!data || data.error) throw new Error(data.error || 'Not found');
				setProject(data);
			} catch (err: any) {
				setError(err.message || 'Something went wrong');
			} finally {
				setLoading(false);
			}
		};

		fetchProject();
	}, [id]);

	const downloadLinks = [
		{ key: 'androidUrl', label: 'Android Version' },
		{ key: 'iOSUrl', label: 'iOS Version' },
		{ key: 'windowUrl', label: 'Window Version' },
		{ key: 'linuxUrl', label: 'Linux Version' },
		{ key: 'macUrl', label: 'macOS Version' },
	];

	return (
		<div>
			<NavBar />
			<div className='min-h-screen pt-[60px] px-5 pb-10 max-w-4xl mx-auto text-white space-y-6'>
				<Button
					variant='outline'
					onClick={() => router.push('/projects')}
					className='mb-4 mt-5'>
					&larr; Back
				</Button>

				{loading && <p>Loading project...</p>}
				{error && <p className='text-red-500'>Error: {error}</p>}

				{!loading && !error && project && (
					<>
						<h1 className='text-3xl font-bold text-left'>{project.title}</h1>

						<div className='flex flex-wrap gap-2 justify-start text-left'>
							{project.tags?.map((tag: string) => (
								<span
									key={tag}
									className='px-2 py-1 bg-primary/20 border-primary text-sm rounded-md cursor-default'>
									{tag}
								</span>
							))}
						</div>

						<ReactMarkdown components={markdownComponents}>
							{project.content}
						</ReactMarkdown>

						{/* Preview Images */}
						{project.preview_images?.length > 0 && (
							<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
								{project.preview_images.map((img: any, idx: number) => (
									<img
										key={idx}
										src={img.imageUrl}
										alt={img.caption || 'Preview'}
										className='rounded-md w-full object-cover cursor-pointer'
										onClick={() => setSelectedImage(img.imageUrl)}
									/>
								))}
							</div>
						)}

						{/* GitHub */}
						{project.githubUrl && (
							<Link
								href={project.githubUrl}
								target='_blank'
								className='inline-block mt-3'>
								<Button>View on GitHub</Button>
							</Link>
						)}

						{/* Download Buttons */}
						{project.downloadUrl && (
							<div className='space-x-2 space-y-2'>
								{downloadLinks.map(({ key, label }) =>
									project.downloadUrl[key] ? (
										<a
											key={key}
											href={project.downloadUrl[key]}
											target='_blank'
											rel='noopener noreferrer'
											download
											className='inline-block'>
											<Button variant='secondary'>{`Download ${label}`}</Button>
										</a>
									) : null
								)}
							</div>
						)}
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

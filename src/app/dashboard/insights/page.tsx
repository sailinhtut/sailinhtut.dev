'use client';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/shadcn/components/ui/table';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/shadcn/components/ui/dialog';
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from '@/components/shadcn/components/ui/breadcrumb';
import { Button } from '@/components/shadcn/components/ui/button';
import { Input } from '@/components/shadcn/components/ui/input';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import MarkdownEditor from '@/components/markdown_editor';
import ReactMarkdown from 'react-markdown';
import { markdownComponents } from '@/components/markdown_style';
import { Textarea } from '@/components/shadcn/components/ui/textarea';

export default function InsightDashboardPage() {
	const [insights, setInsights] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [selectedInsight, setSelectedInsight] = useState<any>(null);
	const [editInsight, setEditInsight] = useState<any>(null);
	const [newInsight, setNewInsight] = useState({
		title: '',
		description: '',
		content: '',
		writer: '',
		tags: '',
		heading_image_url: '',
	});
	const [editValues, setEditValues] = useState({
		title: '',
		description: '',
		content: '',
		writer: '',
		tags: '',
		heading_image_url: '',
	});

	const fetchInsights = async (page = 1) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/insights?page=${page}`);
			const data = await res.json();
			setInsights(data.insights || []);
			setTotalPages(data.totalPages || 1);
		} catch {
			toast.error('Failed to load insights');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchInsights(page);
	}, [page]);

	const handleCreate = async () => {
		try {
			const res = await fetch('/api/insights', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...newInsight,
					tags: newInsight.tags.split(',').map((t) => t.trim()),
				}),
			});
			if (res.ok) {
				toast.success('Insight created');
				setNewInsight({
					title: '',
					description: '',
					content: '',
					writer: '',
					tags: '',
					heading_image_url: '',
				});
				fetchInsights(page);
			} else {
				const err = await res.json();
				toast.error(err.error || 'Failed to create');
			}
		} catch {
			toast.error('Create failed');
		}
	};

	const handleUpdate = async () => {
		if (!editInsight) return;
		setLoading(true);
		try {
			const res = await fetch(`/api/insights/${editInsight._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...editValues,
					tags: editValues.tags.split(',').map((t) => t.trim()),
				}),
			});
			if (res.ok) {
				const json = await res.json();
				console.log(json);
				toast.success('Insight updated');
				setEditInsight(null);
				fetchInsights(page);
			} else {
				const err = await res.json();
				toast.error(err.error || 'Failed to update');
			}
		} catch {
			toast.error('Update failed');
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm('Are you sure?')) return;
		setLoading(true);
		try {
			const res = await fetch(`/api/insights/${id}`, { method: 'DELETE' });
			if (res.ok) {
				toast.success('Deleted');
				fetchInsights(page);
			} else {
				const err = await res.json();
				toast.error(err.error || 'Failed to delete');
			}
		} catch {
			toast.error('Error deleting');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col'>
			<Breadcrumb className='text-sm text-muted-foreground'>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href='/dashboard'>Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Insights</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='my-3 flex justify-between items-center'>
				<p className='text-xl font-semibold'>Insights</p>
				<div className='flex gap-2'>
					{/* Add Dialog */}
					<Dialog>
						<DialogTrigger asChild>
							<Button size='sm'>Add Insight</Button>
						</DialogTrigger>
						<DialogContent className='max-w-none' style={{ minWidth: 800 }}>
							<DialogHeader>
								<DialogTitle>Add Insight</DialogTitle>
							</DialogHeader>
							<div className='space-y-3'>
								<Input
									placeholder='Title'
									value={newInsight.title}
									onChange={(e) =>
										setNewInsight({
											...newInsight,
											title: e.target.value,
										})
									}
								/>
								<Input
									placeholder='Writer'
									value={newInsight.writer}
									onChange={(e) =>
										setNewInsight({
											...newInsight,
											writer: e.target.value,
										})
									}
								/>
								<Textarea
									placeholder='Description'
									value={newInsight.description}
									onChange={(e) =>
										setNewInsight({
											...newInsight,
											description: e.target.value,
										})
									}
								/>
								<MarkdownEditor
									content={newInsight.content}
									onChange={(value) =>
										setNewInsight({
											...newInsight,
											content: value,
										})
									}
								/>
								<Input
									placeholder='Tags (comma separated)'
									value={newInsight.tags}
									onChange={(e) =>
										setNewInsight({
											...newInsight,
											tags: e.target.value,
										})
									}
								/>
								<Input
									placeholder='Source URL'
									value={newInsight.heading_image_url}
									onChange={(e) =>
										setNewInsight({
											...newInsight,
											heading_image_url: e.target.value,
										})
									}
								/>
								<Button onClick={handleCreate} disabled={loading}>
									{loading ? 'Creating...' : 'Create'}
								</Button>
							</div>
						</DialogContent>
					</Dialog>

					{/* Refresh */}
					<Button
						variant='outline'
						size='sm'
						onClick={() => fetchInsights(page)}
						disabled={loading}>
						{loading ? 'Refreshing...' : 'Refresh'}
					</Button>
				</div>
			</div>

			{/* Table */}
			<div className='rounded-md border shadow-sm overflow-hidden'>
				<Table className='text-sm'>
					<TableHeader className='bg-muted'>
						<TableRow>
							<TableHead>No.</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Writer</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{insights.map((insight, i) => (
							<TableRow key={insight._id}>
								<TableCell>{(page - 1) * 10 + i + 1}</TableCell>
								<TableCell>{insight.title}</TableCell>
								<TableCell className='line-clamp-1'>
									{insight.writer}
								</TableCell>
								<TableCell className='space-x-2'>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size='sm'
												variant='outline'
												onClick={() =>
													setSelectedInsight(insight)
												}>
												View
											</Button>
										</DialogTrigger>
										<DialogContent
											className='max-w-none'
											style={{ minWidth: 800 }}>
											<DialogHeader>
												<DialogTitle>
													{selectedInsight?.title}
												</DialogTitle>
											</DialogHeader>
											<div className='text-sm space-y-2 max-h-[70vh] overflow-auto'>
												<p>
													<strong>Tags:</strong> -
													{selectedInsight?.tags?.join(', ')}
												</p>
												<p>
													<strong>Writer</strong> -
													{selectedInsight?.writer}
												</p>
												<p>
													<strong>Description:</strong>
													<br></br>
													{insight.description}
												</p>

												<p>
													<strong>Content:</strong> <br></br>
													<ReactMarkdown
														components={
															markdownComponents
														}>
														{selectedInsight?.content}
													</ReactMarkdown>
												</p>

												<p>
													<strong>Source:</strong>{' '}
													<a
														href={
															selectedInsight?.heading_image_url
														}
														target='_blank'
														className='text-blue-500 underline'>
														{
															selectedInsight?.heading_image_url
														}
													</a>
												</p>
											</div>
										</DialogContent>
									</Dialog>

									{/* Edit Dialog */}
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size='sm'
												variant='secondary'
												onClick={() => {
													setEditInsight(insight);
													setEditValues({
														title: insight.title,
														description:
															insight.description,
														writer: insight.writer,
														content:
															insight.content || '',
														tags: (
															insight.tags || []
														).join(', '),
														heading_image_url:
															insight.heading_image_url ||
															'',
													});
												}}>
												Edit
											</Button>
										</DialogTrigger>
										<DialogContent
											className='max-w-none'
											style={{ minWidth: 800 }}>
											<DialogHeader>
												<DialogTitle>Edit Insight</DialogTitle>
											</DialogHeader>
											<div className='space-y-3'>
												<Input
													placeholder='Title'
													value={editValues.title}
													onChange={(e) =>
														setEditValues({
															...editValues,
															title: e.target.value,
														})
													}
												/>
												<Input
													placeholder='Writer'
													value={editValues.writer}
													onChange={(e) =>
														setEditValues({
															...editValues,
															writer: e.target.value,
														})
													}
												/>
												<Textarea
													placeholder='Description'
													value={editValues.description}
													onChange={(e) =>
														setEditValues({
															...editValues,
															description:
																e.target.value,
														})
													}
												/>
												<MarkdownEditor
													content={editValues.content}
													onChange={(value) =>
														setEditValues({
															...editValues,
															content: value,
														})
													}
												/>
												<Input
													placeholder='Tags'
													value={editValues.tags}
													onChange={(e) =>
														setEditValues({
															...editValues,
															tags: e.target.value,
														})
													}
												/>
												<Input
													placeholder='Source URL'
													value={
														editValues.heading_image_url
													}
													onChange={(e) =>
														setEditValues({
															...editValues,
															heading_image_url:
																e.target.value,
														})
													}
												/>
												<Button
													onClick={handleUpdate}
													disabled={loading}>
													{loading ? 'Saving...' : 'Save'}
												</Button>
											</div>
										</DialogContent>
									</Dialog>

									<Button
										size='sm'
										variant='destructive'
										onClick={() => handleDelete(insight._id)}>
										{loading ? 'Removing...' : 'Remove'}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Pagination */}
			<div className='self-end flex justify-center items-center mt-4 gap-2'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setPage((p) => Math.max(1, p - 1))}
					disabled={page === 1}>
					Previous
				</Button>
				<span className='text-sm'>
					Page {page} of {totalPages}
				</span>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
					disabled={page === totalPages}>
					Next
				</Button>
			</div>
		</div>
	);
}

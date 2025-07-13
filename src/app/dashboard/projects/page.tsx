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
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from '@/components/shadcn/components/ui/breadcrumb';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/shadcn/components/ui/dialog';
import { Button } from '@/components/shadcn/components/ui/button';
import { Input } from '@/components/shadcn/components/ui/input';
import { Textarea } from '@/components/shadcn/components/ui/textarea';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import TiptapEditor from '@/components/tiptap_editor';
import MarkdownEditor from '@/components/markdown_editor';
import ReactMarkdown from 'react-markdown';
import { markdownComponents } from '@/components/markdown_style';

export default function ProjectDashboardPage() {
	const [editProject, setEditProject] = useState<any>(null);
	const [editValues, setEditValues] = useState({
		title: '',
		description: '',
		content: '',
		githubUrl: '',
		tags: '',
		preview_images: [{ imageUrl: '', caption: '' }],
		downloadUrl: {
			androidUrl: '',
			iOSUrl: '',
			windowUrl: '',
			linuxUrl: '',
			macUrl: '',
		},
	});

	const [projects, setProjects] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [selectedProject, setSelectedProject] = useState<any>(null);
	const [newProject, setNewProject] = useState({
		title: '',
		description: '',
		content: '',
		githubUrl: '',
		tags: '',
		preview_images: [{ imageUrl: '', caption: '' }],
		downloadUrl: {
			androidUrl: '',
			iOSUrl: '',
			windowUrl: '',
			linuxUrl: '',
			macUrl: '',
		},
	});

	// Fetch projects with pagination
	const fetchProjects = async (page: number = 1) => {
		try {
			setLoading(true);
			const res = await fetch(`/api/projects?page=${page}`);
			const data = await res.json();
			setProjects(data.projects || []);
			setTotalPages(data.totalPages || 1);
		} catch (err) {
			toast.error('Failed to load projects');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProjects(page);
	}, [page]);

	// Handle Delete
	const handleDelete = async (id: string) => {
		if (!confirm('Are you sure you want to delete this project?')) return;
		setLoading(true);
		try {
			const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
			if (res.ok) {
				toast.success('Project deleted');
				fetchProjects(page);
			} else {
				const err = await res.json();
				toast.error(err.error || 'Failed to delete');
			}
		} catch (err) {
			toast.error('Error deleting project');
		} finally {
			setLoading(false);
		}
	};

	// Handle Create
	const handleCreate = async () => {
		try {
			const res = await fetch('/api/projects', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...newProject,
					tags: newProject.tags.split(',').map((tag) => tag.trim()),
				}),
			});
			if (res.ok) {
				toast.success('Project created');
				setNewProject({
					title: '',
					description: '',
					content: '',
					githubUrl: '',
					tags: '',
					preview_images: [{ imageUrl: '', caption: '' }],
					downloadUrl: {
						androidUrl: '',
						iOSUrl: '',
						windowUrl: '',
						linuxUrl: '',
						macUrl: '',
					},
				});
				fetchProjects(page);
			} else {
				const data = await res.json();
				toast.error(data.error || 'Failed to create');
			}
		} catch (err) {
			toast.error('Create failed');
		}
	};

	// Handle Update
	const handleUpdate = async () => {
		if (!editProject) return;
		setLoading(true);
		try {
			const res = await fetch(`/api/projects/${editProject._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...editValues,
					tags: editValues.tags.split(',').map((t) => t.trim()),
				}),
			});
			if (res.ok) {
				toast.success('Project updated');
				setEditProject(null);
				fetchProjects(page);
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

	// Helpers to handle dynamic preview images in add and edit forms
	const handlePreviewImageChange = (
		index: number,
		field: 'imageUrl' | 'caption',
		value: string,
		isEdit: boolean
	) => {
		if (isEdit) {
			const images = [...editValues.preview_images];
			images[index] = { ...images[index], [field]: value };
			setEditValues({ ...editValues, preview_images: images });
		} else {
			const images = [...newProject.preview_images];
			images[index] = { ...images[index], [field]: value };
			setNewProject({ ...newProject, preview_images: images });
		}
	};

	const addPreviewImage = (isEdit: boolean) => {
		if (isEdit) {
			setEditValues({
				...editValues,
				preview_images: [...editValues.preview_images, { imageUrl: '', caption: '' }],
			});
		} else {
			setNewProject({
				...newProject,
				preview_images: [...newProject.preview_images, { imageUrl: '', caption: '' }],
			});
		}
	};

	const removePreviewImage = (index: number, isEdit: boolean) => {
		if (isEdit) {
			const images = [...editValues.preview_images];
			images.splice(index, 1);
			setEditValues({ ...editValues, preview_images: images });
		} else {
			const images = [...newProject.preview_images];
			images.splice(index, 1);
			setNewProject({ ...newProject, preview_images: images });
		}
	};

	// Handle Download URL change for add and edit
	const handleDownloadUrlChange = (
		field: 'androidUrl' | 'iOSUrl' | 'windowUrl' | 'linuxUrl' | 'macUrl',
		value: string,
		isEdit: boolean
	) => {
		if (isEdit) {
			setEditValues({
				...editValues,
				downloadUrl: { ...editValues.downloadUrl, [field]: value },
			});
		} else {
			setNewProject({
				...newProject,
				downloadUrl: { ...newProject.downloadUrl, [field]: value },
			});
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
						<BreadcrumbPage className='text-foreground'>Projects</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='my-3 flex justify-between items-center'>
				<p className='text-xl font-semibold'>Projects</p>
				<div className='flex gap-2'>
					{/* Add Project Dialog */}
					<Dialog>
						<DialogTrigger asChild>
							<Button size='sm'>Add Project</Button>
						</DialogTrigger>
						<DialogContent className='max-w-none' style={{ minWidth: 1000 }}>
							<DialogHeader>
								<DialogTitle>Add New Project</DialogTitle>
							</DialogHeader>
							<div className='space-y-2 max-h-[70vh] overflow-auto'>
								<Input
									placeholder='Title'
									value={newProject.title}
									onChange={(e) =>
										setNewProject({
											...newProject,
											title: e.target.value,
										})
									}
								/>
								<Textarea
									placeholder='Description'
									value={newProject.description}
									onChange={(e) =>
										setNewProject({
											...newProject,
											description: e.target.value,
										})
									}
								/>

								<MarkdownEditor
									content={newProject.content}
									onChange={(content) =>
										setNewProject({
											...newProject,
											content: content,
										})
									}
								/>
								<Input
									placeholder='GitHub URL'
									value={newProject.githubUrl}
									onChange={(e) =>
										setNewProject({
											...newProject,
											githubUrl: e.target.value,
										})
									}
								/>
								<Input
									placeholder='Tags (comma separated)'
									value={newProject.tags}
									onChange={(e) =>
										setNewProject({
											...newProject,
											tags: e.target.value,
										})
									}
								/>

								{/* Preview Images */}
								<div>
									<label className='font-semibold '>
										Preview Images
									</label>
									{newProject.preview_images.map((img, idx) => (
										<div
											key={idx}
											className='mt-3 flex gap-2 items-center mb-1'>
											<Input
												placeholder='Image URL'
												value={img.imageUrl}
												onChange={(e) =>
													handlePreviewImageChange(
														idx,
														'imageUrl',
														e.target.value,
														false
													)
												}
											/>
											<Input
												placeholder='Caption'
												value={img.caption}
												onChange={(e) =>
													handlePreviewImageChange(
														idx,
														'caption',
														e.target.value,
														false
													)
												}
											/>
											<Button
												variant='destructive'
												size='icon'
												onClick={() =>
													removePreviewImage(idx, false)
												}>
												X
											</Button>
										</div>
									))}
									<Button
										size='sm'
										className='mt-3'
										onClick={() => addPreviewImage(false)}>
										Add Image
									</Button>
								</div>

								{/* Download URLs */}
								<div className='space-y-1 mt-2'>
									<label className='font-semibold'>Download URLs</label>
									{(
										[
											'androidUrl',
											'iOSUrl',
											'windowUrl',
											'linuxUrl',
											'macUrl',
										] as const
									).map((field) => (
										<Input
											key={field}
											placeholder={`${field}`}
											value={newProject.downloadUrl[field]}
											onChange={(e) =>
												handleDownloadUrlChange(
													field,
													e.target.value,
													false
												)
											}
										/>
									))}
								</div>

								<Button onClick={handleCreate} disabled={loading}>
									{loading ? 'Creating...' : 'Create'}
								</Button>
							</div>
						</DialogContent>
					</Dialog>

					<Button
						size='sm'
						variant='outline'
						onClick={() => fetchProjects(page)}
						disabled={loading}>
						{loading ? 'Refreshing...' : 'Refresh'}
					</Button>
				</div>
			</div>

			<div className='rounded-md border shadow-sm overflow-hidden'>
				<Table className='text-sm'>
					<TableHeader className='bg-muted'>
						<TableRow>
							<TableHead>No.</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>GitHub</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{projects.map((p, i) => (
							<TableRow key={p._id}>
								<TableCell>{(page - 1) * 10 + i + 1}</TableCell>
								<TableCell>{p.title}</TableCell>
								<TableCell>
									<a
										href={p.githubUrl}
										target='_blank'
										className='text-blue-500 underline'
										rel='noopener noreferrer'>
										GitHub
									</a>
								</TableCell>
								<TableCell className='space-x-2'>
									{/* View Dialog */}
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size='sm'
												variant='outline'
												onClick={() => setSelectedProject(p)}>
												View
											</Button>
										</DialogTrigger>
										<DialogContent
											className='max-w-none'
											style={{ minWidth: 1000 }}>
											<DialogHeader>
												<DialogTitle>
													{selectedProject?.title}
												</DialogTitle>
											</DialogHeader>
											<div className='text-sm space-y-2 max-h-[70vh] overflow-auto'>
												<p>
													<strong>Description:</strong>

													{selectedProject?.description}
												</p>
												<p>
													<strong>Content:</strong>
													<ReactMarkdown
														components={
															markdownComponents
														}>
														{selectedProject?.content}
													</ReactMarkdown>
												</p>
												<p>
													<strong>GitHub:</strong>{' '}
													<a
														href={
															selectedProject?.githubUrl
														}
														target='_blank'
														rel='noopener noreferrer'
														className='text-blue-600 underline'>
														{selectedProject?.githubUrl}
													</a>
												</p>
												<p>
													<strong>Tags:</strong>{' '}
													{selectedProject?.tags?.join(', ')}
												</p>

												{/* Preview Images */}
												{selectedProject?.preview_images
													?.length > 0 && (
													<div>
														<strong>
															Preview Images:
														</strong>
														<div className='flex flex-wrap gap-2 mt-1'>
															{selectedProject.preview_images.map(
																(
																	img: any,
																	idx: number
																) => (
																	<div
																		key={idx}
																		className='flex flex-col items-center'>
																		<img
																			src={
																				img.imageUrl
																			}
																			alt={
																				img.caption
																			}
																			className='w-24 h-16 object-cover rounded-md'
																		/>
																		<span className='text-xs'>
																			{
																				img.caption
																			}
																		</span>
																	</div>
																)
															)}
														</div>
													</div>
												)}

												{/* Download URLs */}
												{selectedProject?.downloadUrl && (
													<div className='mt-2 space-y-1'>
														<strong>
															Download URLs:
														</strong>
														<ul className='list-disc list-inside'>
															{Object.entries(
																selectedProject.downloadUrl
															).map(([key, url]) =>
																url ? (
																	<li key={key}>
																		<a
																			href={
																				url
																			}
																			target='_blank'
																			rel='noopener noreferrer'
																			className='text-blue-600 underline'>
																			{key}
																		</a>
																	</li>
																) : null
															)}
														</ul>
													</div>
												)}
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
													setEditProject(p);
													setEditValues({
														title: p.title,
														description:
															p.description || '',
														content: p.content || '',
														githubUrl: p.githubUrl,
														tags: (p.tags || []).join(
															', '
														),
														preview_images: p
															.preview_images?.length
															? p.preview_images
															: [
																	{
																		imageUrl:
																			'',
																		caption: '',
																	},
															  ],
														downloadUrl:
															p.downloadUrl || {
																androidUrl: '',
																iOSUrl: '',
																windowUrl: '',
																linuxUrl: '',
																macUrl: '',
															},
													});
												}}>
												Edit
											</Button>
										</DialogTrigger>
										<DialogContent
											className='max-w-none'
											style={{ minWidth: 1000 }}>
											<DialogHeader>
												<DialogTitle>Edit Project</DialogTitle>
											</DialogHeader>
											<div className='space-y-2 max-h-[70vh] overflow-auto'>
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
													onChange={(content) =>
														setEditValues({
															...editValues,
															content: content,
														})
													}
												/>
												<Input
													placeholder='GitHub URL'
													value={editValues.githubUrl}
													onChange={(e) =>
														setEditValues({
															...editValues,
															githubUrl:
																e.target.value,
														})
													}
												/>
												<Input
													placeholder='Tags (comma separated)'
													value={editValues.tags}
													onChange={(e) =>
														setEditValues({
															...editValues,
															tags: e.target.value,
														})
													}
												/>

												{/* Preview Images */}
												<div className='space-y-3'>
													<label className='font-semibold'>
														Preview Images
													</label>
													{editValues.preview_images.map(
														(img, idx) => (
															<div
																key={idx}
																className='mt-3 flex gap-2 items-center mb-1'>
																<Input
																	placeholder='Image URL'
																	value={
																		img.imageUrl
																	}
																	onChange={(
																		e
																	) =>
																		handlePreviewImageChange(
																			idx,
																			'imageUrl',
																			e
																				.target
																				.value,
																			true
																		)
																	}
																/>
																<Input
																	placeholder='Caption'
																	value={
																		img.caption
																	}
																	onChange={(
																		e
																	) =>
																		handlePreviewImageChange(
																			idx,
																			'caption',
																			e
																				.target
																				.value,
																			true
																		)
																	}
																/>
																<Button
																	variant='destructive'
																	size='icon'
																	onClick={() =>
																		removePreviewImage(
																			idx,
																			true
																		)
																	}>
																	X
																</Button>
															</div>
														)
													)}
													<Button
														size='sm'
														className='mt-3'
														onClick={() =>
															addPreviewImage(true)
														}>
														Add Image
													</Button>
												</div>

												{/* Download URLs */}
												<div className='space-y-1 mt-2'>
													<label className='font-semibold '>
														Download URLs
													</label>
													{(
														[
															'androidUrl',
															'iOSUrl',
															'windowUrl',
															'linuxUrl',
															'macUrl',
														] as const
													).map((field) => (
														<Input
															key={field}
															placeholder={`${field}`}
															value={
																editValues
																	.downloadUrl[
																	field
																]
															}
															onChange={(e) =>
																handleDownloadUrlChange(
																	field,
																	e.target.value,
																	true
																)
															}
														/>
													))}
												</div>

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
										onClick={() => handleDelete(p._id)}>
										{loading ? 'Removing...' : 'Remove'}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

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

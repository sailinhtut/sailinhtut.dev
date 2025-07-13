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
import { Button } from '@/components/shadcn/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/shadcn/components/ui/dialog';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ContactInboxPage() {
	const [contacts, setContacts] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<any>(null);

	const fetchContacts = async (page: number = 1) => {
		try {
			setLoading(true);
			const res = await fetch(`/api/contact?page=${page}`);
			const data = await res.json();
			setContacts(data.messages);
			setTotalPages(data.totalPages);
		} catch (err) {
			toast.error('Failed to load contacts');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchContacts(page);
	}, [page]);

	const handleDelete = async (id: string) => {
		const confirm = window.confirm('Are you sure you want to delete this message?');
		if (!confirm) return;

		setLoading(true);
		try {
			const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
			const data = await res.json();

			if (res.ok) {
				toast.success('Message deleted');
				fetchContacts(page);
			} else {
				toast.error(data.error || 'Failed to delete');
			}
		} catch (err) {
			toast.error('Error deleting message');
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
						<BreadcrumbPage className='text-foreground'>Inbox</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='my-3 flex justify-between items-center'>
				<p className='text-xl font-semibold'>Inbox Messages</p>
				<Button
					size='sm'
					variant='outline'
					onClick={() => fetchContacts(page)}
					disabled={loading}>
					{loading ? 'Refreshing...' : 'Refresh'}
				</Button>
			</div>

			<div className='rounded-md border shadow-sm overflow-hidden'>
				<Table className='text-sm'>
					<TableHeader className='bg-muted'>
						<TableRow>
							<TableHead>No.</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{contacts.map((msg, i) => (
							<TableRow key={msg._id}>
								<TableCell>{(page - 1) * 10 + i + 1}</TableCell>
								<TableCell>{msg.name}</TableCell>
								<TableCell>{msg.email}</TableCell>
								<TableCell className='space-x-2'>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												size='sm'
												variant='outline'
												onClick={() => setSelectedMessage(msg)}>
												View
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>
													Message from{' '}
													{selectedMessage?.name}
												</DialogTitle>
											</DialogHeader>
											<div className='text-sm space-y-1'>
												<p>
													<strong>Email:</strong>{' '}
													{selectedMessage?.email}
												</p>
												<p>
													<strong>Message:</strong>
												</p>
												<p className='whitespace-pre-wrap'>
													{selectedMessage?.message}
												</p>
											</div>
										</DialogContent>
									</Dialog>
									<Button
										size='sm'
										variant='destructive'
										onClick={() => handleDelete(msg._id)}
										disabled={loading}>
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

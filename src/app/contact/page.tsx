// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/shadcn/components/ui/input';
import { Textarea } from '@/components/shadcn/components/ui/textarea';
import { Button } from '@/components/shadcn/components/ui/button';
import { Facebook, Github, Linkedin } from 'lucide-react';
import { BsTelegram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function ContactPage() {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus('sending');
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			if (!res.ok) throw new Error('Failed to send');
			setStatus('sent');
			setForm({ name: '', email: '', message: '' });
		} catch (err) {
			setStatus('error');
		}
	}

	return (
		<div className='text-white bg-background'>
			<NavBar />
			<div className='pt-[100px] px-5 max-w-5xl mx-auto py-10 space-y-10'>
				<h1 className='text-4xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-violet-50'>
					Get in Touch
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<Input
							type='text'
							placeholder='Your Name'
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
							required
						/>
						<Input
							type='email'
							placeholder='Your Email'
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							required
						/>
						<Textarea
							placeholder='Your Message'
							rows={5}
							value={form.message}
							onChange={(e) => setForm({ ...form, message: e.target.value })}
							required
						/>
						<Button type='submit' disabled={status === 'sending'}>
							{status === 'sending' ? 'Sending...' : 'Send Message'}
						</Button>
						{status === 'sent' && (
							<p className='text-green-500 text-sm'>
								Message sent ! Thank for your interest ! I will reply you as
								quick as possible. If you need hurry, direct contact me from
								social media platforms shown right side.
							</p>
						)}
						{status === 'error' && (
							<p className='text-red-500'>Something went wrong.</p>
						)}
					</form>

					<div className='space-y-4'>
						<div>
							<p className='text-lg font-semibold mb-1'>Contact Info</p>
							<p>
								Email:{' '}
								<a
									href='mailto:sailinhtut76062@gmail.com'
									className='underline text-sm text-primary'>
									sailinhtut76062@gmail.com
								</a>
							</p>
							<p>
								Phone:{' '}
								<a
									href='tel:+6692227708'
									className='underline text-sm text-primary'>
									+66 92 227 708
								</a>
							</p>
							<p>Location: Bangkok, Thailand</p>
						</div>
						<div className='flex gap-2 flex-wrap'>
							<a
								href='https://www.facebook.com/share/19mZSMo71f/'
								target='_blank'>
								<Facebook
									className='text-white rounded-lg bg-card p-2 bg-opacity-15 hover:bg-[#1877F2] hover:text-white duration-300 transition-colors'
									size={35}
								/>
							</a>
							<a href='https://x.com/sailinhtut' target='_blank'>
								<RiTwitterXLine
									className='text-white rounded-lg bg-card p-2 bg-opacity-15 hover:bg-black hover:text-white duration-300 transition-colors'
									size={35}
								/>
							</a>
							<a
								href='https://www.linkedin.com/in/sai-lin-htut'
								target='_blank'>
								<Linkedin
									className='text-white rounded-lg bg-card p-2 bg-opacity-15 hover:bg-[#0077B5] hover:text-white duration-300 transition-colors'
									size={35}
								/>
							</a>
							<a href='https://github.com/sailinhtut' target='_blank'>
								<Github
									className='text-white rounded-lg bg-card p-2 bg-opacity-15 hover:bg-[#0B1D38] hover:text-white duration-300 transition-colors'
									size={35}
								/>
							</a>
							<a href='https://t.me/sailinhtut' target='_blank'>
								<BsTelegram className='size-[35px] text-white bg-card p-2 bg-opacity-15 hover:bg-[#29ABED] hover:text-white duration-300 transition-colors rounded-lg' />
							</a>
							<a href='https://www.tiktok.com/@jakewilson808' target='_blank'>
								<FaTiktok className='size-[35px] text-white bg-card p-2 bg-opacity-15 hover:bg-black hover:text-white duration-300 transition-colors rounded-lg' />
							</a>
						</div>
					</div>
				</div>

				{/* Google Map Embed */}
				<div className='mt-10'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6334.754567398008!2d100.60045564630452!3d13.657030824549707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a06a11c94085%3A0xcc2e17af12c9ff03!2sUNiO%20Sukhumvit%2072!5e0!3m2!1sen!2sth!4v1752394276045!5m2!1sen!2sth'
						width='100%'
						height='350'
						allowfullscreen=''
						loading='lazy'
						className='rounded-md border border-white/10 shadow-md'
						referrerpolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
			<Footer />
		</div>
	);
}

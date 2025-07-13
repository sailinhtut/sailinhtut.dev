'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/shadcn/components/ui/input';
import { Button } from '@/components/shadcn/components/ui/button';
import { Card, CardContent } from '@/components/shadcn/components/ui/card';
import { toast } from 'sonner';

export default function LoginPage() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});

		setLoading(false);

		if (res.ok) {
			toast.success('Login successful!');
			router.push('/dashboard');
		} else {
			toast.error('Invalid credentials');
		}
	}

	return (
		<div className='h-screen flex items-center justify-center bg-background'>
			<Card className='w-full max-w-sm py-0 mx-3'>
				<CardContent className='p-6 space-y-4'>
					<div className='flex flex-row justify-between items-center'>
						<p className='text-2xl text-primary font-semibold'>Sai Lin Htut</p>
						<img src='/favicon.svg' alt='Sai Lin Htut' className='size-8' />
					</div>
					<p className='font-semibold '>Login</p>
					<form onSubmit={handleLogin} className='space-y-4'>
						<Input
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						<Input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<Button className='w-full' disabled={loading}>
							{loading ? 'Logging in...' : 'Login'}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

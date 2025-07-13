'use client';
import { Button } from '@/components/shadcn/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function DashboardLayout({ children }) {
	const [loggingOut, setLoggingOut] = useState(false);
	const router = useRouter();

	const pathname = usePathname();
	const menuItems = [
		{ label: 'Inbox', route: '/dashboard' },
		{ label: 'Projects', route: '/dashboard/projects' },
		{ label: 'Insights', route: '/dashboard/insights' },
	];

	const logout = async () => {
		try {
			setLoggingOut(true);
			const res = await fetch('/api/auth/logout', {
				method: 'POST',
			});

			if (res.ok) {
				await res.json();
				toast.success('Logged Out');
				router.push('/');
			} else {
				console.error('Logout failed:', res.status);
			}
			setLoggingOut(false);
		} catch (error) {
			console.error('Network error during logout:', error);
		}
	};

	return (
		<div>
			<NavBar />
			<div className='flex flex-row'>
				<div className='w-[200px] pt-[75px] h-screen shrink-0 sticky top-0 border-r bg-card p-4 flex flex-col justify-between'>
					<ul className='space-y-2 text-sm'>
						{menuItems.map((item) => (
							<li key={item.label}>
								<Link
									href={item.route}
									className={`block px-2 py-2 rounded   text-foreground ${
										pathname === item.route
											? 'bg-primary hover:bg-primary'
											: 'bg-transparent hover:bg-primary/50'
									} `}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<Button
						variant={'outline'}
						disabled={loggingOut}
						onClick={() => logout()}
						className={`block px-2 py-2 rounded text-destructive text-sm select-none hover:bg-red-500 hover:dark:bg-red-700 cursor-pointer`}>
						{loggingOut ? 'Logging Out' : 'Log Out'}
					</Button>
				</div>

				<div className='grow rounded-lg p-8 pt-[75px]'>{children}</div>
			</div>
		</div>
	);
}

function NavBar() {
	return (
		<header className={`z-50 fixed top-0 left-0 right-0`}>
			<nav
				className={`h-[60px] px-3 md:px-5 bg-card border-b shadow-sm shadow-primary/10 flex justify-between items-center `}>
				<Link href='/'>
					<p
						className='font-semibold'
						style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
						Sai Lin Htut | Dashboard
					</p>
				</Link>
				<div className='flex flex-row justify-center items-center gap-5'></div>
			</nav>
		</header>
	);
}

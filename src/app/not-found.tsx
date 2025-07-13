'use client';
import Link from 'next/link';
import TypingEffect from '../components/typing_effect';
import { useState } from 'react';
import { Button } from '@/components/shadcn/components/ui/button';

export default function NotFoundPage() {
	const motivationalQuotes = [
		'Believe in yourself and all that you are.',
		'Success is not final, failure is not fatal: It is the courage to continue that counts.',
		'The only way to do great work is to love what you do.',
		'It always seems impossible until it’s done.',
		'Don’t watch the clock; do what it does. Keep going.',
		'You are never too old to set another goal or to dream a new dream.',
		'Your limitation—it’s only your imagination.',
		'Great things never come from comfort zones.',
		'Dream it. Wish it. Do it.',
		'Success doesn’t just find you. You have to go out and get it.',
		'The harder you work for something, the greater you’ll feel when you achieve it.',
		'Don’t stop when you’re tired. Stop when you’re done.',
		'Wake up with determination. Go to bed with satisfaction.',
		'Little things make big days.',
		'It’s going to be hard, but hard does not mean impossible.',
	];

	const [typed, setTyped] = useState(false);
	const [motivation, setMotivation] = useState<string | undefined>(undefined);

	const markedTyped = () => {
		setTimeout(() => {
			setTyped(true);

			const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
			const randomQuote = motivationalQuotes[randomIndex];
			setMotivation(randomQuote);
		}, 1000);
	};

	return (
		<div className='bg-background min-h-screen p-5 flex flex-col justify-center items-center'>
			<q
				className={`text-white text-center transition-all duration-300 ${
					typed ? 'opacity-100' : 'opacity-0'
				} `}>
				{motivation ?? ''}
			</q>
			<p className={`md:text-2xl text-white/30 ${typed ? 'text-sm mt-3' : 'text-lg'}`}>
				<TypingEffect text='404 | NOT FOUND' speed={30} onTyped={markedTyped} />
			</p>

			<Link
				href='/'
				className={`mt-3 hover:underline text-primary overflow-hidden transition-all duration-300 ${
					typed ? 'opacity-100' : 'opacity-0'
				} `}>
				<Button>Goto Home</Button>
			</Link>
		</div>
	);
}

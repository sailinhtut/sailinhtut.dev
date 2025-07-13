'use client';
import { CSSProperties, useEffect, useState } from 'react';

export default function TypingEffect({
	text,
	speed = 100,
	onTyped,
	className,
	style,
}: {
	text: string;
	speed: number;
	onTyped?: () => void;
	className?: string;
	style?: CSSProperties;
}) {
	const [displayText, setDisplayText] = useState('');

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			const letter = text[i];
			setDisplayText((prev) => prev + letter);
			i++;
			if (i >= text.length) {
				clearInterval(interval);
				onTyped?.();
			}
		}, speed);
		return () => clearInterval(interval);
	}, [text, speed]);

	return (
		<p className={className} style={style}>
			{displayText}
		</p>
	);
}

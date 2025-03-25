'use client';
import { useEffect, useState } from 'react';

export default function MouseEffect() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseEvent = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseEvent);
		return () => {
			window.removeEventListener('mousemove', handleMouseEvent);
		};
	}, []);

	return (
		<div
			className='w-[300px] h-[300px] fixed z-50  top-0 right-0 inset-0 pointer-events-none rounded-full blur-[100px] '
			style={{
				left: mousePosition.x - 150,
				top: mousePosition.y - 150,
				background: 'radial-gradient(rgba(16, 12, 242,0.15) 50%, transparent)',
			}}></div>
	);
}

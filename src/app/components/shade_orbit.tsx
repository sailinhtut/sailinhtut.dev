import { useEffect, useState } from "react";

export default function ShadeOrbitContainer({
	children,
	borderWidth = 2,
	borderRadius = 10,
	runDurationMillisecond = 60,
	colorSet = [
		'transparent',
		'transparent',
		'transparent',
		'hsl(var(--primary))',
		'transparent',
		'transparent',
	],
}: {
	runDurationMillisecond?: number;
	colorSet?: string[];
	borderRadius?: number;
	borderWidth?: number;
	children?: React.ReactNode;
}) {
	const [angle, setAngle] = useState(0);
	const colors = colorSet.join(',');

	useEffect(() => {
		let animationFrameId: any = undefined;

		function animateGradient() {
			setAngle((prev) => (prev + 1) % 360);
			animationFrameId = setTimeout(animateGradient, runDurationMillisecond);
		}
		animateGradient();
		return () => clearTimeout(animationFrameId); // Cleanup
	}, []);

	return (
		<div
			style={{
				position: 'relative',
				width: 'fit-content',
				padding: `${borderWidth}px`,
				borderRadius: `${borderRadius}px`,
				backgroundImage: `conic-gradient(from ${angle}deg, ${colors})`,
			}}>
			<div
				style={{
					position: 'absolute',
					top: '-2px',
					left: '-2px',
					filter: 'blur(10px)',
					width: 'calc(100% + 4px)',
					height: 'calc(100% + 4px)',
					padding: `${borderWidth}px`,
					borderRadius: `${borderRadius}px`,
					backgroundImage: `conic-gradient(from ${angle}deg, ${colors})`,
				}}></div>
			<div style={{ position: 'relative' }}>{children}</div>
		</div>
	);
}

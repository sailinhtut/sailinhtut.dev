import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Development Pricing',
	description:
		'Personal Development Services - Choose the best plan that suits your digital product vision',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{children}
		</div>
	);
}

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Me',
	description:
		'Get in touch with me for project inquiries, collaborations, or just to say hello.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

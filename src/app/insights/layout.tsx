import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog and Tutorials',
	description:
		'Read my latest blog posts, tutorials, and insights on software development and technology.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

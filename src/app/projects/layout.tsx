import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Source Code & Projects',
	description:
		'Explore my source code repositories and featured projects showcasing my development skills.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

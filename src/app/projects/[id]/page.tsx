import ProjectDetail from './project_detail';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
		const res = await fetch(`${baseUrl}/api/projects/${params.id}`, {
			cache: 'no-store',
		});
		const project = await res.json();

		if (!res.ok || !project) {
			throw new Error('Project not found');
		}

		return {
			title: project.title || 'Project',
			description: project.description || 'Explore this project in detail.',
			openGraph: {
				title: project.title,
				description: project.description || '',
				type: 'article',
				url: `/projects/${params.id}`,
			},
			twitter: {
				card: 'summary',
				title: project.title,
				description: project.description || '',
			},
		};
	} catch (error) {
		return {
			title: 'Project Not Found',
			description: 'This project could not be loaded.',
		};
	}
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	return <ProjectDetail id={id} />;
}

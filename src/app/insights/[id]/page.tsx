import InsightDetail from './insight_detail';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
		const res = await fetch(`${baseUrl}/api/insights/${params.id}`, { cache: 'no-store' });
		const insight = await res.json();

		if (!res.ok || !insight) {
			throw new Error('Insight not found');
		}

		return {
			title: insight.title || 'Insight',
			description: insight.description || 'Read insightful content.',
			openGraph: {
				title: insight.title,
				description: insight.description || '',
				images: [
					{
						url: insight.heading_image_url,
						width: 1200,
						height: 630,
						alt: insight.title,
					},
				],
			},
			twitter: {
				card: 'summary_large_image',
				title: insight.title,
				description: insight.description || '',
				images: [insight.heading_image_url],
			},
		};
	} catch (error) {
		return {
			title: 'Insight Not Found',
			description: 'This insight does not exist.',
		};
	}
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	return <InsightDetail id={id} />;
}

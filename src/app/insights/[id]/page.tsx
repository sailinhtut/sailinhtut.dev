import InsightDetail from './insight_detail';

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	return <InsightDetail id={id} />;
}

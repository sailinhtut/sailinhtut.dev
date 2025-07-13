import ProjectDetail from './project_detail';

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
	const { id } = await params;
	return <ProjectDetail id={id} />;
}

import { Project } from '@/models/project';
import { connectToDatabase } from '@/services/database';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

export async function GET() {
	await connectToDatabase();
	const projects = await Project.find({});
	return NextResponse.json(projects);
}

export async function POST(req: Request) {
	try {
		const body = await req.json();

		// Validate required fields
		const errors: string[] = [];
		if (!body.title || typeof body.title !== 'string') errors.push('Title is required.');
		if (!body.githubUrl || typeof body.githubUrl !== 'string')
			errors.push('GitHub URL is required.');
		if (body.preview_images && !Array.isArray(body.preview_images))
			errors.push('Preview images must be an array.');
		if (body.tags && !Array.isArray(body.tags)) errors.push('Tags must be an array.');

		if (errors.length > 0) {
			return NextResponse.json(
				{ error: 'Validation failed', details: errors },
				{ status: 400 }
			);
		}

		await connectToDatabase();
		const project = await Project.create(body);
		return NextResponse.json(project, { status: 201 });
	} catch (error: any) {
		console.error('POST /api/projects error:', error);
		if (error.name === 'ValidationError') {
			const details = Object.values(error.errors).map((e: any) => e.message);
			return NextResponse.json({ error: 'Validation failed', details }, { status: 422 });
		}
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

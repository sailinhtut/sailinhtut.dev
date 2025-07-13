import { Project } from '@/models/project';
import { connectToDatabase } from '@/services/database';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

interface Params {
	params: {
		id: string;
	};
}

export async function GET(request: Request, { params }: Params) {
	const id = params.id;

	await connectToDatabase();

	if (!Types.ObjectId.isValid(id)) {
		return NextResponse.json({ error: 'Invalid project ID.' }, { status: 400 });
	}

	const project = await Project.findById(id);

	if (!project) {
		return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
	}

	return NextResponse.json(project);
}

export async function PUT(req: NextRequest, { params }: Params) {
	try {
		const id = params.id;
		const body = await req.json();
		const { preview_images, tags } = body;

		// Validate id param
		if (!id || !Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{ error: 'Project ID is required and must be a valid ObjectId.' },
				{ status: 400 }
			);
		}

		// Soft validations
		const errors: string[] = [];
		if (preview_images && !Array.isArray(preview_images))
			errors.push('Preview images must be an array.');
		if (tags && !Array.isArray(tags)) errors.push('Tags must be an array.');

		if (errors.length > 0) {
			return NextResponse.json(
				{ error: 'Validation failed', details: errors },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		const updated = await Project.findByIdAndUpdate(id, body, { new: true });

		if (!updated) {
			return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
		}

		return NextResponse.json(updated);
	} catch (error: any) {
		console.error('PUT /api/projects error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: Params) {
	try {
		const id = params.id;

		if (!id || !Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{ error: 'Valid project ID is required.' },
				{ status: 400 }
			);
		}

		await connectToDatabase();
		const deleted = await Project.findByIdAndDelete(id);

		if (!deleted) {
			return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
		}

		return NextResponse.json({ message: 'Project deleted successfully.' });
	} catch (error: any) {
		console.error('DELETE /api/projects error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

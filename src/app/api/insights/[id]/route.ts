import { Insight } from '@/models/insight';
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
		return NextResponse.json({ error: 'Invalid insight ID.' }, { status: 400 });
	}

	const insight = await Insight.findById(id);

	if (!insight) {
		return NextResponse.json({ error: 'Insight not found.' }, { status: 404 });
	}

	return NextResponse.json(insight);
}

export async function PUT(req: NextRequest, { params }: Params) {
	try {
		const id = params.id;
		const body = await req.json();
		const { tags } = body;

		if (!id || !Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{ error: 'Insight ID is required and must be a valid ObjectId.' },
				{ status: 400 }
			);
		}

		const errors: string[] = [];
		if (tags && !Array.isArray(tags)) errors.push('Tags must be an array.');

		if (errors.length > 0) {
			return NextResponse.json(
				{ error: 'Validation failed', details: errors },
				{ status: 400 }
			);
		}

		await connectToDatabase();

		const updated = await Insight.findByIdAndUpdate(
			id,
			{ ...body, updated_at: new Date() },
			{ new: true }
		);
		console.log(updated);

		if (!updated) {
			return NextResponse.json({ error: 'Insight not found.' }, { status: 404 });
		}

		return NextResponse.json(updated);
	} catch (error: any) {
		console.error('PUT /api/insights error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest, { params }: Params) {
	try {
		const id = params.id;

		if (!id || !Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{ error: 'Valid insight ID is required.' },
				{ status: 400 }
			);
		}

		await connectToDatabase();
		const deleted = await Insight.findByIdAndDelete(id);

		if (!deleted) {
			return NextResponse.json({ error: 'Insight not found.' }, { status: 404 });
		}

		return NextResponse.json({ message: 'Insight deleted successfully.' });
	} catch (error: any) {
		console.error('DELETE /api/insights error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

import { Insight } from '@/models/insight'; // Make sure you have this file
import { connectToDatabase } from '@/services/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		await connectToDatabase();

		const { searchParams } = new URL(req.url);
		const page = parseInt(searchParams.get('page') || '1', 10);
		const limit = parseInt(searchParams.get('limit') || '10', 10);
		const skip = (page - 1) * limit;

		const total = await Insight.countDocuments();
		const totalPages = Math.ceil(total / limit);

		const insights = await Insight.find({}).sort({ created_at: -1 }).skip(skip).limit(limit);

		return NextResponse.json({
			success: true,
			page,
			totalPages,
			insights,
		});
	} catch (error) {
		console.error('GET /api/insights error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json();

		// Validation
		const errors: string[] = [];
		if (!body.title || typeof body.title !== 'string') errors.push('Title is required.');
		if (!body.description || typeof body.description !== 'string')
			errors.push('Description is required.');
		if (!body.content || typeof body.content !== 'string')
			errors.push('Content is required.');
		if (!body.writer || typeof body.writer !== 'string') errors.push('Writer is required.');
		if (body.tags && !Array.isArray(body.tags)) errors.push('Tags must be an array.');
		if (body.heading_image_url && typeof body.heading_image_url !== 'string')
			errors.push('Heading image URL must be a string.');

		if (errors.length > 0) {
			console.log(errors);
			return NextResponse.json(
				{ error: 'Validation failed', details: errors },
				{ status: 400 }
			);
		}

		await connectToDatabase();
		const newInsight = await Insight.create({
			...body,
			view_count: 0, // start from 0 by default
		});

		return NextResponse.json(newInsight, { status: 201 });
	} catch (error: any) {
		console.error('POST /api/insights error:', error);
		if (error.name === 'ValidationError') {
			const details = Object.values(error.errors).map((e: any) => e.message);
			return NextResponse.json({ error: 'Validation failed', details }, { status: 422 });
		}
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

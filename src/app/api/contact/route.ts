// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Schema, models, model } from 'mongoose';
import { connectToDatabase } from '@/services/database';

// Mongoose schema
const ContactSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: 'contacts' }
);

// Avoid model overwrite in dev
const Contact = models.Contact || model('Contact', ContactSchema);

// ✅ POST: Create a message
export async function POST(req: NextRequest) {
	try {
		await connectToDatabase();

		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
		}

		const newMessage = new Contact({ name, email, message });
		await newMessage.save();

		return NextResponse.json({ success: true, message: 'Message saved.' });
	} catch (error) {
		console.error('POST /api/contact error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function GET(req: NextRequest) {
	try {
		await connectToDatabase();

		const page = Number(req.nextUrl.searchParams.get('page') || '1');
		const limit = 10;
		const skip = (page - 1) * limit;

		const [messages, count] = await Promise.all([
			Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
			Contact.countDocuments(),
		]);

		const totalPages = Math.ceil(count / limit);

		return NextResponse.json({
			success: true,
			messages,
			page,
			totalPages,
		});
	} catch (error) {
		console.error('GET /api/contact error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}


export async function DELETE(req: NextRequest) {
	try {
		await connectToDatabase();

		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');

		if (!id) {
			return NextResponse.json({ error: 'Missing message ID.' }, { status: 400 });
		}

		const result = await Contact.findByIdAndDelete(id);

		if (!result) {
			return NextResponse.json({ error: 'Message not found.' }, { status: 404 });
		}

		return NextResponse.json({ success: true, message: 'Message deleted.' });
	} catch (error) {
		console.error('DELETE /api/contact error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

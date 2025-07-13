// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import  { Schema, models, model } from 'mongoose';
import { connectToDatabase } from '@/services/database';

// Define Mongoose schema for contact messages
const ContactSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: 'contacts' }
);

// Prevent model overwrite issue in dev
const Contact = models.Contact || model('Contact', ContactSchema);

// Handle POST request
export async function POST(req: NextRequest) {
	try {
		await connectToDatabase();

		const body = await req.json();
		const { name, email, message } = body;

		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
		}

		// Save to DB
		const newMessage = new Contact({ name, email, message });
		await newMessage.save();

		return NextResponse.json({ success: true, message: 'Message saved.' });
	} catch (error: any) {
		console.error('POST /api/contact error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

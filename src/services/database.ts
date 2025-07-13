// lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://sailinhtut76062:Saphire234%21%40%23@cluster0.02aqofg.mongodb.net/bobo?retryWrites=true&w=majority&appName=sailinhtut';

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable');
}

const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
	if (cached.conn) {
		console.log('🔄 Using cached MongoDB connection');
		return cached.conn;
	}

	if (!cached.promise) {
		console.log('⚡ Connecting to MongoDB...');
		cached.promise = mongoose.connect(MONGODB_URI, {
			bufferCommands: false,
		});
	}

	try {
		cached.conn = await cached.promise;
		console.log('✅ MongoDB connected');
		(global as any).mongoose = cached;
		return cached.conn;
	} catch (error) {
		console.error('❌ MongoDB connection failed:', error);
		throw error;
	}
}

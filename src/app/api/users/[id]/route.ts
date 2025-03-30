import { NextResponse } from 'next/server';
import { users } from '@/db/schema';
import db from '@/db/db_service';
import { eq } from 'drizzle-orm';

export async function GET(req: Request, { params }: { params: { id: string } }) {
	try {
		console.log(params);
		const { id } = await params;

		if (!id) {
			return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
		}

		const result = await db
			.select()
			.from(users)
			.where(eq(users.id, Number(id)));

		if (result.length === 0) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}

		return NextResponse.json(result[0]);
	} catch (error) {
		console.error('Error fetching user:', error);
		return NextResponse.error();
	}
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
	try {
		const { name, age, email } = await req.json();
		const result = await db
			.update(users)
			.set({ name, age, email })
			.where(eq(users.id, Number(params.id)));
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.error();
	}
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
	try {
		const result = await db.delete(users).where(eq(users.id, Number(params.id)));
		return NextResponse.json(result);
	} catch (error) {
		console.error('Error deleting user:', error);
		return NextResponse.error();
	}
}

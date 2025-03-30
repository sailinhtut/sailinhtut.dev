import { NextResponse } from 'next/server';
import { users } from '@/db/schema';
import db from '@/db/db_service';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
	try {
		const { name, age, email } = await req.json();
		const result = await db.insert(users).values({ name, age, email });
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json({
			message: 'Unexpected Error Occured',
			data: JSON.stringify(error),
		});
	}
}

export async function GET() {
	try {
		const result = await db.select().from(users);
		return NextResponse.json(result);
	} catch (error) {
		// return NextResponse.error();
		return NextResponse.json({
			message: 'Unexpected Error Occured',
			data: JSON.stringify(error),
		});
	}
}

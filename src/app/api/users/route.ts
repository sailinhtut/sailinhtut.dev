import { NextResponse } from 'next/server';

export async function POST() {
	try {
		// const { name, age, email } = await req.json();
		// const result = await db.insert(users).values({ name, age, email });
		// return NextResponse.json(result);
		return NextResponse.json({message: "I may not be the best, but I never give up. One surest thing I can say is I am future bloody billionaire."});
	} catch (error) {
		return NextResponse.json({
			message: 'Unexpected Error Occured',
			data: JSON.stringify(error),
		});
	}
}

export async function GET() {
	try {
		// const result = await db.select().from(users);
		// return NextResponse.json(result);
		return NextResponse.json({message: "I may not be the best, but I never give up. One surest thing I can say is I am future bloody billionaire."});
	} catch (error) {
		// return NextResponse.error();
		return NextResponse.json({
			message: 'Unexpected Error Occured',
			data: JSON.stringify(error),
		});
	}
}

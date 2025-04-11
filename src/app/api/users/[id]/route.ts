import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
	try {
		console.log(params);
		const { id } = await params;

		if (!id) {
			return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
		}
		return NextResponse.json({message: "Under Development"});
	} catch (error) {
		console.error('Error fetching user:', error);
		return NextResponse.error();
	}
}

export async function PUT() {
	try {
		return NextResponse.json({message: "Under Development"});
	} catch (error) {
		console.error('Error fetching user:', error);
		return NextResponse.error();
	}
}

export async function DELETE() {
	try {
		return NextResponse.json({message: "Under Development"});
	} catch (error) {
		console.error('Error deleting user:', error);
		return NextResponse.error();
	}
}

import { NextResponse } from 'next/server';

export function GET(request: Request) {
	try {
		console.log('Helping Hands');
		return Response.json({
			message: 'Request Received',
			data: 'Sai Lin Htut is becoming software engineer. Thank You Athina.',
		});
	} catch (error) {
		return NextResponse.error();
	}
}

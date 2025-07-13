import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
	const { username, password } = await req.json();
	const cookie = await cookies();

	if (username === 'sailinhtut21' && password === 'linlatt234!@#') {
		const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');

		cookie.set('_token', token, {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 * 24,
		});

		return NextResponse.json({ success: true });
	}

	return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

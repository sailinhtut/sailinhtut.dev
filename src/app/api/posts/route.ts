import { prisma } from '@/lib/database';
import { Palette } from 'lucide-react';
import { NextResponse } from 'next/server';

const getPaginationParams = (params: URLSearchParams) => {
	const page = parseInt(params.get('page') || '1', 10);
	const pageSize = parseInt(params.get('pageSize') || '15', 10);
	const skip = (page - 1) * pageSize;
	return { page, pageSize, skip };
};

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const { skip, pageSize, page } = getPaginationParams(searchParams);

	const posts = await prisma.post.findMany({
		skip,
		take: pageSize,
		include: {
			categories: true, // Include associated categories
		},
		orderBy: {
			createdAt: 'desc', // Order posts by creation date
		},
	});

	const totalPosts = await prisma.post.count();
	const totalPages = Math.ceil(totalPosts / pageSize);

	return NextResponse.json({
		posts,
		pagination: {
			currentPage: page,
			totalPages,
			pageSize,
			totalPosts,
		},
	});
}

export async function POST(req: Request) {
	const payload = await req.json();

	const { title, content, slug, categoryNames } = payload;

	// Create or fetch categories
	const categories = await Promise.all(
		categoryNames.map(async (name: string) => {
			const category = await prisma.category.upsert({
				where: { name: name },
				update: {},
				create: { name },
			});
			return category;
		})
	);

	const post = await prisma.post.create({
		data: {
			title,
			content,
			slug,
			categories: {
				connect: categories.map((category) => ({ id: category.id })),
			},
		},
		include: {
			categories: true,
		},
	});

	return NextResponse.json(post, { status: 201 });
}

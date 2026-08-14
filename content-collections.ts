import { compileMDX } from '@content-collections/mdx';
import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const publishedAt = z.union([z.string(), z.date()]).transform((value) => {
	return value instanceof Date ? value.toISOString().slice(0, 10) : value;
});

const posts = defineCollection({
	name: 'posts',
	typeName: 'Post',
	directory: 'posts',
	include: '**/*.mdx',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishedAt,
		isBlogPost: z.boolean().optional().default(false),
		draft: z.boolean().optional().default(false),
		pinned: z.boolean().optional().default(false),
		onFrontPage: z.boolean().optional().default(false),
		tags: z.array(z.string()).optional(),
		content: z.string(),
	}),
	transform: async (document, context) => {
		const slug = document._meta.path.replace(/\.mdx$/, '');

		return {
			...document,
			slug,
			url: `/posts/${slug}`,
			mdx: await compileMDX(context, document),
		};
	},
});

export default defineConfig({
	content: [posts],
});

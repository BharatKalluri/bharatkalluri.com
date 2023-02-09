import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
	branch: 'feat/tina',
	clientId: 'cd3469bc-a4aa-42e4-9d04-fad1576a9511', // Get this from tina.io
	token: 'faad5c4e486ac006caacfc6f01eed4ae23f7dbc7', // Get this from tina.io
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'posts',
				format: 'mdx',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
				],
			},
		],
	},
});

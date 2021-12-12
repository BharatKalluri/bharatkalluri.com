import fs from 'fs';
import path from 'path';
import { BlogFrontMatter } from '../types';
import matter from 'gray-matter';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));

export const getNoteMetadata = (filePath: string): { frontMatter: BlogFrontMatter; content: any } => {
	const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
	const { data, content } = matter(source);
	const frontMatter = { ...data, __resourcePath: filePath } as BlogFrontMatter;
	return {
		frontMatter: frontMatter,
		content: content,
	};
};

export const getNotesMetadata: () => BlogFrontMatter[] = () => {
	return postFilePaths.map((filePath): BlogFrontMatter => getNoteMetadata(filePath).frontMatter);
};

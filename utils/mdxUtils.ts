import fs from 'fs'
import path from 'path'
import { BlogFrontMatter } from '../types';
import matter from 'gray-matter';

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))

export const getNotesMetadata: () => BlogFrontMatter[] = () => {
    return postFilePaths.map((filePath): BlogFrontMatter => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { data } = matter(source);
        return { ...data, __resourcePath: filePath } as BlogFrontMatter;
    })
}
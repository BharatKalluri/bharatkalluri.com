import { BlogFrontMatter } from '../types';
import { Post } from 'contentlayer/generated';

export function searchInFrontMatter(frontMatter: Post, searchQuery: string): boolean | undefined {
	return (
		frontMatter.title.toLowerCase().includes(searchQuery) ||
		frontMatter.description?.toLowerCase().includes(searchQuery) ||
		frontMatter.tags?.join(' ').includes(searchQuery)
	);
}

export const sortByPinnedAndPublishedAt = (a: Post, b: Post): number => {
	if (a.pinned) {
		return -1;
	} else if (b.pinned) {
		return 1;
	} else {
		return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
	}
};

export const sortByPublishedAt = (a: Post, b: Post): number => {
	return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
};

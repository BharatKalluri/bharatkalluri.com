import { BlogFrontMatter } from '../types';

export function searchInFrontMatter(frontMatter: BlogFrontMatter, searchQuery: string): boolean {
	const isFound =
		searchQuery.length > 0
			? frontMatter.title.toLowerCase().includes(searchQuery) ||
			  frontMatter.description?.toLowerCase().includes(searchQuery) ||
			  frontMatter.tags?.join(' ').includes(searchQuery)
			: true;
	return isFound === true;
}

export const sortByPinnedAndPublishedAt = (a: BlogFrontMatter, b: BlogFrontMatter): number => {
	if (a.pinned === true) {
		return -1;
	} else if (b.pinned === true) {
		return 1;
	} else {
		return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
	}
};

export const sortByPublishedAt = (a: BlogFrontMatter, b: BlogFrontMatter): number => {
	return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
}

import { Post } from 'contentlayer/generated';
import { BASE_URL, DEFAULT_TITLE, PROFILE_IMAGE_URL } from '../constants/constants';

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

export const getOgImageUrl = (ctx: { postTitle: string }) => {
	const { postTitle } = ctx;
	return encodeURI(
		`https://dynamic-og-image-generator.vercel.app/api/generate?title=${postTitle}&author=${DEFAULT_TITLE}&avatar=${PROFILE_IMAGE_URL}&websiteUrl=${BASE_URL}&theme=github`,
	);
};

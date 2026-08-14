import * as t from 'io-ts';

export const PocketArticleInfoValidator = t.type({
	resolved_title: t.string,
	resolved_url: t.string,
	excerpt: t.string,
	time_added: t.string,
});
export type PocketArticleInfo = t.TypeOf<typeof PocketArticleInfoValidator>;

export const PocketRetrieveResponseValidator = t.type({
	list: t.record(t.string, PocketArticleInfoValidator),
});
export type PocketRetrieveResponse = t.TypeOf<typeof PocketRetrieveResponseValidator>;

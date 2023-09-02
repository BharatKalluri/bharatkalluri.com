import * as t from 'io-ts';

const SpotifyImageInfoValidator = t.type({
	url: t.string,
	height: t.number,
	width: t.number,
});
const ArtistInfoValidator = t.type({
	href: t.string,
	id: t.string,
	name: t.string,
	type: t.string,
	external_urls: t.record(t.string, t.string),
});
const AlbumInfoValidator = t.type({
	name: t.string,
	artists: t.array(ArtistInfoValidator),
	images: t.array(SpotifyImageInfoValidator),
});
const TrackInfoValidator = t.type({
	name: t.string,
	artists: t.array(ArtistInfoValidator),
	album: AlbumInfoValidator,
	external_urls: t.record(t.string, t.string),
});
export type TrackInfo = t.TypeOf<typeof TrackInfoValidator>;
const ShowInfoValidator = t.type({
	publisher: t.string,
	name: t.string,
	description: t.string,
	images: t.array(SpotifyImageInfoValidator),
});
const EpisodeInfoValidator = t.type({
	name: t.string,
	show: ShowInfoValidator,
	external_urls: t.record(t.string, t.string),
	href: t.string,
});
export type EpisodeInfo = t.TypeOf<typeof EpisodeInfoValidator>;
export const NowPlayingValidator = t.type({
	is_playing: t.boolean,
	timestamp: t.number,
	item: t.union([TrackInfoValidator, EpisodeInfoValidator]),
	currently_playing_type: t.union([t.literal('track'), t.literal('episode')]),
});
export type NowPlaying = t.TypeOf<typeof NowPlayingValidator>;

export const BookDataValidator = t.type({
	title: t.string,
	coverUrl: t.union([t.undefined, t.string]),
	url: t.union([t.undefined, t.string]),
});

export const PocketArticleInfoValidator = t.type({
	resolved_title: t.string,
	resolved_url: t.string,
	excerpt: t.string,
	time_added: t.number,
});
export type PocketArticleInfo = t.TypeOf<typeof PocketArticleInfoValidator>;

export const PocketRetrieveResponseValidator = t.type({
	list: t.record(t.string, PocketArticleInfoValidator),
});
export type PocketRetrieveResponse = t.TypeOf<typeof PocketRetrieveResponseValidator>;

export type BookData = t.TypeOf<typeof BookDataValidator>;

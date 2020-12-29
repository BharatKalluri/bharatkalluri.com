import * as t from "io-ts";

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
    currently_playing_type: t.union([t.literal("track"), t.literal("episode")]),
});
export type NowPlaying = t.TypeOf<typeof NowPlayingValidator>;

export const BlogFrontMatterValidator = t.type({
    title: t.string,
    description: t.union([t.string, t.undefined]),
    publishedAt: t.string,
    draft: t.union([t.boolean, t.undefined]),
    tags: t.union([t.array(t.string), t.undefined]),
    pinned: t.union([t.boolean, t.undefined]),
    __resourcePath: t.string,
});
export type BlogFrontMatter = t.TypeOf<typeof BlogFrontMatterValidator>;

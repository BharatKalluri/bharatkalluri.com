import { getNowPlaying } from "../../lib/spotify";
import { ICurrentlyPlayingInfo } from "../../interfaces";

type IExternalURLInfo = Record<string, string>

interface ISpotifyImageInfo {
    url: string
}

interface IArtistInfo {
    href: string
    id: string
    name: string
    type: string
}

interface IAlbumInfo {
    name: string
    artists: IArtistInfo[]
    images: ISpotifyImageInfo[]
}

interface ITrackInfo {
    name: string
    album: IAlbumInfo
    artists: IArtistInfo[]
    external_urls: IExternalURLInfo
}

interface IShowInfo {
    publisher: string
    name: string
    description: string
    images: ISpotifyImageInfo[]
}

interface IEpisodeInfo {
    name: string
    show: IShowInfo
    external_urls: IExternalURLInfo
    href: string
}

interface INowPlaying {
    is_playing: boolean
    timestamp: number
    item: ITrackInfo | IEpisodeInfo
    currently_playing_type: "track" | "episode"
}

export default async (_: any, res: any) => {
    const response = await getNowPlaying();

    // TODO: Type this response
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const nowPlayingData: INowPlaying = await response.json();
    const isPlaying = nowPlayingData.is_playing;
    const currentlyPlayingType = nowPlayingData.currently_playing_type;

    if (currentlyPlayingType === "track") {

        const nowPlayingItem = nowPlayingData.item as ITrackInfo;
        const title = nowPlayingItem.name;
        const artist = nowPlayingItem.artists
            .map((_artist) => _artist.name)
            .join(", ");
        const collectionName = nowPlayingItem.album.name;
        const collectionImageUrl = nowPlayingItem.album.images[0].url;
        const mediaURL = nowPlayingItem.external_urls.spotify;
        const currentlyPlayingInfo: ICurrentlyPlayingInfo = {
            collectionName,
            collectionImageUrl,
            artist,
            isPlaying,
            mediaURL,
            title
        };

        return res.status(200).json(currentlyPlayingInfo);

    } else if (currentlyPlayingType == "episode") {

        const nowPlayingItem = nowPlayingData.item as IEpisodeInfo;
        const showInfo = nowPlayingItem.show;

        const title = nowPlayingItem.name;
        const artist = showInfo.publisher;
        const collectionName = showInfo.name;
        const collectionImageUrl = showInfo.images[0].url;
        const mediaURL = nowPlayingItem.external_urls.spotify;

        const currentlyPlayingInfo: ICurrentlyPlayingInfo = {
            collectionName,
            collectionImageUrl,
            artist,
            isPlaying,
            mediaURL,
            title
        };

        return res.status(200).json(currentlyPlayingInfo);

    } else {

        return res.status(500).json({
            error: "unknown currently_playing_type"
        });

    }
};

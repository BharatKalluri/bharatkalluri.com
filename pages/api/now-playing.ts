import { getNowPlaying } from "../../lib/spotify";
import { ICurrentlyPlayingInfo } from "../../interfaces";
import decodeWith from "../../utils/ioTsUtils";
import {
    EpisodeInfo,
    NowPlaying,
    NowPlayingValidator,
    TrackInfo,
} from "../../types";

export default async (_: any, res: any) => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const rawNowPlayingData: NowPlaying = await response.json();
    const nowPlayingData: NowPlaying = decodeWith(NowPlayingValidator)(
        rawNowPlayingData
    );

    const isPlaying = nowPlayingData.is_playing;
    const currentlyPlayingType = nowPlayingData.currently_playing_type;

    if (currentlyPlayingType === "track") {
        const nowPlayingItem = nowPlayingData.item as TrackInfo;
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
            title,
        };

        return res.status(200).json(currentlyPlayingInfo);
    } else if (currentlyPlayingType == "episode") {
        const nowPlayingItem = nowPlayingData.item as EpisodeInfo;
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
            title,
        };

        return res.status(200).json(currentlyPlayingInfo);
    } else {
        return res.status(500).json({
            error: "unknown currently_playing_type",
        });
    }
};

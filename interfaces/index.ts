export interface IProjectCardProps {
    name: string;
    description: string;
    link: string;
}

export interface ICurrentlyPlayingInfo {
    collectionName: string
    collectionImageUrl: string
    artist: string
    isPlaying: boolean
    mediaURL: string
    title: string
}

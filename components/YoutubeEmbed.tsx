import React from "react";

interface IYoutubeEmbed {
    youtubeID: string;
}

export const YoutubeEmbed = (props: IYoutubeEmbed) => (
    <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${props.youtubeID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
);

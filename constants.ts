import { IProjectCardProps } from "./interfaces";
import { DefaultSeoProps } from "next-seo";

export const BASE_URL: string = "https://bharatkalluri.com";

export const PROJECT_LIST: Array<IProjectCardProps> = [
    {
        name: "Harmony",
        description:
            "I usually work on a desktop or a laptop, both of them run linux. Harmony was made so that I can sync my shell histories across multiple computers.",
        link: "https://github.com/BharatKalluri/harmony",
    },
    {
        name: "Mail Sanitizer",
        description: "A command line tool written in python to clear up your Email!",
        link: "https://github.com/BharatKalluri/mail-sanitizer",
    },
    {
        name: "Spotifydl",
        description:
            "Download music from Spotify with complete album art and metadata. Uses Spotify as a metadata source and Youtube as a video source.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash",
    },
    {
        name: "GTK Developer Handbook",
        description:
            "GNOME desktop apps are great, this was my effort to write a short book explaining how to develop native GTK apps for linux",
        link: "https://bharatkalluri.gitbook.io/gnome-developer-handbook/",
    },
    {
        name: "Short Circuit",
        description:
            "A developer scratchpad inspired by Boop(on mac). Now retired as boop has a native linux desktop client.",
        link: "https://flathub.org/apps/details/in.bharatkalluri.shortcircuit",
    },
    {
        name: "Splash",
        description:
            "A native GNOME high res desktop wallpaper changer application, uses unsplash as a source for wallpapers.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash",
    },
    {
        name: "Albert Extensions",
        description:
            "Albert is a quick launcher made for linux (similar to spotlight on mac). Albert did not seem to have a centralized repository of extensions, So I made it for myself!",
        link: "https://alberthub.netlify.app/",
    },
];
const DEFAULT_TITLE = "Bharat Kalluri";
const TWITTER_HANDLE = "@bharatkalluri";

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
    title: DEFAULT_TITLE,
    canonical: BASE_URL,
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: BASE_URL,
        title: DEFAULT_TITLE,
        images: [
            {
                url: "https://bharatkalluri.com/static/images/og.jpg",
                alt: DEFAULT_TITLE,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: TWITTER_HANDLE,
        site: TWITTER_HANDLE,
        cardType: "summary_large_image",
    },
};

export const RSS_URL = `/feed.xml`;
export const TWITTER_URL = "https://twitter.com/bharatkalluri";
export const GITHUB_URL = "https://github.com/bharatkalluri";
export const LINKEDIN_URL = "https://linkedin.com/bharatkalluri";
export const TELEGRAM_URL = "https://t.me/bharatkalluri";
export const EMAIL = "hi@bharatkalluri.com";

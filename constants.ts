import { IProjectCardProps } from "./interfaces";

export const BASE_URL: string = "https://bharatkalluri.in";

export const PROJECT_LIST: Array<IProjectCardProps> = [
    {
        name: "Harmony",
        description:
            "I usually work on a desktop or a laptop, both of them run linux. Harmony was made so that I can sync my shell histories across multiple computers.",
        link: "https://github.com/BharatKalluri/harmony"
    },
    {
        name: "Mail Sanatizer",
        description:
            "A command line tool written in python to clear up your Email!",
        link: "https://github.com/BharatKalluri/mail-sanitizer"
    },
    {
        name: "Spotifydl",
        description:
            "Download music from Spotify with complete album art and metadata. Uses Spotify as a metadata source and Youtube as a video source.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash"
    },
    {
        name: "GTK Developer Handbook",
        description:
            "GNOME desktop apps are great, this was my effort to write a short book explaining how to develop native GTK apps for linux",
        link: "https://bharatkalluri.gitbook.io/gnome-developer-handbook/"
    },
    {
        name: "Short Circuit",
        description:
            "A developer scratchpad inspired by Boop(on mac). Now retired as boop has a native linux desktop client.",
        link: "https://flathub.org/apps/details/in.bharatkalluri.shortcircuit"
    },
    {
        name: "Splash",
        description:
            "A native GNOME high res desktop wallpaper changer application, uses unsplash as a source for wallpapers.",
        link: "https://gitlab.gnome.org/Bharatkalluri/splash"
    },
    {
        name: "Albert Extensions",
        description:
            "Albert is a quick launcher made for linux (similar to spotlight on mac). Albert did not seem to have a centralized repository of extensions, So I made it for myself!",
        link: "https://alberthub.netlify.app/"
    }
];
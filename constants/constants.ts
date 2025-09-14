import { IProjectCardProps } from '../interfaces';
import { Metadata } from 'next';

// TODO: on local, this should be localhost
export const BASE_URL: string = 'https://bharatkalluri.com';

export const PROJECT_LIST: Array<IProjectCardProps> = [
	{
		name: 'Book: From scratch',
		description:
			'An ambitious project to build the webstack from scratch. Event loop chapter is done, DNS is next. Work in progress!',
		link: 'https://fromscratch.bharatkalluri.com',
	},
	{
		name: 'Closeknit',
		description:
			'A social network for your closeknit groups of friends and families. Where you can share your items and subscriptions!',
		link: 'https://closeknit.bharatkalluri.com',
	},
	{
		name: 'CleanEmail',
		description: 'An email cleaner tool to get rid of annoying subscriptions.',
		link: 'https://cleanmail.bharatkalluri.com/',
	},
	{
		name: 'Flashcard',
		description: 'No BS contact sharing, designed for sharing contacts in a events.',
		link: 'https://flashcard.bharatkalluri.com',
	},
	{
		name: 'Harmony',
		description: 'Harmony is a command line application to sync shell history cross systems',
		link: 'https://github.com/BharatKalluri/harmony',
	},
	{
		name: 'Spotify-dl',
		description: 'Download music from Spotify with complete album art and metadata.',
		link: 'https://github.com/BharatKalluri/spotifydl',
	},
	{
		name: 'Rewinder',
		description: 'Travel back in time and get audio from the recent past. On demand. Runs completely locally.',
		link: 'https://github.com/BharatKalluri/rewinder',
	},
	{
		name: 'Mail Sanitizer',
		description:
			'A command line tool written in python to clear up your email & get rid of annoying subscriptions!',
		link: 'https://github.com/BharatKalluri/mail-sanitizer',
	},
	{
		name: 'GTK Developer Handbook',
		description:
			'GNOME desktop apps are great! This was my effort to write a short book explaining how to develop native GTK apps for linux',
		link: 'https://bharatkalluri.gitbook.io/gnome-developer-handbook/',
	},
	{
		name: 'Splash',
		description:
			'A native GNOME high res desktop wallpaper changer application, uses unsplash as a source for wallpapers.',
		link: 'https://gitlab.gnome.org/Bharatkalluri/splash',
	},
	{
		name: 'Short Circuit',
		description:
			'A developer scratchpad inspired by Boop(on mac). Now retired as boop has a native linux desktop client.',
		link: 'https://flathub.org/apps/details/in.bharatkalluri.shortcircuit',
	},
	{
		name: 'Albert Extensions',
		description:
			'Albert is a quick launcher made for linux (similar to spotlight on mac). Albert did not seem to have a centralized repository of extensions, So I made it for myself!',
		link: 'https://alberthub.netlify.app/',
	},
];
export const DEFAULT_TITLE = 'Bharat Kalluri';
export const TWITTER_HANDLE = '@bharatkalluri';
export const PROFILE_IMAGE_URL =
	'https://0.gravatar.com/avatar/831a39efcc6acf09fcf99f97cd3bf8612df145907298f10e36db47cf9e24f0be?size=512';

export const DEFAULT_SEO_CONFIG: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: DEFAULT_TITLE,
		template: `%s | ${DEFAULT_TITLE}`,
	},
	icons: {
		shortcut: '/static/logo.png',
	},
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: BASE_URL,
		title: DEFAULT_TITLE,
		description: 'Developer & writer',
		images: [
			{
				url: 'https://bharatkalluri.com/static/images/og.jpg',
				alt: DEFAULT_TITLE,
				width: 1280,
				height: 720,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		creator: TWITTER_HANDLE,
		card: 'summary_large_image',
	},
};

export const RSS_URL = `/feed.xml`;
export const BLUESKY_URL = 'https://bsky.app/profile/bharatkalluri.com';
export const TWITTER_URL = 'https://twitter.com/bharatkalluri';
export const GITHUB_URL = 'https://github.com/bharatkalluri';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/bharatkalluri/';
export const TELEGRAM_URL = 'https://t.me/bharatkalluri';
export const EMAIL = 'kalluribharat@gmail.com';

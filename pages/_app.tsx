import React from 'react';
import { AppProps } from 'next/app';
import '../styles/main.css';
import { DefaultSeo } from 'next-seo';
import { BASE_URL, DEFAULT_TITLE, TWITTER_HANDLE } from '../constants/constants';

const seo_config = {
	title: DEFAULT_TITLE,
	canonical: BASE_URL,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: BASE_URL,
		title: DEFAULT_TITLE,
		images: [
			{
				url: 'https://bharatkalluri.com/static/images/og.jpg',
				alt: DEFAULT_TITLE,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: TWITTER_HANDLE,
		site: TWITTER_HANDLE,
		cardType: 'summary_large_image',
	},
};

function App({ Component, pageProps }: AppProps): React.ReactNode {
	return (
		<>
			<DefaultSeo {...seo_config} />
			<Component {...pageProps} />
		</>
	);
}

export default App;

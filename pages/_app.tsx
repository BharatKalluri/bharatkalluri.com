import React from 'react';
import { AppProps } from 'next/app';
import '../styles/main.css';
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO_CONFIG } from '../constants/constants';

function App({ Component, pageProps }: AppProps): React.ReactNode {
	return (
		<>
			<DefaultSeo {...DEFAULT_SEO_CONFIG} />
			<Component {...pageProps} />
		</>
	);
}

export default App;

import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/main.css';
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO_CONFIG } from '../constants';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const theme = extendTheme({
	components: {
		Text: {
			baseStyle: {
				fontSize: 'lg',
			},
		},
	},
});

function App({ Component, pageProps }: AppProps): React.ReactNode {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<DefaultSeo {...DEFAULT_SEO_CONFIG} />
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default App;

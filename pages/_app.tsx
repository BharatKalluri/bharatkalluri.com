import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import '../styles/main.css';
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO_CONFIG } from '../constants';
const themeConfig: ThemeConfig = {
	initialColorMode: 'light',
};
const theme = extendTheme({
	config: themeConfig,
	components: {
		Text: {
			baseStyle: {
				fontSize: 'lg',
			},
		},
	},
});

function App({ Component, pageProps }: AppProps): React.ReactNode {
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

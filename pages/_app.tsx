import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/main.css";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG } from "../constants";
import "@fontsource/abeezee/400.css";

const theme = extendTheme({
    fonts: {
        heading: "ABeeZee",
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

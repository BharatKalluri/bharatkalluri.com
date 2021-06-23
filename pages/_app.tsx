import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/main.css";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG } from "../constants";

function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO_CONFIG} />
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default App;

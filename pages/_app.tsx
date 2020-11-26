import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/main.css";
import { MDXComponents } from "../components/MDXComponents";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG } from "../constants";

function App({ Component, pageProps }: AppProps): React.ReactNode {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO_CONFIG} />
            <ChakraProvider>
                <MDXProvider components={MDXComponents}>
                    <Component {...pageProps} />
                </MDXProvider>
            </ChakraProvider>
        </>
    );
}

export default App;

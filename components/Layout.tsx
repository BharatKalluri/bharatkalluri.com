import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../constants";

type LayoutProps = {
    children?: ReactNode;
    title: string;
    description?: string;
    relativeCanonicalURL: string;
};

interface INavBarButtonProps {
    text: string;
    href: string;
}

const NavBarButton = (props: INavBarButtonProps) => {
    return (
        <NextLink href={props.href} passHref>
            <Button as="a" variant="ghost" fontWeight="400">
                {props.text}
            </Button>
        </NextLink>
    );
};

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            as="nav"
            p={3}
            mx="auto"
            maxW="900px"
        >
            <Box flexDirection="row" mt="0.5rem">
                <IconButton
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                />
            </Box>
            <Box flexDirection="row">
                <NavBarButton text="Blog" href="/blog" />
                <NavBarButton text="Notes" href="/notes" />
                <NavBarButton text="About" href="/about" />
                <NavBarButton text="Home" href="/" />
            </Box>
        </Stack>
    );
};

const Layout = ({ children, title, description, relativeCanonicalURL }: LayoutProps) => {
    const canonicalURL = `${BASE_URL}/${relativeCanonicalURL}`;
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: title,
                    description: description
                }}
            />
            <div>
                <Head>
                    <title>{title ? `${title} |` : ""} Bharat Kalluri</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "4g3tskl7lj");
                    ` }}></script>
                </Head>
                <header>
                    <NavBar />
                </header>
                <Flex
                    as="main"
                    justifyContent="center"
                    flexDirection="column"
                    px={4}
                    mx="auto"
                    mt={8}
                    maxW="800px"
                >
                    <Stack spacing={10}>{children}</Stack>
                </Flex>
                <Footer />
            </div>
        </>
    );
};

export default Layout;

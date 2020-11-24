import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "./Footer";

type Props = {
    children?: ReactNode;
    title?: string;
};

interface INavBarButtonProps {
    text: string;
    href: string;
}

const NavBarButton = (props: INavBarButtonProps) => {
    return (
        <NextLink href={props.href} passHref>
            <Button
                as="a"
                variant="ghost"
                fontWeight="400"
            >
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
            <Box flexDirection="row" mt='0.5rem'>
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

const Layout = ({ children, title = "" }: Props) => (
    <div>
        <Head>
            <title>
                {title} {title ? "|" : ""} Bharat Kalluri
            </title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
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
            <Stack spacing={10}>
                {children}
            </Stack>
        </Flex>
        <Footer />
    </div>
);

export default Layout;

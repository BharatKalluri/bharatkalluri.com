import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/layout";
import { Button, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
            <Button as="a" variant="ghost" p={[1, 4]}>
                {props.text}
            </Button>
        </NextLink>
    );
};

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            as="nav"
            mt={[0, 8]}
            mb={8}
            mx="auto"
            maxW="900px"
        >
            <Box>
                <NavBarButton text="Bharat Kalluri" href="/" />
            </Box>
            <Box flexDirection="row">
                <NavBarButton text="Blog" href="/blog" />
                <NavBarButton text="Notes" href="/notes" />
                <NavBarButton text="About" href="/about" />

                <IconButton
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                    p={[1, 4]}
                />
            </Box>
        </Flex>
    );
};

const Layout = ({ children, title = "" }: Props) => (
    <div>
        <Head>
            <title>{title} {title ? '|' : ''} Bharat Kalluri</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header>
            <nav>
                <NavBar />
            </nav>
        </header>
        <Flex
            as="main"
            justifyContent="center"
            flexDirection="column"
            px={2}
            py={2}
            mx="auto"
            maxW="800px"
        >
            {children}
        </Flex>
    </div>
);

export default Layout;

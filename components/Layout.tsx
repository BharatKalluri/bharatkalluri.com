import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { Box, Flex, Stack } from "@chakra-ui/layout";
import { IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../constants";
import { Button } from "@chakra-ui/button";

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

const navBarItems: Array<{ href: string, text: string }> = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/blog",
        text: "Blog"
    },
    {
        href: "/notes",
        text: "Notes"
    },
    {
        href: "/dashboard",
        text: "Dashboard"
    },
    {
        href: "/reading-log",
        text: "Reading log"
    },
    {
        href: "/about",
        text: "About"
    }
];

const NavBarMenuItem = (props: INavBarButtonProps) => {
    return (
        <NextLink href={props.href} passHref={true}>
            <MenuItem>
                {props.text}
            </MenuItem>
        </NextLink>
    );
};

const NavBarButton = (props: INavBarButtonProps) => {
    return (
        <NextLink href={props.href} passHref>
            <Button as="a" variant="ghost" fontWeight="400">
                {props.text}
            </Button>
        </NextLink>
    );
};

const MobileLeftNavBar = () => {
    return (
        <Box display={{ md: "none", lg: "none", xl: "none", base: "block" }}>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                />
                <MenuList>
                    {navBarItems.map((item) => (
                        <NavBarMenuItem text={item.text} href={item.href} key={item.href} />
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

const DesktopLeftNavBar = () => {
    return (
        <Box flexDirection="row" display={{ md: "block", lg: "block", xl: "block", base: "none" }}>
            {navBarItems.map((item) => (
                <NavBarButton text={item.text} href={item.href} key={item.href} />
            ))}
        </Box>
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
            maxW="1200px"
            wrap="wrap"
        >
            <Box flexDirection="row" mt="0.5rem">
                <IconButton
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                />
            </Box>
            <DesktopLeftNavBar />
            <MobileLeftNavBar />
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
                    description: description,
                }}
            />
            <div>
                <Head>
                    <title>{title ? `${title} |` : ""} Bharat Kalluri</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "4g3tskl7lj");
                    `,
                        }}
                    ></script>
                    <link rel="icon" type="image/png" href="/static/logo.png" />
                </Head>
                <header>
                    <NavBar />
                </header>
                <Flex as="main" justifyContent="center" flexDirection="column" px={4} mx="auto" mt={8} maxW="1000px">
                    <Stack spacing={10}>{children}</Stack>
                </Flex>
                <Footer />
            </div>
        </>
    );
};

export default Layout;

import { Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: "hsl(208, 99%, 44%)",
        dark: "hsl(208, 95%, 68%)"
    };

    const href = props.href;
    const isInternalLink =
        href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color={color[colorMode]} {...props} />
            </NextLink>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};
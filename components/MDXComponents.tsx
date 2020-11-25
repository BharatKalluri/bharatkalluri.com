import { Alert, Box, Code, Heading, Text } from "@chakra-ui/react";
import CustomCodeBlock from "./CustomCodeBlock";
import { CustomLink } from "./CustomLink";
import { YoutubeEmbed } from "./YoutubeEmbed";
import React from "react";

// TODO: I have no clue how to type this stuff
export const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" {...props} />,
    h2: (props: any) => <Heading as="h1" size="xl" {...props} />,
    h3: (props: any) => <Heading as="h1" size="xl" {...props} />,
    inlineCode: (props: any) => <Code colorScheme="blue" {...props} />,
    code: CustomCodeBlock,
    p: (props: any) => <Text as="p" lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pl={4} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: (props: any) => (
        <Alert w="100%" variant="left-accent" status="info" {...props} />
    ),
    a: CustomLink,
    YoutubeEmbed: YoutubeEmbed
};

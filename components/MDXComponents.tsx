import { Alert, Box, Code, Heading, Text } from "@chakra-ui/react";
import CustomCodeBlock from "./CustomCodeBlock";
import { CustomLink } from "./CustomLink";
import { YoutubeEmbed } from "./YoutubeEmbed";
import React from "react";

export const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="2xl" my={4} {...props} />,
    h2: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    h3: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    inlineCode: (props: any) => <Code colorScheme="blue" {...props} />,
    code: CustomCodeBlock,
    p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: (props: any) => (
        <Alert mt={4} w="100%" variant="left-accent" status='info' {...props} />
    ),
    a: CustomLink,
    YoutubeEmbed: YoutubeEmbed,
};

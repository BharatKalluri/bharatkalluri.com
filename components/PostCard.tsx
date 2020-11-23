import Link from "next/link";
import {Link as ChakraLink} from "@chakra-ui/layout";
import {Box, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";

interface IPostCardProps {
    frontMatter: any
    folderPrefix: string
}

export const PostCard = ({frontMatter, folderPrefix}: IPostCardProps) => {
    const {title} = frontMatter;
    const slug = frontMatter.__resourcePath
        .replace(folderPrefix, "")
        .replace(".mdx", "");
    return (
        <Link href={`${folderPrefix}${slug}`} passHref>
            <ChakraLink
                w="100%"
                _hover={{textDecoration: "none"}}
                marginY="1rem"
                borderWidth="1px"
                borderRadius="lg"
                padding='1.5rem'
            >
                <Box display="block" width="100%">
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection="column"
                    >
                        <Heading size="md" as="h3" letterSpacing='tight'>
                            {title}
                        </Heading>
                        {frontMatter.description && <Text mt='1rem' fontSize='md'>{frontMatter.description}</Text>}
                    </Flex>
                </Box>
            </ChakraLink>
        </Link>
    );
};
import { Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";
import decodeWith from "../utils/ioTsUtils";
import { BlogFrontMatter, BlogFrontMatterValidator } from "../types";

interface IPostLayoutProps {
    frontMatter: BlogFrontMatter;
    children: JSX.Element | Array<JSX.Element>;
}

const PostLayout = (props: IPostLayoutProps) => {
    const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
    const publishedAt = frontMatter.publishedAt;
    const postTitle = frontMatter.title;
    const postDescription = frontMatter.description;
    const postLink = `${frontMatter.__resourcePath.replace(".mdx", "")}`;

    return (
        <>
            <Layout
                title={postTitle}
                description={postDescription}
                relativeCanonicalURL={postLink}
            >
                <Stack
                    as="article"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    w="100%"
                >
                    <Text fontSize="6xl" fontWeight="extrabold">
                        {frontMatter.title}
                    </Text>
                    <Text color="grey">Bharat Kalluri / {publishedAt}</Text>
                    {props.children}
                </Stack>
            </Layout>
        </>
    );
};

export default PostLayout;

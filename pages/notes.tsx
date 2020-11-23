import { Flex, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as notes } from "./note/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";

const Blog = () => {
    return (
        <Layout title='Notes'>
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                mt={8}
                py={4}
                maxW="800px"
            >
                <Heading letterSpacing="tight" mb={2} as="h1">
                    Notes
                </Heading>
                {notes.map((frontMatter: any) => (
                    <PostCard
                        key={frontMatter.title}
                        frontMatter={frontMatter}
                        folderPrefix="note/"
                    />
                ))}
            </Flex>
        </Layout>
    );
};

export default Blog;

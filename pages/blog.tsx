import {Flex, Heading} from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import {frontMatter as blogPosts} from "./blog/*.mdx";
import {PostCard} from "../components/PostCard";
import React from "react";

const Blog = () => {
    return (
        <Layout title='Blog'>
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                mt={8}
                py={4}
                maxW='800px'
            >
                <Heading letterSpacing='tight' mb={2} as="h1">
                    Blog
                </Heading>
                {blogPosts.map((frontMatter: any) => (
                    <PostCard
                        key={frontMatter.title}
                        frontMatter={frontMatter}
                        folderPrefix="blog/"
                    />
                ))}
            </Flex>
        </Layout>
    );
};

export default Blog;

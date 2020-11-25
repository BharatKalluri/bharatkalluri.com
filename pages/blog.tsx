import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as blogPosts } from "./blog/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";
import { IBlogFrontMatter } from "../interfaces";

const Blog = () => {
    const sortedPosts = blogPosts.sort(
        (a: IBlogFrontMatter, b: IBlogFrontMatter) =>
            Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
    return (
        <Layout title="Blog">
            <Heading letterSpacing="tight" mb={2} as="h1">
                Blog
            </Heading>
            {sortedPosts.map((frontMatter: IBlogFrontMatter) => (
                <PostCard
                    key={frontMatter.title}
                    frontMatter={frontMatter}
                    folderPrefix="blog/"
                />
            ))}
        </Layout>
    );
};

export default Blog;

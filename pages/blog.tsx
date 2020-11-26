import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as blogPosts } from "./blog/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";
import { BlogFrontMatter } from "../types";

const Blog = () => {
    const sortedPosts = blogPosts.sort((a: BlogFrontMatter, b: BlogFrontMatter) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
    return (
        <Layout title="Blog" description='Blog posts by Bharat Kalluri' relativeCanonicalURL='/blog'>
            <Heading letterSpacing="tight" mb={2} as="h1">
                Blog
            </Heading>
            {sortedPosts.map((frontMatter: BlogFrontMatter) => (
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

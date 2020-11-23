import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as blogPosts } from "./blog/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";

const Blog = () => {
    const sortedPosts = blogPosts.sort(
        (a: any, b: any) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
    return (
        <Layout title="Blog">
            <Heading letterSpacing="tight" mb={2} as="h1">
                Blog
            </Heading>
            {sortedPosts.map((frontMatter: any) => (
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

import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as notes } from "./note/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";

const Blog = () => {
    const sortedNotes = notes.sort((a: any, b: any) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    });
    return (
        <Layout title="Notes">
            <Heading letterSpacing="tight" mb={2} as="h1">
                Notes
            </Heading>
            {sortedNotes.map((frontMatter: any) => (
                <PostCard
                    key={frontMatter.title}
                    frontMatter={frontMatter}
                    folderPrefix="note/"
                />
            ))}
        </Layout>
    );
};

export default Blog;

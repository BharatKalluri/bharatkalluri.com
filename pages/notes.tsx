import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as notes } from "./note/*.mdx";
import { PostCard } from "../components/PostCard";
import React from "react";
import { BlogFrontMatter } from "../types";

const Blog = () => {
    const sortedNotes = notes.sort((a: BlogFrontMatter, b: BlogFrontMatter) => {
        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
    return (
        <Layout
            title="Notes"
            description='These are the notes of Bharat, everything from random learnings to interesting facts'
            relativeCanonicalURL='/notes'
        >
            <Heading letterSpacing="tight" mb={2} as="h1">
                Notes
            </Heading>
            {sortedNotes.map((frontMatter: BlogFrontMatter) => (
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

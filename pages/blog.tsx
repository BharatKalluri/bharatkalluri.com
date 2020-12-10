import { Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as blogPosts } from "./blog/*.mdx";
import { PostCard } from "../components/PostCard";
import React, { useState } from "react";
import { BlogFrontMatter } from "../types";
import { SearchIcon } from "@chakra-ui/icons";

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const sortedPosts = blogPosts.sort(
        (a: BlogFrontMatter, b: BlogFrontMatter) => {
            return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
        }
    );
    return (
        <Layout
            title="Blog"
            description="Blog posts by Bharat Kalluri"
            relativeCanonicalURL="/blog"
        >
            <Heading letterSpacing="tight" mb={2} as="h1">
                Blog
            </Heading>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </InputGroup>
            {sortedPosts
                .filter((f: BlogFrontMatter) => !f.draft)
                .filter((f: BlogFrontMatter) =>
                    searchQuery.length > 0
                        ? f.title.includes(searchQuery) ||
                          f.description?.includes(searchQuery)
                        : true
                )
                .map((frontMatter: BlogFrontMatter) => (
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

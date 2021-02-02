import { Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Layout from "../components/Layout";

// @ts-ignore
import { frontMatter as notes } from "./posts/*.mdx";
import { PostCard } from "../components/PostCard";
import React, { useState } from "react";
import { BlogFrontMatter } from "../types";
import { SearchIcon } from "@chakra-ui/icons";
import {
    searchInFrontMatter,
    sortByPinnedAndPublishedAt,
} from "../utils/postUtils";

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const sortedNotes = notes.sort(sortByPinnedAndPublishedAt);
    return (
        <Layout
            title="Notes"
            description="These are the notes of Bharat, everything from random learnings to interesting facts"
            relativeCanonicalURL="/notes"
        >
            <Heading letterSpacing="tight" mb={2} as="h1">
                Notes
            </Heading>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input
                    type="text"
                    placeholder="Search"
                    onChange={(e) =>
                        setSearchQuery(e.target.value?.toLowerCase())
                    }
                />
            </InputGroup>
            {sortedNotes
                .filter((f: BlogFrontMatter) => !f.draft)
                .filter((f: BlogFrontMatter) =>
                    searchInFrontMatter(f, searchQuery)
                )
                .map((frontMatter: BlogFrontMatter) => (
                    <PostCard
                        key={frontMatter.title}
                        frontMatter={frontMatter}
                        folderPrefix="posts/"
                    />
                ))}
        </Layout>
    );
};

export default Blog;

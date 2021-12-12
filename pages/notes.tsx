import { Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import React, { useState } from 'react';
import { BlogFrontMatter } from '../types';
import { SearchIcon } from '@chakra-ui/icons';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { getNotesMetadata } from '../utils/mdxUtils';

export function getStaticProps() {
	return { props: { notes: getNotesMetadata() } };
}

const Blog = ({ notes }: { notes: BlogFrontMatter[] }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');
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
			<Text>
				Random learnings to interesting facts, these are notes which are not comprehensive enough to be a blog
				post but usually provide value by themselves. Some of these notes graduate to a blog post if I think
				they are flushed out enough.
			</Text>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search"
					onChange={(e) => setSearchQuery(e.target.value?.toLowerCase())}
				/>
			</InputGroup>
			{sortedNotes
				.filter((f: BlogFrontMatter) => !f.draft && f.isBlogPost !== true)
				.filter((f: BlogFrontMatter) => searchInFrontMatter(f, searchQuery))
				.map((frontMatter: BlogFrontMatter) => (
					<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="posts/" />
				))}
		</Layout>
	);
};

export default Blog;

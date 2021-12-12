import { Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
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
	const sortedPosts = notes.sort(sortByPinnedAndPublishedAt);
	return (
		<Layout title="Blog" description="Blog posts by Bharat Kalluri" relativeCanonicalURL="/blog">
			<Heading letterSpacing="tight" mb={2} as="h1">
				Blog
			</Heading>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
			</InputGroup>
			{sortedPosts
				.filter((f: BlogFrontMatter) => !f.draft)
				.filter((f: BlogFrontMatter) => searchInFrontMatter(f, searchQuery))
				.filter((f: BlogFrontMatter) => f.isBlogPost === true)
				.map((frontMatter: BlogFrontMatter) => (
					<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="posts/" />
				))}
		</Layout>
	);
};

export default Blog;

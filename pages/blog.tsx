import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { allPosts } from 'contentlayer/generated';
import { H1Styles } from '../style_constants';

const Blog = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedPosts = allPosts.sort(sortByPinnedAndPublishedAt);
	return (
		<Layout title="Blog" description="Blog posts by Bharat Kalluri" relativeCanonicalURL="/blog">
			<h1 className={H1Styles}>Blog</h1>

			{/*TODO: pull the search into its own component*/}
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.300" />
				</InputLeftElement>
				<Input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
			</InputGroup>

			{sortedPosts
				.filter((f) => !f.draft)
				.filter((f) => f.isBlogPost)
				.filter((f) => (searchQuery.length > 0 ? searchInFrontMatter(f, searchQuery) : true))
				.map((post) => (
					<PostCard post={post} key={post.url} />
				))}
		</Layout>
	);
};

export default Blog;

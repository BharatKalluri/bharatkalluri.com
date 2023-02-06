import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import React, { useState } from 'react';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { allPosts } from 'contentlayer/generated';
import { H1Styles } from '../style_constants';
import { SearchBar } from 'components/SearchBar';

const Blog = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedPosts = allPosts.sort(sortByPinnedAndPublishedAt);
	return (
		<Layout title="Blog" description="Blog posts by Bharat Kalluri" relativeCanonicalURL="/blog">
			<h1 className={H1Styles}>Blog</h1>

			<SearchBar onChangeFn={(e) => setSearchQuery(e.target.value)} />

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

'use client';
import React, { useState } from 'react';
import { allPosts } from 'contentlayer/generated';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../../utils/postUtils';
import { H1Styles } from '../../constants/style-constants';
import { SearchBar } from '../../components/SearchBar';
import { PostCard } from '../../components/PostCard';

const Blog = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedPosts = allPosts.sort(sortByPinnedAndPublishedAt);
	return (
		<>
			<h1 className={H1Styles}>Blog</h1>

			<SearchBar onChangeFn={(e) => setSearchQuery(e.target.value)} />

			{sortedPosts
				.filter((f) => !f.draft)
				.filter((f) => f.isBlogPost)
				.filter((f) => (searchQuery.length > 0 ? searchInFrontMatter(f, searchQuery) : true))
				.map((post) => (
					<PostCard post={post} key={post.url} />
				))}
		</>
	);
};

export default Blog;

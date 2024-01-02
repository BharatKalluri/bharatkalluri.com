'use client';

import { Post } from 'contentlayer/generated';
import { SearchBar } from './SearchBar';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { useState } from 'react';
import { PostCard } from './PostCard';

const PostsList = ({ postList }: { postList: Array<Post> }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedPosts = postList.sort(sortByPinnedAndPublishedAt);
	return (
		<>
			<SearchBar onChangeFn={(e) => setSearchQuery(e.target.value)} />

			{sortedPosts
				.filter((f) => !f.draft)
				.filter((f) => (searchQuery.length > 0 ? searchInFrontMatter(f, searchQuery) : true))
				.map((post) => (
					<PostCard post={post} key={post.url} />
				))}
		</>
	);
};

export default PostsList;

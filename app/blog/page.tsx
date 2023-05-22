import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { H1Styles } from '../../constants/style-constants';
import PostsList from '../../components/PostsList';

const Blog = () => {
	return (
		<>
			<h1 className={H1Styles}>Blog</h1>
			<PostsList postList={allPosts} isNotesView={false} />
		</>
	);
};

export default Blog;

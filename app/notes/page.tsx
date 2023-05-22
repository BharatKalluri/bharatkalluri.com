'use client';

import { allPosts } from 'contentlayer/generated';
import React from 'react';
import { H1Styles } from '../../constants/style-constants';
import PostsList from '../../components/PostsList';

const Page = () => {
	return (
		<>
			<h1 className={H1Styles}>Field Notes</h1>
			<PostsList postList={allPosts} isNotesView={true} />
		</>
	);
};

export default Page;

import { allPosts } from 'contentlayer/generated';
import React from 'react';
import { H1Styles } from '../../constants/style-constants';
import PostsList from '../../components/PostsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Notes',
	description: 'Unstructured & raw thoughts on everything.',
};

export default function Page() {
	return (
		<>
			<h1 className={H1Styles}>Field Notes</h1>
			<PostsList postList={allPosts} isNotesView={true} />
		</>
	);
}

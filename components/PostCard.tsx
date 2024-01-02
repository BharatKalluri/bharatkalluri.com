import React from 'react';
import LinkCard from './LinkCard';
import { Post } from 'contentlayer/generated';

interface IPostCardProps {
	post: Post;
}

export const PostCard = ({ post }: IPostCardProps) => {
	return (
		<LinkCard
			name={post.title}
			description={post.description}
			link={post.url}
			tags={post.tags}
			isPinned={post.pinned}
			publishedAt={post.publishedAt}
		/>
	);
};

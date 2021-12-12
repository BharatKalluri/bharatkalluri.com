import React from 'react';
import LinkCard from './LinkCard';
import decodeWith from '../utils/ioTsUtils';
import { BlogFrontMatterValidator } from '../types';

interface IPostCardProps {
	frontMatter: any;
	folderPrefix: string;
}

export const PostCard = (props: IPostCardProps) => {
	const frontMatter = decodeWith(BlogFrontMatterValidator)(props.frontMatter);
	const slug = frontMatter.__resourcePath.replace(props.folderPrefix, '').replace('.mdx', '');
	return (
		<LinkCard
			name={frontMatter.title}
			description={frontMatter.description}
			link={`${props.folderPrefix}${slug}`}
			tags={frontMatter.tags}
			isPinned={frontMatter.pinned}
		/>
	);
};

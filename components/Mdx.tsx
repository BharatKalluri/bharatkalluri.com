import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';
import { YoutubeEmbed } from './YoutubeEmbed';
import Link from 'next/link';

interface MdxProps {
	code: string;
}

export const CustomLink = (props: any) => {
	const href = props.href;

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return <a {...props} />;
	}

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
			{...props}
		/>
	);
};

// TODO: I have no clue how to type this stuff
export const ComponentMap: MDXComponents = {
	a: CustomLink,
	YoutubeEmbed: YoutubeEmbed,
};

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={ComponentMap} />;
}

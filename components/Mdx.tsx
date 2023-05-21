import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from 'mdx/types';
import {CustomLink} from "./CustomLink";

interface MdxProps {
	code: string;
}


// TODO: I have no clue how to type this stuff
export const ComponentMap: MDXComponents = {
	a: CustomLink,
};

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article>
			<Component components={{ ComponentMap }} />
		</article>
	);
}

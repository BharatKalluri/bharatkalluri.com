import { allPosts } from 'contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import { CustomLink } from '../../../components/CustomLink';
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { Metadata } from 'next';
import { BASE_URL } from '../../../constants/constants';
import { default as SyntaxHighlighter } from 'react-syntax-highlighter/dist/esm/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { H1Styles } from '../../../constants/style-constants';

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post._raw.flattenedPath,
	}));
}

const CodeBlock = (props: any) => {
	const { className, children } = props.children.props;
	const language = className?.replace(/language-/, '');
	return (
		<SyntaxHighlighter language={language} style={oneDark}>
			{children}
		</SyntaxHighlighter>
	);
};

// TODO: I have no clue how to type this stuff
const ComponentMap: MDXComponents = {
	a: CustomLink,
	pre: CodeBlock,
};

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) notFound();
	const postTitle = post.title;
	const postDescription = post.description;
	const canonicalURL = `${BASE_URL}${post.url}`;
	return {
		title: postTitle,
		description: postDescription,
		keywords: post.tags,
		metadataBase: new URL(BASE_URL),
		openGraph: {
			title: postTitle,
			description: postDescription,
			url: canonicalURL,
		},
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

	// 404 if the post does not exist.
	if (!post) notFound();

	// Parse the MDX file via the useMDXComponent hook.
	const MDXContent = getMDXComponent(post.body.code);
	const publishedAt = post.publishedAt;

	return (
		<>
			<article className={'prose prose-sm'}>
				<section className={'py-2'}>
					<h1 className={H1Styles}>{post.title}</h1>
					<p>Bharat Kalluri / {publishedAt}</p>
				</section>
				<MDXContent components={ComponentMap} />
			</article>
			<section className={'mx-auto'}>
				<iframe
					src="https://bharatkalluri.substack.com/embed"
					className={'min-w-full h-64 bg-white border-0'}
				/>
			</section>
		</>
	);
}

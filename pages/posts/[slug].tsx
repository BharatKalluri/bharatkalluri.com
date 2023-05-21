import Layout from '../../components/Layout';
import React from 'react';
import { allPosts } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXComponents } from 'mdx/types';
import { CustomLink } from '../../components/CustomLink';
import { useMDXComponent } from 'next-contentlayer/dist/hooks';

interface MdxProps {
	code: string;
}

// TODO: I have no clue how to type this stuff
const ComponentMap: MDXComponents = {
	a: CustomLink,
};

function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article>
			<Component components={{ ComponentMap }} />
		</article>
	);
}

export default function PostPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const post = allPosts.find((p) => p.slug === props.slug);
	if (!post) throw new Error(`no post found for slug ${props.slug}`);
	const publishedAt = post.publishedAt;
	const postTitle = post.title;
	const postDescription = post.description;
	const postLink = post.url;

	return (
		<>
			<Layout
				title={postTitle}
				description={postDescription}
				relativeCanonicalURL={`/posts/${postLink}`}
				keywords={post.tags}
			>
				<article className={'prose  prose-slate'}>
					<section className={'py-2'}>
						<h1 className={'text-4xl font-black py-4'}>{post.title}</h1>
						<p>Bharat Kalluri / {publishedAt}</p>
					</section>
					<Mdx code={post.body.code} />
				</article>
			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async (context: InferGetStaticPropsType<typeof getStaticProps>) => {
	return {
		props: {
			slug: context.params.slug,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = allPosts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

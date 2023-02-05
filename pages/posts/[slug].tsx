import Layout from '../../components/Layout';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { allPosts } from 'contentlayer/generated';
import { Mdx } from '../../components/Mdx';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

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
				<Stack
					as="article"
					spacing={5}
					justifyContent="center"
					alignItems="flex-start"
					m="0 auto 4rem auto"
					w="100%"
				>
					<Flex direction={'column'} py={5} width={'100%'}>
						<Heading as={'h1'} size={'2xl'} paddingY={2} overflowWrap={'normal'}>
							{post.title}
						</Heading>
						<Text color="grey">Bharat Kalluri / {publishedAt}</Text>
					</Flex>

					<Mdx code={post.body.code} />
				</Stack>
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

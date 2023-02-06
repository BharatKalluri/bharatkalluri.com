import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';
import { PROJECT_LIST } from '../constants';
import { sortByPublishedAt } from '../utils/postUtils';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/button';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PostCard } from '../components/PostCard';
import { allPosts, Post } from 'contentlayer/generated';

const ProjectListComponent = () => (
	<section className={'flex flex-col space-y-5'}>
		<Heading>Projects</Heading>
		<Stack direction="column" spacing={5}>
			{PROJECT_LIST.map((project) => (
				<LinkCard
					key={project.name}
					name={project.name}
					description={project.description}
					link={project.link}
				/>
			))}
		</Stack>
	</section>
);

const ProfileSection = () => (
	<section className={'flex space-x-8 py-8'}>
		<img
			className={'rounded-full h-20'}
			src={'https://pbs.twimg.com/profile_images/1395084526884298754/rg1BFxMS_400x400.jpg'}
			alt={'Bharat Kalluri'}
		/>
		<section className={'text-left flex flex-col h-25 justify-between'}>
			<h1 className={'text-5xl font-bold'}>Hi, I&apos;m Bharat Kalluri 👋</h1>
			<p>Senior software engineer at Refyne. I write about programming, books and open source!</p>
		</section>
	</section>
);

const RecentBlogPosts = ({ recentNotes }: { recentNotes: Post[] }) => (
	<section className={'flex flex-col space-y-5'}>
		<Heading>Writings</Heading>
		<Stack direction="column" spacing={5}>
			{recentNotes.map((frontMatter) => (
				<PostCard post={frontMatter} key={frontMatter.url} />
			))}

			<Flex flexDirection={'row-reverse'}>
				<NextLink href={'/blog'}>
					<Button>
						<Stack direction="row" align="center" style={{ width: '100%' }} justify="space-between">
							<Text>Read all posts</Text>
							<AiOutlineArrowRight size="20" />
						</Stack>
					</Button>
				</NextLink>
			</Flex>
		</Stack>
	</section>
);

const IndexPage = () => {
	const recentPosts = allPosts
		.filter((el) => el.isBlogPost)
		.sort(sortByPublishedAt)
		.slice(0, 3);
	return (
		<Layout title="Bharat Kalluri's Website" relativeCanonicalURL="">
			<Stack direction="column" spacing={5}>
				<ProfileSection />

				<RecentBlogPosts recentNotes={recentPosts} />

				<ProjectListComponent />
			</Stack>
		</Layout>
	);
};

export default IndexPage;

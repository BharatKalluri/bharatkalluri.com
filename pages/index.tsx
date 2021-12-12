import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';
import { PROJECT_LIST } from '../constants';
import { getNotesMetadata } from '../utils/mdxUtils';
import { BlogFrontMatter } from '../types';
import { sortByPinnedAndPublishedAt } from '../utils/postUtils';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/button';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PostCard } from '../components/PostCard';

export function getStaticProps() {
	return { props: { notes: getNotesMetadata() } };
}

const ProjectListComponent = () => (
	<Stack py={5} spacing={5}>
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
	</Stack>
);

const ProfileSection = () => (
	<Stack direction={{ base: 'column', md: 'row' }} spacing={8} py={10}>
		<Image
			borderRadius="full"
			boxSize="130px"
			src={'https://pbs.twimg.com/profile_images/1395084526884298754/rg1BFxMS_400x400.jpg'}
			alt={'Bharat Kalluri'}
		/>
		<Stack justifyContent={'center'}>
			<Heading fontSize="5xl" fontWeight="extrabold">
				Hi, I&apos;m Bharat Kalluri 👋
			</Heading>
			<Text fontSize={'md'}>
				Senior software engineer at Refyne. I write about programming, books and open source!
			</Text>
		</Stack>
	</Stack>
);

const RecentBlogPosts = ({ recentNotes }: { recentNotes: BlogFrontMatter[] }) => (
	<Stack py={5} spacing={5}>
		<Heading>Writings</Heading>
		<Stack direction="column" spacing={5}>
			{recentNotes.map((frontMatter) => (
				<PostCard key={frontMatter.title} frontMatter={frontMatter} folderPrefix="posts/" />
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
	</Stack>
);

const IndexPage = ({ notes }: { notes: BlogFrontMatter[] }) => {
	const recentPosts = notes
		.filter((note) => note.isBlogPost === true)
		.sort(sortByPinnedAndPublishedAt)
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

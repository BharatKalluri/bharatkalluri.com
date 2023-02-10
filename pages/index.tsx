import Layout from '../components/Layout';
import LinkCard from '../components/LinkCard';
import { PROJECT_LIST } from '../constants';
import { sortByPublishedAt } from '../utils/postUtils';
import NextLink from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PostCard } from '../components/PostCard';
import { allPosts, Post } from 'contentlayer/generated';
import { CardListStyles, H1Styles, H2Styles } from '../style_constants';
import clsx from 'clsx';

const ProjectListComponent = () => (
	<section className={'flex flex-col'}>
		<h2 className={H2Styles}>Projects</h2>
		<section className={CardListStyles}>
			{PROJECT_LIST.map((project) => (
				<LinkCard
					key={project.name}
					name={project.name}
					description={project.description}
					link={project.link}
				/>
			))}
		</section>
	</section>
);

const ProfileSection = () => (
	<section className={'flex pb-12 flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'}>
		<img
			className={'rounded-full h-20 w-20'}
			src={'https://pbs.twimg.com/profile_images/1395084526884298754/rg1BFxMS_400x400.jpg'}
			alt={'Bharat Kalluri'}
		/>
		<section className={'text-left flex flex-col space-y-5 md:space-y-2'}>
			<h1 className={H1Styles}>Hi, I&apos;m Bharat Kalluri 👋</h1>
			<p>Senior software engineer at Refyne. I write about programming, books and open source!</p>
		</section>
	</section>
);

const RecentBlogPosts = ({ recentNotes }: { recentNotes: Post[] }) => (
	<section className={'flex flex-col'}>
		<h2 className={H2Styles}>Writings</h2>
		<section className={CardListStyles}>
			{recentNotes.map((frontMatter) => (
				<PostCard post={frontMatter} key={frontMatter.url} />
			))}

			<div className={'flex flex-row-reverse'}>
				<NextLink href={'/blog'}>
					<button>
						<div className={'flex flex-row space-x-4'}>
							<p className={'font-black'}>All posts</p>
							<AiOutlineArrowRight size="20" />
						</div>
					</button>
				</NextLink>
			</div>
		</section>
	</section>
);

const IndexPage = () => {
	const recentPosts = allPosts
		.filter((el) => el.isBlogPost)
		.sort(sortByPublishedAt)
		.slice(0, 3);
	return (
		<Layout title="Bharat Kalluri's Website" relativeCanonicalURL="">
			<section className={clsx('flex', 'flex-col')}>
				<ProfileSection />

				<RecentBlogPosts recentNotes={recentPosts} />

				<ProjectListComponent />
			</section>
		</Layout>
	);
};

export default IndexPage;

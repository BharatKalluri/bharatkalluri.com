import { CardListStyles, H1Styles, H2Styles } from '../constants/style-constants';
import { PROJECT_LIST } from '../constants/constants';
import LinkCard from '../components/LinkCard';
import { allPosts, Post } from 'contentlayer/generated';
import { PostCard } from '../components/PostCard';
import NextLink from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import clsx from 'clsx';
import React from 'react';

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
			<p>Senior software engineer @ Refyne. A blog exploring the fundamentals of computer science</p>
		</section>
	</section>
);

const TopBlogPosts = ({ notes }: { notes: Post[] }) => (
	<section className={'flex flex-col'}>
		<h2 className={H2Styles}>Writings</h2>
		<section className={CardListStyles}>
			{notes.map((frontMatter) => (
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
	const topPosts = allPosts.filter((el) => el.onFrontPage);
	return (
		<>
			<section className={clsx('flex', 'flex-col')}>
				<ProfileSection />

				<TopBlogPosts notes={topPosts} />

				<ProjectListComponent />
			</section>
		</>
	);
};

export default IndexPage;

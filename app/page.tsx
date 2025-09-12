import { CardListStyles, H1Styles, ProjectGridStyles } from '../constants/style-constants';
import { PROFILE_IMAGE_URL, PROJECT_LIST } from '../constants/constants';
import LinkCard from '../components/LinkCard';
import { allPosts, Post } from 'contentlayer/generated';
import { PostCard } from '../components/PostCard';
import clsx from 'clsx';
import React from 'react';
import { CustomLink } from '../components/CustomLink';

const ProjectListComponent = () => (
	<section className={'flex flex-col'}>
		<h2 className={H1Styles}>Projects</h2>
		<section className={ProjectGridStyles}>
			{PROJECT_LIST.map((project) => (
				<LinkCard
					key={project.name}
					name={project.name}
					description={project.description}
					link={project.link}
                    shouldOpenInNewTab={true}
				/>
			))}
		</section>
	</section>
);

const ProfileSection = () => (
	<section className={'flex px-2 py-4 flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'}>
		<img className={'rounded-full h-20 w-20'} src={PROFILE_IMAGE_URL} alt={'Bharat Kalluri'} />
		<section className={'text-left flex flex-col space-y-5 md:space-y-2'}>
			<h1 className={H1Styles}>Hi, I&apos;m Bharat Kalluri 👋</h1>
			<p>
				Senior software engineer @ Refyne. This is my side of the internet where I explore fundamentals of
				computer science.
			</p>
		</section>
	</section>
);

const TopBlogPosts = ({ notes }: { notes: Post[] }) => (
	<section className={'flex flex-col relative'}>
		<h2 className={H1Styles}>Popular writings</h2>
		<section className={CardListStyles}>
			{notes.map((frontMatter) => (
				<PostCard post={frontMatter} key={frontMatter.url} />
			))}
		</section>
		<div className={'flex justify-end mt-4'}>
			<CustomLink
				href="/blog"
				className={'inline-flex items-center px-4 py-2 text-sm font-medium hover:text-blue-800 transition-colors duration-200'}
			>
				View all posts →
			</CustomLink>
		</div>
	</section>
);

const IndexPage = () => {
	const topPosts = allPosts.filter((el) => el.onFrontPage).sort((a,b)=> Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
	return (
		<>
			<section className={clsx('flex', 'flex-col', 'space-y-2')}>
				<ProfileSection />

				<TopBlogPosts notes={topPosts} />

				<ProjectListComponent />
			</section>
		</>
	);
};

export default IndexPage;

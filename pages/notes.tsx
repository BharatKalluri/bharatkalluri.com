import Layout from '../components/Layout';
import { PostCard } from '../components/PostCard';
import React, { useState } from 'react';
import { searchInFrontMatter, sortByPinnedAndPublishedAt } from '../utils/postUtils';
import { allPosts } from 'contentlayer/generated';
import { CustomLink } from '../components/Mdx';
import { H1Styles } from '../style_constants';
import { SearchBar } from '../components/SearchBar';

const Blog = () => {
	const notes = allPosts.filter((p) => !p.isBlogPost);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const sortedNotes = notes.sort(sortByPinnedAndPublishedAt);
	return (
		<Layout
			title="Field Notes"
			description="These are the notes of Bharat, everything from random learnings to interesting facts"
			relativeCanonicalURL="/notes"
		>
			<h1 className={H1Styles}>Field Notes</h1>
			<CustomLink
				href={
					'https://bharatkalluri.notion.site/25c2619e180b41619b121ff3095188f7?v=b8cb72d3f8634461ae7a3f95c3330d9a'
				}
			>
				A sneak peak into whats coming next!
			</CustomLink>

			<SearchBar onChangeFn={(e) => setSearchQuery(e.target.value)} />

			{sortedNotes
				.filter((f) => !f.draft)
				.filter((f) => searchInFrontMatter(f, searchQuery))
				.map((post) => (
					<PostCard post={post} key={post.url} />
				))}
		</Layout>
	);
};

export default Blog;

import Layout from '../components/Layout';
import React from 'react';
import LinkCard from '../components/LinkCard';
import { PocketArticleInfo } from '../types';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { InferGetStaticPropsType } from 'next';
import { H1Styles } from '../style_constants';

export async function getStaticProps() {
	const response: AxiosResponse<PocketArticleInfo[]> = await axios.get(`${BASE_URL}/api/reading-log`);
	const pocketArticlesInfo = response.data;
	return {
		props: {
			pocketArticlesInfo: pocketArticlesInfo ? pocketArticlesInfo : [],
		},
		revalidate: 21600, // in seconds
	};
}

const Header = () => {
	return <h1 className={H1Styles}>Reading Log</h1>;
};

const Description: () => JSX.Element = () => (
	<p>These are some of my favorite articles and videos I have come across!</p>
);

function ReadingLogCards(props: { readingLogFromApi: PocketArticleInfo[] }): JSX.Element {
	const { readingLogFromApi } = props;
	return (
		<section>
			{readingLogFromApi.reverse().map((el) => (
				<div className={'py-2'} key={el.resolved_url}>
					<LinkCard name={el.resolved_title} link={el.resolved_url} key={el.resolved_url} />
				</div>
			))}
		</section>
	);
}

const ReadingLogPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout title="Reading Log" relativeCanonicalURL="/uses">
			<section className={'space-y-4'}>
				<Header />
				<Description />
				<ReadingLogCards readingLogFromApi={props.pocketArticlesInfo} />
			</section>
		</Layout>
	);
};
export default ReadingLogPage;

import { Stack, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import React from 'react';
import LinkCard from '../components/LinkCard';
import { PocketArticleInfo } from '../types';
import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import { InferGetStaticPropsType } from 'next';

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
	return (
		<Text fontSize="6xl" fontWeight="extrabold">
			Reading Log
		</Text>
	);
};

const Description: () => JSX.Element = () => (
	<Text>These are some of my favorite articles and videos I have come across!</Text>
);

function ReadingLogCards(props: { readingLogFromApi: PocketArticleInfo[] }): JSX.Element {
	const { readingLogFromApi } = props;
	return (
		<>
			{readingLogFromApi.map((el) => (
				<LinkCard
					name={el.resolved_title}
					description={`${el.excerpt} ...`}
					link={el.resolved_url}
					key={el.resolved_url}
				/>
			))}
		</>
	);
}

const ReadingLogPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout title="Reading Log" relativeCanonicalURL="/uses">
			<Stack direction="column" spacing={5} fontSize="lg">
				<Header />
				<Description />
				<ReadingLogCards readingLogFromApi={props.pocketArticlesInfo} />
			</Stack>
		</Layout>
	);
};
export default ReadingLogPage;

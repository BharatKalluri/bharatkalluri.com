import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { PocketArticleInfo } from '../../types';
import { BASE_URL } from '../../constants/constants';
import { H1Styles } from '../../constants/style-constants';
import LinkCard from '../../components/LinkCard';

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
			{readingLogFromApi.map((el) => (
				<div className={'py-2'} key={el.resolved_url}>
					<LinkCard name={el.resolved_title} link={el.resolved_url} key={el.resolved_url} />
				</div>
			))}
		</section>
	);
}

const ReadingLogPage = async () => {
	const response: AxiosResponse<PocketArticleInfo[]> = await axios.get(`${BASE_URL}/api/reading-log`);
	const pocketArticlesInfo = response.data;
	return (
		<section className={'space-y-4'}>
			<Header />
			<Description />
			<ReadingLogCards readingLogFromApi={pocketArticlesInfo} />
		</section>
	);
};
export default ReadingLogPage;
